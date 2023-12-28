import styles from "./About.module.css";

import { Title } from "../Title/Title";

import AboutImage from "../../assets/about-image.jpg";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section>
      <Title title="Sobre a empresa" />
      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
        >
          {AboutImage ? (
            <img src={AboutImage} alt="imagem sobre a empresa" />
          ) : (
            <p>Carregando...</p>
          )}
        </motion.div>

        <div className={styles.right}>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 100 }}
          >
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
          </motion.p>
        </div>
      </div>
    </section>
  );
};
