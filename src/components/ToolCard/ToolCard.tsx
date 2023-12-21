import styles from "./ToolCard.module.css";
import image from "../../assets/tool-1.png";

export const ToolCard = () => {
  return (
    <div className={styles.containerCards}>
      <div className={styles.cardBottom}>
        <img src={image} alt="image" />
        <div className={styles.cardFront}>
          <h3>E-5´S</h3>
        </div>
      </div>
    </div>
  );
};
