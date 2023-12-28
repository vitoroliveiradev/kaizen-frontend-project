import styles from "./NotFound.module.css";

import NotFoundImage from "../../assets/notfound.png";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={NotFoundImage} alt="Imagem de página não encontrada" />
      <h2>Página não encontrada!</h2>
      <NavLink to="/" className={styles.backBtn}>Voltar</NavLink>
    </div>
  );
};
