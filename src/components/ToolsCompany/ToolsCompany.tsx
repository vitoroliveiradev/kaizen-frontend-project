import styles from "./ToolsCompany.module.css";

import { Title } from "../Title/Title";
import { ToolCard } from "../ToolCard/ToolCard";

export const ToolsCompany = () => {
  return (
    <section className={styles.toolsContainer}>
      <Title title="Ferramentas da Empresa" />
      <div className={styles.containerCards}>
        <ToolCard />
        <ToolCard />
        <ToolCard />
      </div>
    </section>
  );
};
