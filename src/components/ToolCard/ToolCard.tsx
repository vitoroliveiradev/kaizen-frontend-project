import styles from "./ToolCard.module.css";

import { motion } from "framer-motion";

type ToolCardProps = {
  initial: {
    opacity: number;
    x: number;
  };
  whileInView: {
    opacity: number;
    x: number;
  };
  transition: {
    duration: number;
    delay: number;
  };
  exit: {
    opacity: number;
    x: number;
  };
  title: string;
  img: string;
};

export const ToolCard = ({
  initial,
  whileInView,
  transition,
  exit,
  title,
  img,
}: ToolCardProps) => {
  return (
    <motion.div
      initial={{ ...initial }}
      whileInView={{ ...whileInView }}
      transition={{ ...transition }}
      exit={{ ...exit }}
      className={styles.containerCards}
    >
      <div className={styles.cardBottom}>
        <img src={img} alt="image" />
        <div className={styles.cardFront}>
          <h3>{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};
