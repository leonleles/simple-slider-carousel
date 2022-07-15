import { ReactNode } from "react";

import "./styles.scss";

interface Props {
  children: ReactNode;
}

export const PageContainer: React.FC<Props> = ({ children }) => {
  return <div className="page-container">{children}</div>;
};
