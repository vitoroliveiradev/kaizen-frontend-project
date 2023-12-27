import styles from "./SliderComponent.module.css";

import Slider from "react-slick";

import ImageBackground from "../../assets/background.png";

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
          <div className={styles.left}>
            <h3>Lessons and insights from 8 years</h3>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div className={styles.right}>
            <img
              src={ImageBackground}
              alt="Imagem de marketing para chamada de ação"
            />
          </div>
        </div>
        <div className={styles.slideContainer}>
          <div className={styles.left}>
            <h3>Lessons and insights from 8 years</h3>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div className={styles.right}>
            <img
              src={ImageBackground}
              alt="Imagem de marketing para chamada de ação"
            />
          </div>
        </div>
        <div className={styles.slideContainer}>
          <div className={styles.left}>
            <h3>Lessons and insights from 8 years</h3>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div className={styles.right}>
            <img
              src={ImageBackground}
              alt="Imagem de marketing para chamada de ação"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
