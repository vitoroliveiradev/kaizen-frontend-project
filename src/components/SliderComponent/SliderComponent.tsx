import styles from "./SliderComponent.module.css";

import Slider from "react-slick";

import Image1 from "../../assets/img-slide-1.jpg";
import Image2 from "../../assets/img-slide-2.png";
import Image3 from "../../assets/img-slide-3.png";

import { motion } from "framer-motion";

export const SliderComponent = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.slideContainer}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: -100 }}
            className={styles.left}
          >
            <h3>Chão de Fábrica</h3>
            <p>
              Somos uma empresa composta por engenheiros industriais e
              arquitetos de sistemas com ampla experiência no "chão de fábrica"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -200, scale: 0.8 }}
            className={styles.right}
          >
            <img src={Image1} alt="Imagem de marketing para chamada de ação" />
          </motion.div>
        </div>
        <div className={styles.slideContainer}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: -100 }}
            className={styles.left}
          >
            <h3>Indústria 4.0</h3>
            <p>
              Com objetivo de sustentar os projetos desenvolvemos ferramentas
              eletrônicas de gestão, consideradas como um dos pilares da
              indústria 4.0.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -200, scale: 0.8 }}
            className={styles.right}
          >
            <img src={Image2} alt="Imagem de marketing para chamada de ação" />
          </motion.div>
        </div>
        <div className={styles.slideContainer}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: -100 }}
            className={styles.left}
          >
            <h3>Nossas Soluções</h3>
            <p>
              Nossas soluções são de baixo custo para nossos clientes,
              viabilizando a utilização para qualquer tamanho de empresa.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -200, scale: 0.8 }}
            className={styles.right}
          >
            <img src={Image3} alt="Imagem de marketing para chamada de ação" />
          </motion.div>
        </div>
      </Slider>
    </div>
  );
};
