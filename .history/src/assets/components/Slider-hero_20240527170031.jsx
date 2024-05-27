import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLocalization } from '../../localization';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import istanbulImg from '/img/istanbul.jpg';
import antalyaImg from '/img/antalya.jpg';
import dubaiImg from '/img/dubai2.jpg';
import sharmImg from '/img/sharm.jpg';

const slidesData = [
  {
    img: istanbulImg,
    city: 'Istanbul',
    population: '15.5 M',
    territory: '5.461 km²',
    avgPrice: '$946.000'
  },
  {
    img: antalyaImg,
    city: 'Antalya',
    population: '1.5 M',
    territory: '1.417 km²',
    avgPrice: '$1.100.200'
  },
  {
    img: dubaiImg,
    city: 'Dubai',
    population: '3.3 M',
    territory: '35 km²',
    avgPrice: '$425.000'
  },
  {
    img: sharmImg,
    city: 'Sharm El-Sheikh',
    population: '0.07 M',
    territory: '45 km²',
    avgPrice: '$165.450'
  }
];

const SlideContent = ({ img, city, population, territory, avgPrice, t }) => (
  <section className="slider" style={{ backgroundImage: `url(${img})` }}>
    <div className="container slider__container">
      <div className="slider__top">
        <h3 className="slider__top-heading">{t('takeglimpse')}</h3>
        <h2 className="slider__top-city">{city}</h2>
        <a className="button button--cta" href="#contact">{t('go')}</a>
      </div>
      <div className="slider__bottom">
        <ul className="slider__bottom-list list">
          <li className="list__item">
            <div className="list__item-inner">
              <i className="fa fa-user"></i>
              <h4 className="list__subheading">
                <span>Population:</span><br />{population}
              </h4>
            </div>
          </li>
          <li className="list__item">
            <div className="list__item-inner">
              <i className="fa fa-globe"></i>
              <h4 className="list__subheading">
                <span>Territory:</span><br />{territory}
              </h4>
            </div>
          </li>
          <li className="list__item">
            <div className="list__item-inner">
              <i className="fa fa-home"></i>
              <h4 className="list__subheading">
                <span>Avg Price:</span><br />{avgPrice}
              </h4>
            </div>
          </li>
          <div className="list__item-inner">
            <a className="button" href="#contact">Explore More</a>
          </div>
        </ul>
      </div>
    </div>
  </section>
);
const { t } = useLocalization();
export default function SliderHero() {
  return (
    <Swiper
      spaceBetween={5}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideContent {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
