import React from "react";
import "./styles.scss";

interface Props {
  title: string
  imageSrc: string
}

export const SliderCarouselGrid: React.FC<Props> = ({title, imageSrc}) => {
  return (
    <div className="home-category-list__category-grid">
      <div className="home-category-list__category-grid__wrap">
        <img
          className="image"
          src={imageSrc}
          alt={title}
        />
        <div className="text-wrap">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
