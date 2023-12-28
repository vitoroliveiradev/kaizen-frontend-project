import styles from "./ToolsCompany.module.css";

import { Title } from "../Title/Title";
import { ToolCard } from "../ToolCard/ToolCard";
import { NavLink } from "react-router-dom";

import Image1 from "../../assets/tool-1.png";
import Image2 from "../../assets/tool-2.png";
import Image3 from "../../assets/tool-3.png";

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
          title="E-5S"
          img={Image1}
        />
        <ToolCard
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          exit={{ opacity: 0, x: -100 }}
          title="E-Auditorias"
          img={Image2}
        />
        <ToolCard
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          exit={{ opacity: 0, x: -100 }}
          title="E-RNC"
          img={Image3}
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
