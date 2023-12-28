import styles from "./QualitiesCard.module.css";

type QualitiesCardsProps = {
  title: string;
  content: string;
};

import { motion } from "framer-motion";

export const QualitiesCard = ({ title, content }: QualitiesCardsProps) => {
  return (
    <div className={styles.cardContainer}>
      <motion.h2
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -200 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: 200 }}
      >
        {content}
      </motion.p>
    </div>
  );
};
