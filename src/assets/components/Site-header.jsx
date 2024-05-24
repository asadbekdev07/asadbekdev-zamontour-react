// import zamonImg from '/img/zamon.svg'

// const SiteHeader = () => {
//   return (
//     <header className="site-header">
//       <div className="container site-header__container">
//         <a className="site-header__logo-link" href="#">
//           <img className='site-header__logo logo' src={zamonImg} alt="Site logo" width={159} height={41} />
//         </a>

//         <div className="site-header__sitenav">
//           <nav className="sitenav">
//             <ul className="sitenav__list">
//               {/* ITEM  */}
//               <li className="sitenav__item">
//                 <a className='sitenav__link' href="#">Home</a>
//               </li>
//               {/* ITEM  */}
//               <li className="sitenav__item">
//                 <a className='sitenav__link' href="#about">About</a>
//               </li>
//               {/* ITEM  */}
//               <li className="sitenav__item">
//                 <a className='sitenav__link' href="tours">Tours</a>
//               </li>
//               {/* ITEM  */}
//               <li className="sitenav__item">
//                 <a className='sitenav__link' href="contacts">Contacts</a>
//               </li>
//             </ul>
//           </nav>

//           <ul className="lang">
//             {/* ITEM  */}
//             <li className="lang__item">
//               <a className='lang__link' href="#">En</a>
//             </li>
//             {/* ITEM  */}
//             <li className="lang__item">
//               <a className='lang__link' href="#">Uz</a>
//             </li>
//             {/* ITEM  */}
//             <li className="lang__item">
//               <a className='lang__link' href="#">Ru</a>
//             </li>
//           </ul>

//           <ul className="social">
//             {/* ITEM  */}
//             <li className="social__item">
//               <a className='social__link' href="#">
//               <i className="fa-brands fa-instagram social__icon"></i>
//               </a>
//               </li>
//             {/* ITEM  */}
//             <li className="social__item">
//               <a className='social__link' href="#">
//               <i className="fa-brands fa-telegram social__icon"></i>
//               </a>
//               </li>
//           </ul>
//         </div>
//         <button className='site-header__toggler'><i className="fa-solid fa-bars fa-2xl"></i></button>
//       </div>
//     </header>
//   )
// }

// export default SiteHeader

import React, { useState } from 'react';
import zamonImg from '/img/zamon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

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
                <a className='sitenav__link' href="#">Home</a>
              </li>
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="#about">About</a>
              </li>
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="tours">Tours</a>
              </li>
              {/* ITEM  */}
              <li className="sitenav__item">
                <a className='sitenav__link' href="contacts">Contacts</a>
              </li>
            </ul>
          </nav>

          <ul className="lang">
            {/* ITEM  */}
            <li className="lang__item">
              <a className='lang__link' href="#">En</a>
            </li>
            {/* ITEM  */}
            <li className="lang__item">
              <a className='lang__link' href="#">Uz</a>
            </li>
            {/* ITEM  */}
            <li className="lang__item">
              <a className='lang__link' href="#">Ru</a>
            </li>
          </ul>

          <ul className="social">
            {/* ITEM  */}
            <li className="social__item">
              <a className='social__link' href="https://www.instagram.com/zamontour/" target="_blank">
                <i className="fa-brands fa-instagram social__icon"></i>
              </a>
            </li>
            {/* ITEM  */}
            <li className="social__item">
              <a className='social__link' href="https://t.me/zamonbiznestour" target="_blank">
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
