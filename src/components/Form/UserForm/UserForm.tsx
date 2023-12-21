import styles from "./UserForm.module.css";

type UserProps = {
  data: {
    name: string;
    email: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

export const UserForm = ({ data, updateFieldHandler }: UserProps) => {
  return (
    <div>
      <div className={styles["form-control"]}>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          required
        />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="email">E-mail: </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          value={data.email || ""}
          required
        />
      </div>
    </div>
  );
};
