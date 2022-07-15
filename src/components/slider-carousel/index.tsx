import { ReactNode, useEffect, useRef, useState } from "react";

import "./styles.scss";

interface Props {
  children: ReactNode;
}

export const SliderCarousel: React.FC<Props> = ({ children }) => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const imageCarouselListWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { scrollLeft = 0 } = imageCarouselListWrapper?.current || {};

    if (scrollLeft === 0) setShowNext(true);
  }, [imageCarouselListWrapper]);

  function carrouselEffect(right: boolean) {
    let scrolling = 0;
    const {
      scrollLeft = 0,
      offsetWidth = 0,
      scrollWidth = 0,
    } = imageCarouselListWrapper?.current || {};
    const scrolled = scrollWidth - offsetWidth;

    if (scrolled === scrollLeft && right) return;

    if (right) {
      if (offsetWidth + offsetWidth + scrollLeft <= scrollWidth) {
        scrolling = scrollLeft + offsetWidth;
      } else {
        scrolling = scrollWidth;
      }
    } else {
      scrolling = -offsetWidth;
    }

    imageCarouselListWrapper?.current?.scrollBy({
      top: 0,
      left: scrolling,
      behavior: "smooth",
    });
  }

  function listenScroll(e: any) {
    const { scrollLeft = 0, scrollWidth = 0, offsetWidth = 0 } = e.target || {};
    const scrolled = scrollWidth - offsetWidth;

    if (scrollLeft <= 0) {
      setShowPrev(false);
    } else if (showPrev === false) {
      setShowPrev(true);
    }

    if (scrolled === scrollLeft) {
      setShowNext(false);
    } else if (showNext === false) {
      setShowNext(true);
    }
  }

  return (
    <div className="section">
      <div className="image-carousel">
        <div
          className="image-carousel__item-list-wrapper"
          ref={imageCarouselListWrapper}
          onScroll={listenScroll}
        >
          <div className="image-carousel__item-list">{children}</div>
        </div>
        <div
          className={`carousel-arrow carousel-arrow--prev carousel-arrow--hint ${
            !showPrev ? "carousel-arrow--hidden" : ""
          }`}
          onClick={() => carrouselEffect(false)}
        >
          <svg
            enableBackground="new 0 0 13 20"
            viewBox="0 0 13 20"
            x="0"
            y="0"
            className="svg-icon icon-arrow-left-bold"
          >
            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
          </svg>
        </div>
        <div
          className={`carousel-arrow carousel-arrow--next carousel-arrow--hint ${
            !showNext ? "carousel-arrow--hidden" : ""
          }`}
          onClick={() => carrouselEffect(true)}
        >
          <svg
            enableBackground="new 0 0 13 21"
            viewBox="0 0 13 21"
            x="0"
            y="0"
            className="svg-icon icon-arrow-right-bold"
          >
            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
};
