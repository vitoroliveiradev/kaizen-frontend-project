import styles from "./SliderComponent.module.css";

import Slider from "react-slick";

import ImageBackground from "../../assets/image.svg";

export const SliderComponent = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
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
