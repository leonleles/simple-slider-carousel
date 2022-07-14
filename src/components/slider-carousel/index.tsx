import { useEffect, useRef, useState } from "react";
import "./styles.scss";

export function SliderCarousel() {
  const [lastItemVisible, setLastItemVisible] = useState(0);
  const [widthRail, setWidthRail] = useState(0);
  const [widthChidrenItem, setWidthChidrenItem] = useState(0);
  const [scrollWidthList, setScrollWidthList] = useState(0);
  const [translate, setTranslate] = useState(0);
  const imageCarouselList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstChildrenWidth =
      imageCarouselList?.current?.firstChild?.offsetWidth || 0;
    const railWidth = imageCarouselList?.current?.offsetWidth || 0;
    const scrollWidth = imageCarouselList?.current?.scrollWidth || 0;

    if (firstChildrenWidth === 0 || railWidth === 0 || scrollWidth === 0)
      return;

    const perPage = railWidth / firstChildrenWidth;

    if (perPage === 0) return;

    setLastItemVisible(perPage);
    setWidthChidrenItem(firstChildrenWidth);
    setWidthRail(railWidth);
    setScrollWidthList(scrollWidth);
  }, [imageCarouselList]);

  useEffect(() => {
    imageCarouselList.current.style.transform = `translate(${translate}px, 0px)`;
  }, [translate]);

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

  function handleNext() {
    const childNodes = imageCarouselList?.current?.childNodes?.length || 0;
    const perPage = widthRail / widthChidrenItem;

    if (scrollWidthList <= widthRail || childNodes === 0) return;

    const nextCurrent = lastItemVisible + perPage;

    let currentPageTranslate;

    if (nextCurrent <= childNodes) {
      const minPerPage = perPage;
      currentPageTranslate = widthChidrenItem * minPerPage;

      setLastItemVisible(lastItemVisible + minPerPage);
      setTranslate(translate + currentPageTranslate * -1);
      return;
    }

    if (Math.min(nextCurrent, childNodes) > lastItemVisible) {
      const nextCurrentMin =
        Math.min(nextCurrent, childNodes) - lastItemVisible;
      const newLastChild = lastItemVisible + nextCurrentMin;
      currentPageTranslate = widthChidrenItem * nextCurrentMin;

      setLastItemVisible(newLastChild);
      setTranslate(translate + currentPageTranslate * -1);
    }
  }

  function handlePrev() {
    const perPage = widthRail / widthChidrenItem;
    const backAmount = lastItemVisible - perPage;

    const gotTo = Math.min(perPage, backAmount);

    if (gotTo > 0) {
      const currentPageTranslate = widthChidrenItem * gotTo;

      setLastItemVisible(lastItemVisible - gotTo);
      setTranslate(translate + currentPageTranslate);
    }
  }

  return (
    <div className="section">
      <div className="image-carousel">
        <div className="image-carousel__item-list-wrapper">
          <div className="image-carousel__item-list" ref={imageCarouselList}>
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
          onClick={handlePrev}
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
          onClick={handleNext}
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
