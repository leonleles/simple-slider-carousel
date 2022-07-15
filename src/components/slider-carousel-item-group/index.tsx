import { ReactNode } from "react";

import './styles.scss'

interface Props {
  children: ReactNode;
}

export const SliderCarouselItemGroup: React.FC<Props> = ({ children }) => {
  return (
    <div className="image-carousel__item">
      <div className="home-category-list__group">{children}</div>
    </div>
  );
};
