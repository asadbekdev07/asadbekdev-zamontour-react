import React from 'react';
import { useLocalization } from '../../localization';

const ReservationItem = ({ icon, subheading, link, linkText }) => (
  <li className="reservation__item">
    <div className="reservation__icon-wrapper">
      <i className={`fa ${icon}`}></i>
    </div>
    <h4 className="reservation__subheading">{subheading}</h4>
    <a className="reservation__link" href={link}>{linkText}</a>
  </li>
);

const Reservation = () => {
  const { t } = useLocalization();

  const reservationItems = [
    {
      icon: 'fa-phone',
      subheading: t('makephonecall'),
      link: 'tel:+998992999996',
      linkText: '+998 99 299 99 96',
    },
    {
      icon: 'fa-envelope',
      subheading: t('contactviaemail'),
      link: 'mailto:zamonbiznestour@mail.ru',
      linkText: 'zamonbiznestour@mail.ru',
    },
    {
      icon: 'fa-map-marker',
      subheading: t('visitouroffices'),
      link: '#',
      linkText: t('address'),
    },
  ];

  return (
    <section className="reservation">
      <div className="container reservation__container">
        <div className="reservation__content">
          <h4 className="reservation__title" id="contact">{t('bookprefereddeal')}</h4>
          <h2 className="reservation__heading">{t('makeyourreservation')}</h2>
          <a className="button button--white" href="#contact">{t('exploremore')}</a>
        </div>
        <ul className="reservation__list">
          {reservationItems.map((item, index) => (
            <ReservationItem
              key={index}
              icon={item.icon}
              subheading={item.subheading}
              link={item.link}
              linkText={item.linkText}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reservation;
