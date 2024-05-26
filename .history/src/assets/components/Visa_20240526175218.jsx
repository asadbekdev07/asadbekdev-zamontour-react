import React from 'react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import china from '/img/china.jpg';
import hongkong from '/img/hongkong.jpg';
import europe from '/img/europe.jpeg';
import india from '/img/india.jpg';
import japan from '/img/japan.jpg';
import saudi from '/img/saudi.jpg';
import oman from '/img/oman.jpg';

const offersData = [
  { img: china, city: "China", checkIns: 274 },
  { img: hongkong, city: "Hong Kong", checkIns: 350 },
  { img: europe, city: "European (Schengen)", checkIns: 453 },
  { img: india, city: "India", checkIns: 220 },
  { img: japan, city: "Japan", checkIns: 442 },
  { img: saudi, city: "Saudi Arabia", checkIns: 424 },
  { img: oman, city: "Oman", checkIns: 389 }
];

const Visa = () => {
  return (
    <div className="visa">
      <div className="container">
        <div className="visa__content">
          <h2 className="visa__title">Visa Support</h2>
          <p className="visa__description">
          Experience stress-free travel with our expert visa support. <br/> We provide seamless assistance and comprehensive guidance, ensuring a smooth journey.
          </p>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={15}
          slidesPerView={3}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          loop={true}
          breakpoints={{
            1000: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 15
            }
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {offersData.map((offer, index) => (
            <SwiperSlide key={index} className='visa__card'>
              <img className='visa__img' src={offer.img} alt={`${offer.city} img`} />
              <div className="visa__card-inner inner">
                <div className="inner__top">
                  <h4>{offer.city}<br /><span><i className="fa fa-users"></i> {offer.checkIns} Check Ins</span></h4>
                </div>
                <hr className='inner__divider' />
                <ul className='inner__list'>
                  <li className="inner__list-title">Benefits of our Visa Support service:</li>
                  <li><i className="fa fa-tags"></i> Best Prices</li>
                  <li><i className="fa fa-clock"></i> Short Processing Time</li>
                  <li><i className="fa fa-check"></i> Trustworthy Assistance</li>
                </ul>
                <a className="button button--wrapper" href="#contact">Make a Reservation</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-buttons">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
