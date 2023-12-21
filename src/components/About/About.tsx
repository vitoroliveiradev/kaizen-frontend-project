import styles from "./About.module.css";

import { Title } from "../Title/Title";

import AboutImage from "../../assets/about-image.jpg";

export const About = () => {
  return (
    <section>
      <Title title="Sobre a empresa" />
      <div className={styles.aboutContainer}>
        <div className={styles.left}>
          <img src={AboutImage} alt="imagem sobre a empresa" />
        </div>

        <div className={styles.right}>
          <p>
            <span>"</span>
            Somos uma empresa composta por engenheiros industriais e arquitetos
            de sistemas com ampla experiência no "chão de fábrica", na gestão e
            implantação de projetos de melhoria contínua. Com objetivo de
            sustentar os projetos desenvolvemos ferramentas eletrônicas de
            gestão, consideradas como um dos pilares da indústria 4.0,
            ferramentas com capacidade de gerenciar todas as informações e o
            conhecimento gerado a partir dos processos. Nossas ferramentas são
            de baixo custo para nossos clientes, viabilizando a utilização para
            qualquer tamanho de empresa.
            <span>"</span>
          </p>
        </div>
      </div>
    </section>
  );
};
