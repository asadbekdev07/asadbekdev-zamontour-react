import afrasiab from "/img/afr.jpg";
import airplane from "/img/airplane.jpg";
import { useLocalization } from "../../localization";


const Destination = () => {

  const { t } = useLocalization();

  const destinationData = [
    { img: afrasiab, heading: t('exploreheading1'), subheading: t('exploresubheading1'), text: t('exploredesc1') },
    { img: airplane, heading: t('exploreheading2'), subheading: t('exploresubheading2'), text: t('exploredesc2') },
  ]

  return (
    <section className="destination">
      <div className="container">
        <div className="destination__top">
          <h2 className="destination__top-heading">{t('explore')}</h2>
          <p className="destination__top-text">{t('exploredesc')}</p>
        </div>

        <ul className="destination__list">
          {destinationData.map((destination, index) =>(
            <li key={index} className="destination__item">
            <img className="destination__img" src={destination.img} alt="Airplane img" width={340} height={228}/>
            <div className="destination__inner">
              <h3 className="destination__inner-heading">{destination.heading}</h3>
              <span className="destination__inner-span">{destination.subheading}</span>
              <div className="button__wrapper">
                <a className="button destination__button" href="#contact">Explore More</a>
              </div>
              <p className="destination__inner-description">{destination.text}</p>
              <a className="button destination__responsive-button" href="#contact">{t('exploremore')}</a>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Destination