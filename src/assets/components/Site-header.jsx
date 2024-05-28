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

  const closeMenu = () => {
    setIsMenuOpen(false);
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
              <li className="sitenav__item">
                <a className='sitenav__link' href="#" onClick={closeMenu}>{t('home')}</a>
              </li>
              <li className="sitenav__item">
                <a className='sitenav__link' href="#about" onClick={closeMenu}>{t('about')}</a>
              </li>
              <li className="sitenav__item">
                <a className='sitenav__link' href="#tours" onClick={closeMenu}>{t('tours')}</a>
              </li>
              <li className="sitenav__item">
                <a className='sitenav__link' href="#contacts" onClick={closeMenu}>{t('contacts')}</a>
              </li>
            </ul>
          </nav>

          <ul className="lang">
            <li className='lang__item'>
              <a className={`lang__link ${currentLanguage === 'en' ? 'selected' : ''}`} onClick={() => { changeLanguage('en'); closeMenu(); }}>EN</a>
            </li>
            <li className='lang__item'>
              <a className={`lang__link ${currentLanguage === 'uz' ? 'selected' : ''}`} onClick={() => { changeLanguage('uz'); closeMenu(); }}>UZ</a>
            </li>
            <li className='lang__item'>
              <a className={`lang__link ${currentLanguage === 'ru' ? 'selected' : ''}`} onClick={() => { changeLanguage('ru'); closeMenu(); }}>RU</a>
            </li>
          </ul>

          <ul className="social">
            <li className="social__item">
              <a className='social__link' href="https://www.instagram.com/zamontour/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <i className="fa-brands fa-instagram social__icon"></i>
              </a>
            </li>
            <li className="social__item">
              <a className='social__link' href="https://t.me/zamonbiznestour" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
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
