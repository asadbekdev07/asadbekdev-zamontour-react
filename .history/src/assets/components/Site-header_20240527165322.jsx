import React, { useState } from 'react';
import zamonImg from '/img/zamon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useLocalization } from '../../localization';

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const { t, changeLanguage, currentLanguage } = useLocalization();

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
                <a className='sitenav__link' href="#tours">{t('tours')}</a>
              </li>
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="#contacts">{t('contacts')}</a>
              </li>
            </ul>
          </nav>

          <ul className="lang">
            {/* ITEM  */}
            <ul className="lang">
              <li className='lang__item'>
                <a className={`lang__link ${currentLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')}>EN</a>
              </li>
              <li className='lang__item'>
                <a className={`lang__link ${currentLanguage === 'uz' ? 'selected' : ''}`} onClick={() => changeLanguage('uz')}>UZ</a>
              </li>
              <li className='lang__item'>
                <a className={`lang__link ${currentLanguage === 'ru' ? 'selected' : ''}`} onClick={() => changeLanguage('ru')}>RU</a>
              </li>
            </ul>

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
