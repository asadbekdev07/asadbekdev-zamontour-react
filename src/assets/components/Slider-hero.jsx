import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// IMAGES
import istanbulImg from '../../../public/img/istanbul.jpg'
import antalyaImg from '../../../public/img/antalya.jpg'
import dubaiImg from '../../../public/img/dubai2.jpg'
import sharmImg from '../../../public/img/sharm.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderHero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="slider" style={{backgroundImage: `url(${istanbulImg})`}}>
            <div className="container slider__container">
            <div className="slider__top">
              <h3 className="slider__top-heading">Take a Glimpse Into The Beautiful City Of:</h3>
              <h2 className="slider__top-city">Istanbul</h2>
              <a className="button button--cta" href="#contact">Go There</a>
            </div>

            <div className="slider__bottom">
              <ul className="slider__bottom-list list">
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-user"></i>
                    <h4 className="list__subheading">
                      <span>Population:</span><br/>15.5 M
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-globe"></i>
                    <h4 className="list__subheading">
                      <span>Territory:</span><br/>5.461 km&#178;
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-home"></i>
                    <h4 className="list__subheading">
                      <span>Avg Price:</span><br/>$946.000
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
        </SwiperSlide>
        <SwiperSlide>
        <section className="slider" style={{backgroundImage: `url(${antalyaImg})`}}>
            <div className="container slider__container">
            <div className="slider__top">
              <h3 className="slider__top-heading">Take a Glimpse Into The Beautiful City Of:</h3>
              <h2 className="slider__top-city">Antalya</h2>
              <a className="button button--cta" href="#contact">Go There</a>
            </div>

            <div className="slider__bottom">
              <ul className="slider__bottom-list list">
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-user"></i>
                    <h4 className="list__subheading">
                      <span>Population:</span><br/>1.5 M
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-globe"></i>
                    <h4 className="list__subheading">
                      <span>Territory:</span><br/>1.417 km&#178;
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-home"></i>
                    <h4 className="list__subheading">
                      <span>Avg Price:</span><br/>$1.100.200
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
        </SwiperSlide>
        <SwiperSlide>
        <section className="slider" style={{backgroundImage: `url(${dubaiImg})`}}>
            <div className="container slider__container">
            <div className="slider__top">
              <h3 className="slider__top-heading">Take a Glimpse Into The Beautiful City Of:</h3>
              <h2 className="slider__top-city">Dubai</h2>
              <a className="button button--cta" href="#contact">Go There</a>
            </div>

            <div className="slider__bottom">
              <ul className="slider__bottom-list list">
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-user"></i>
                    <h4 className="list__subheading">
                      <span>Population:</span><br/>3.3 M
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-globe"></i>
                    <h4 className="list__subheading">
                      <span>Territory:</span><br/>35 km&#178;
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-home"></i>
                    <h4 className="list__subheading">
                      <span>Avg Price:</span><br/>$425.000
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
        </SwiperSlide>
        <SwiperSlide>
        <section className="slider" style={{backgroundImage: `url(${sharmImg})`}}>
            <div className="container slider__container">
            <div className="slider__top">
              <h3 className="slider__top-heading">Take a Glimpse Into The Beautiful City Of:</h3>
              <h2 className="slider__top-city">Sharm El-Sheikh</h2>
              <a className="button button--cta" href="#contact">Go There</a>
            </div>

            <div className="slider__bottom">
              <ul className="slider__bottom-list list">
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-user"></i>
                    <h4 className="list__subheading">
                      <span>Population:</span><br/>0.07 M
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-globe"></i>
                    <h4 className="list__subheading">
                      <span>Territory:</span><br/>45 km&#178;
                    </h4>
                  </div>
                </li>
                <li className="list__item">

                  <div className="list__item-inner">
                    <i className="fa fa-home"></i>
                    <h4 className="list__subheading">
                      <span>Avg Price:</span><br/>$165.450
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
