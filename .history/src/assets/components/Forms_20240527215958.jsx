import React from 'react';
import { useLocalization, Trans } from '../../localization';

const Forms = () => {

  const { t } = useLocalization();

  return (
    <section className="forms">
      <div className="container">
        <div className="forms__container">
          <form id="form__reservation" name="form" method="post" action="#">
            <h3 className="form__heading">
              {t('formheading')}
            </h3>
            <div className="form__flex">
              <div className="form__flex-grow">
                <fieldset className="form__column">
                  <label htmlFor="name" className="form__label">{t('name')}</label>
                  <input
                    className="form__field"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ex. John Smithee"
                    autoComplete="on"
                    required
                  />
                </fieldset>
              </div>
              <div className="form__flex-grow">
                <fieldset className="form__column">
                  <label htmlFor="number" className="form__label">{t('phonenumber')}</label>
                  <input
                    className="form__field"
                    id="number"
                    type="text"
                    name="number"
                    placeholder="Ex. +99899 999 99 99"
                    autoComplete="on"
                    required
                  />
                </fieldset>
              </div>
            </div>
            <div className="form__flex">
              <div className="form__flex-grow">
                <fieldset className="form__column">
                  <label htmlFor="chooseGuests" className="form__label">{t('guest')}</label>
                  <select name="guests" className="form__field" aria-label="Number of guests" id="chooseGuests">
                    <option value="" disabled selected>ex. 3 or 4 or 5</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </fieldset>
              </div>
              <div className="form__flex-grow">
                <fieldset className="form__column">
                  <label htmlFor="date" className="form__label">{t('checkindate')}</label>
                  <input
                    type="date"
                    className="form__field"
                    id="date"
                    name="date"
                    required
                  />
                </fieldset>
              </div>
            </div>
            <fieldset className="form__column">
              <label htmlFor="chooseDestination" className="form__label">{t('choosedestination')}</label>
              <select name="destination" className="form__field" aria-label="Choose your destination" id="chooseDestination">
                <option value="Antalya" selected>{t('city.2')}</option>
                <option value="Istanbul">{t('city.0')}</option>
                <option value="Dubai">Dubai</option>
                <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Canada">Canada</option>
                <option value="England">England</option>
              </select>
            </fieldset>
            <fieldset className="form__column">
              <label htmlFor="visa" className="form__label">{t('choosevisa')}</label>
              <select name="country" className="form__field" aria-label="Choose your visa support" id="visa">
                <option value="" disabled selected>Country</option>
                <option value="USA">USA</option>
                <option value="Europe">Europe</option>
                <option value="England">England</option>
                <option value="Japan">Japan</option>
                <option value="Oman">Oman</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="HongKong">Hong Kong</option>
              </select>
            </fieldset>
            <fieldset className="form__column">
              <button type="submit" className="button button--form">{t('makeresnow')}</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forms;
