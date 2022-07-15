import { ReactNode } from "react";

import "./styles.scss";

interface Props {
  children: ReactNode;
}

export const SliderCarouselMobile: React.FC<Props> = ({ children }) => {
  return (
    <div className="slider-carousel-mobile">
      <div className="slider-carousel-mobile__scroll">{children}</div>
    </div>
  );
};
