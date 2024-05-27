import dubai from "/img/dubai2.jpg";
import antalya from "/img/country-02.jpg";
import sharm from "/img/sharm2.jpg";
import istanbul from "/img/istanbul3.jpg";
import { useLocalization } from "../../localization";


const Visit = () => {

  const { t } = useLocalization();

  const visitData = [
    { img: dubai, city: t('city.1'), country: t('uae'), description: t('dubaidesc'), population: " 3.3", territory: " 35", avgPrice: " $425.000" },
    { img: antalya, city: t('city.2'), country: t('turkey'), description: t('antalyadesc'), population: " 1.5", territory: " 1.417", avgPrice: " $1.100.200" },
    { img: sharm, city: t('city.3'), country: t('egypt'), description: t('sharmdesc'), population: " 0.07", territory: " 45", avgPrice:" $165.45" },
    { img: istanbul, city: t('city.0'), country: t('turkey'), description: t('istanbuldesc'), population: " 15.5", territory: " 5.461", avgPrice: " $946.000"}
  ];

  return (
    <section className="visit">
      <div className="container">
      <div className="visit__content">
        <h2 className="visit__heading">{t('visitheading')}</h2>
        <p className="visit__description">{t('visitdesc')}</p>
      </div>

      <ul className="visit__list">
        {visitData.map((visit, index) => (
          <li key={index} className="visit__item">
          <img className="visit__img" src={visit.img} alt="Img" width={340} height={228} />
          <div className="visit__inner">
            <h3 className="visit__inner-heading">{visit.city}</h3>
            <span className="visit__inner-span">{visit.country}</span>
            <div className="button__wrapper button__wrapper--visit">
              <a className="button" href="#contact">{t('exploremore')}</a>
            </div>
            <p className="visit__inner-description">{visit.description}</p>

            <ul className="visit__info">
              <li><i className="fa fa-user"></i>{visit.population} {t('million')}</li>
              <li><i className="fa fa-globe"></i>{visit.territory}{t('km')}</li>
              <li><i className="fa fa-home"></i>{visit.avgPrice}</li>
            </ul>

            <div>
              <a className="button--arrow" href="#contact">{t('direction')} <i className="fa fa-arrow-right"></i></a>
            </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}

export default Visit