import styles from "./Notice.module.css";

export const Notice = () => {
  return (
    <section className={styles.noticeContainer}>
      <div className={styles.noticeContent}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
};
