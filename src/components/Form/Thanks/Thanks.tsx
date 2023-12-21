import styles from "./Thanks.module.css";

type ThanksProps = {
  data: {
    name: string;
    email: string;
    comment: string;
  };
};

export const Thanks = ({ data }: ThanksProps) => {
  

  return (
    <div className={styles["thanks-container"]}>
      <h3>Aqui está o resumo de seu contato: {data.name}</h3>
      <p className={styles["review-data"]}>
        <span>Nome: </span> {data.name}
      </p>
      <p className={styles["review-data"]}>
        <span>Mensagem: </span> {data.comment}
      </p>
      <p className={styles["review-data"]}>
        <span>E-mail: </span> {data.email}
      </p>
    </div>
  );
};
