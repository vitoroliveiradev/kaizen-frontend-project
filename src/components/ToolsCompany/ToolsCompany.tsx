import styles from "./ToolsCompany.module.css";

import { Title } from "../Title/Title";
import { ToolCard } from "../ToolCard/ToolCard";
import { NavLink } from "react-router-dom";

export const ToolsCompany = () => {
  return (
    <section className={styles.toolsContainer}>
      <Title title="Ferramentas da Empresa" />
      <div className={styles.containerCards}>
        <ToolCard
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          exit={{ opacity: 0, x: -100 }}
        />
        <ToolCard
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          exit={{ opacity: 0, x: -100 }}
        />
        <ToolCard
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          exit={{ opacity: 0, x: -100 }}
        />
      </div>
      <div className={styles.showMoreContainer}>
        <NavLink to="/qualities" className={styles.showMore}>
          Ver mais
        </NavLink>
      </div>
    </section>
  );
};
