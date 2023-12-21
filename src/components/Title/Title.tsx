import styles from "./Title.module.css";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <div className={styles.titleContainer}>
      <h2>{title}</h2>
    </div>
  );
};
