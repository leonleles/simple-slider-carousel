import { ReactNode } from "react";

import './styles.scss'

interface Props {
  children: ReactNode;
}

export const PageSection: React.FC<Props> = ({ children }) => {
  return <section className="page-section">{children}</section>;
};
