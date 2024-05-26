import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// IMPORT IMGS
import offersFirst from '/img/deals-04.jpg';
import offersSecond from '/img/offers-02.jpg';
import offersThird from '/img/offers-01.jpg';

const Offers = () => {
  return (
    <div className="offers">
      <div className="container">
        <div className="offers__content">
          <h2 className="offers__title">Best Weekly Offers In Each City</h2>
          <p className="offers__description">Discover the best weekly offers in each city, curated just for you. <br/> Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={60}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='offers__card'>
            <img className='offers__img' src={offersFirst} alt="Istanbul img" />
            <div className="offers__card-inner inner">
              <div className="inner__top">
                <h4>Istanbul<br/><span><i className="fa fa-users ins"></i> 234 Check Ins</span></h4>
                <h6>$420<br/><span>/person</span></h6>
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
          <SwiperSlide className='offers__card'>
            <img className='offers__img' src={offersSecond} alt="Dubai img" />
            <div className="offers__card-inner inner">
              <div className="inner__top">
                <h4>Dubai<br/><span><i className="fa fa-users ins"></i> 300 Check Ins</span></h4>
                <h6>$700<br/><span>/person</span></h6>
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
          <SwiperSlide className='offers__card'>
          <img className='offers__img' src={offersThird} alt="Antalya img" />
            <div className="offers__card-inner inner">
              <div className="inner__top">
                <h4>Antalya<br/><span><i className="fa fa-users ins"></i> 500 Check Ins</span></h4>
                <h6>$999<br/><span>/person</span></h6>
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
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt id excepturi magnam. Facere voluptatum pariatur temporibus molestias corrupti nesciunt ab, commodi accusantium. Id molestias architecto corrupti earum nemo! Explicabo.</SwiperSlide>
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
