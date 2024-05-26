import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import offersFirst from '/img/deals-04.jpg';
import offersSecond from '/img/offers-02.jpg';
import offersThird from '/img/deals-01.jpg';
import offersFourth from '/img/offers-01.jpg';
import usa from '/img/usa1.jpg';
import england from '/img/deals-02.jpg';
import canada from '/img/cand.jpg';
import europe from '/img/europe2.jpg';

const offersData = [
  { img: offersFirst, city: "Istanbul", checkIns: 234, price: 420 },
  { img: offersSecond, city: "Dubai", checkIns: 300, price: 700 },
  { img: offersThird, city: "Antalya", checkIns: 500, price: 999 },
  { img: offersFourth, city: "Sharm El-Sheikh", checkIns: 200, price: 800 },
  { img: usa, city: "USA", checkIns: 400, price: null },
  { img: england, city: "England", checkIns: 234, price: null },
  { img: canada, city: "Canada", checkIns: 345, price: null },
  { img: europe, city: "European Union", checkIns: 345, price: null }
];

const Offers = () => {
  return (
    <div className="offers">
      <div className="container">
        <div className="offers__content">
          <h2 className="offers__title">Best Weekly Offers In Each City</h2>
          <p className="offers__description">Discover the best weekly offers in each city, curated just for you. <br/> Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={15}
          slidesPerView={3}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          loop={true}
          breakpoints={{ // Add breakpoints for adjusting slidesPerView and spaceBetween
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
            <SwiperSlide key={index} className='offers__card'>
              <img className='offers__img' src={offer.img} alt={`${offer.city} img`} />
              <div className="offers__card-inner inner">
                <div className="inner__top">
                  <h4>{offer.city}<br/><span><i className="fa fa-users"></i> {offer.checkIns} Check Ins</span></h4>
                  {offer.price && <h6>${offer.price}<br/><span>/person</span></h6>}
                </div>
                <hr className='inner__divider' />
                <ul className='inner__list'>
                  <li className="inner__list-title">Deal Includes:</li>
                  <li><i className="fa fa-taxi"></i> 5 Days Trip, Hotel Included</li>
                  <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                  <li><i className="fa fa-building"></i> Daily Places Visit</li>
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

export default Offers;
