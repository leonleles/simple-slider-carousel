import { useEffect, useRef, useState } from "react";

import "./styles.scss";

export function SliderCarousel() {
  const [widthRail, setWidthRail] = useState(0);
  const [scrollWidthList, setScrollWidthList] = useState(0);
  const imageCarouselListWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const railWidth = imageCarouselListWrapper?.current?.offsetWidth || 0;
    const scrollWidth = imageCarouselListWrapper?.current?.scrollWidth || 0;

    setWidthRail(railWidth);
    setScrollWidthList(scrollWidth);
  }, [imageCarouselListWrapper]);

  function CategoryGrid() {
    return (
      <div className="home-category-list__category-grid">
        <div className="home-category-list__category-grid__wrap">
          <img
            className="image"
            src="https://cf.shopee.com.br/file/0aef302f7fe42c87cd9f4ebc95c75944_tn"
            alt=""
          />
          <div className="text-wrap">
            <span>Lorem ipsum</span>
          </div>
        </div>
      </div>
    );
  }

  function ImageCarouselItem() {
    return (
      <div className="image-carousel__item">
        <div className="home-category-list__group">
          <CategoryGrid />
          <CategoryGrid />
        </div>
      </div>
    );
  }

  function carrouselEffect(right: boolean) {
    let scrolling = 0;
    const containerScrolled =
      imageCarouselListWrapper?.current?.scrollLeft || 0;

    if (right) {
      if (widthRail + widthRail + containerScrolled <= scrollWidthList) {
        scrolling = containerScrolled + widthRail;
      } else {
        scrolling = scrollWidthList;
      }
    } else {
      scrolling = -widthRail;
    }

    imageCarouselListWrapper?.current?.scrollBy({
      top: 0,
      left: scrolling,
      behavior: "smooth",
    });
  }

  return (
    <div className="section">
      <div className="image-carousel">
        <div
          className="image-carousel__item-list-wrapper"
          ref={imageCarouselListWrapper}
        >
          <div className="image-carousel__item-list">
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />

            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />

            <ImageCarouselItem />
            <ImageCarouselItem />
            <ImageCarouselItem />
          </div>
        </div>
        <div
          className="carousel-arrow carousel-arrow--prev carousel-arrow--hint"
          onClick={() => carrouselEffect(false)}
        >
          <svg
            enable-background="new 0 0 13 20"
            viewBox="0 0 13 20"
            x="0"
            y="0"
            className="svg-icon icon-arrow-left-bold"
          >
            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
          </svg>
        </div>
        <div
          className="carousel-arrow carousel-arrow--next carousel-arrow--hint"
          onClick={() => carrouselEffect(true)}
        >
          <svg
            enable-background="new 0 0 13 21"
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
}
