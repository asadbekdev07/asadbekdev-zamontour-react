import React, { useState } from 'react';
import zamonImg from '/img/zamon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const {t, i18n} = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage)
  }

  return (
    <header className={`site-header ${isMenuOpen ? 'is-open' : ''}`}>
      <div className="container site-header__container">
        <a className="site-header__logo-link" href="#">
          <img className='site-header__logo logo' src={zamonImg} alt="Site logo" width={159} height={41} />
        </a>

        <div className="site-header__sitenav">
          <nav className="sitenav">
            <ul className="sitenav__list">
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="#">{t('home')}</a>
              </li>
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="#about">{t('about')}</a>
              </li>
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="#tours">Tours</a>
              </li>
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>

          <ul className="lang">
            {/* ITEM  */}
            <li className="lang__item">
              <a className="lang__link" onClick={handleChange}>EN</a>
            </li>
            {/* ITEM  */}
            <li className="lang__item">
              <a className="lang__link" onClick={handleChange}>UZ</a>
            </li>
            {/* ITEM  */}
            <li className="lang__item">
              <a className="lang__link" onClick={handleChange}>RU</a>
            </li>
          </ul>

          <ul className="social">
            {/* ITEM  */}
            <li className="social__item">
              <a className='social__link' href="https://www.instagram.com/zamontour/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram social__icon"></i>
              </a>
            </li>
            {/* ITEM  */}
            <li className="social__item">
              <a className='social__link' href="https://t.me/zamonbiznestour" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram social__icon"></i>
              </a>
            </li>
          </ul>
        </div>
        <button className='site-header__toggler' onClick={handleToggle}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
