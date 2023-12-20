import styles from "./Container.module.css";

import { ReactNode } from "react";

type PropsContainer = {
  children: ReactNode;
};

export const Container = ({ children }: PropsContainer) => {
  return <div className={styles.container}>{children}</div>;
};
