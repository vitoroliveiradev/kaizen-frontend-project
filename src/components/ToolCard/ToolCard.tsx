import styles from "./ToolCard.module.css";
import image from "../../assets/tool-1.png";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

export const ToolCard = (props: ComponentProps<typeof motion.div>) => {
  return (
    <motion.div className={styles.containerCards} {...props}>
      <div className={styles.cardBottom}>
        <img src={image} alt="image" />
        <div className={styles.cardFront}>
          <h3>E-5´S</h3>
        </div>
      </div>
    </motion.div>
  );
};
