import React, { useState } from 'react';
import { useLocalization } from '../../localization';
import { Trans } from 'react-i18next';

const Forms = () => {
  const { t } = useLocalization();
  const [statusMessage, setStatusMessage] = useState("");

  const telegramTokenBot = "6913787807:AAFBNLiHn-ysNkKEh-bCjIiWCwBDIiqdVLY";
  const chatId = "6726160029";

  const messages = {
    loading: "Loading...",
    success: "We're deeply grateful you've entrusted your travel plans to our agency.",
    failure: "Something went wrong"
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage(messages.loading);

    const formData = new FormData(event.target);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `
          Name: ${object.name},
          Phone: ${object.number},
          Guests: ${object.guests},
          Date: ${object.date},
          Destination: ${object.destination},
          Country: ${object.country},
          `
        }),
      });

      if (response.ok) {
        setStatusMessage(messages.success);
        event.target.reset();
      } else {
        setStatusMessage(messages.failure);
      }
    } catch (error) {
      setStatusMessage(messages.failure);
    } finally {
      setTimeout(() => {
        setStatusMessage("");
      }, 10000);
    }
  };

  return (
    <section className="forms">
      <div className="container">
        <div className="forms__container">
          <form id="form__reservation" name="form" method="post" action="#" onSubmit={handleSubmit}>
            <h3 className="form__heading">
              <Trans i18nKey="formheading" components={{ em: <em /> }} />
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
                <option value="Dubai">{t('city.1')}</option>
                <option value="Sharm El-Sheikh">{t('city.3')}</option>
                <option value="Kuala Lumpur">{t('city.9')}</option>
                <option value="Canada">{t('city.6')}</option>
                <option value="England">{t('city.5')}</option>
              </select>
            </fieldset>
            <fieldset className="form__column">
              <label htmlFor="visa" className="form__label">{t('choosevisa')}</label>
              <select name="country" className="form__field" aria-label="Choose your visa support" id="visa">
                <option value="" disabled selected>{t('country')}</option>
                <option value="USA">{t('city.4')}</option>
                <option value="Europe">{t('city.10')}</option>
                <option value="England">{t('city.5')}</option>
                <option value="Japan">{t('japan')}</option>
                <option value="Oman">{t('oman')}</option>
                <option value="Saudi Arabia">{t('saudia')}</option>
                <option value="India">{t('india')}</option>
                <option value="China">{t('china')}</option>
              </select>
            </fieldset>
            <fieldset className="form__column">
              <button type="submit" className="button button--form">{t('makeresnow')}</button>
            </fieldset>
          </form>
          {statusMessage && (
            <div style={{ color: '#22b3c1', textAlign: 'center', fontSize: '20px', marginTop: '10px' }}>
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Forms;
