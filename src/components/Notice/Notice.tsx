import styles from "./Notice.module.css";

import NoticeImage from "../../assets/5s-image.jpg";

import { motion } from "framer-motion";

export const Notice = () => {
  return (
    <section className={styles.noticeContainer}>
      <div className={styles.noticeContent}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <h3>Já ouviu falar sobre o 5´S ?</h3>
          <p>
            O 5'S é uma filosofia japonesa que tem o objetivo de promover a
            mudança cultural, melhorando todo ambiente de trabalho. A e-Kaizen
            oferece ferramentas que ajudam organizações a gerenciar de forma
            prática e visual todos os passos e avanços do 5'S. Ele consiste em 5
            passos consecutivos que permitem que qualquer time organize seus
            espaços de trabalho para a eficiência máxima de processo. O 5S é uma
            ótima maneira de minimizar os 7 desperdícios do Lean (também
            conhecidos como Muda). Ele reconhece que toda ferramenta precisa ter
            um local específico que permite que o time a encontre rapidamente,
            use-a e a retorne ao mesmo local. Além disso, ele evita que o espaço
            de trabalho se torne bagunçado com equipamentos desnecessários.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: 100 }}
          className={styles.right}
        >
          <img src={NoticeImage} alt="Imagem sobre a notícia" />
        </motion.div>
      </div>
    </section>
  );
};
