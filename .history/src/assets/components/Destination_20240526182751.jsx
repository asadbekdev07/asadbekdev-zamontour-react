import afrasiab from "/img/afr.jpg";
import airplane from "/img/airplane.jpg";

const destinationData = [
  { img: afrasiab, heading: "Cheap Railway Tickets With Us", subheading: "Whole World", text: "Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. ." },
  { img: airplane, heading: "Cheap Railway Tickets With Us", subheading: "Global Destinations", text: "Embark on an airborne adventure and explore destinations worldwide. Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network.." },
]

const Destination = () => {
  return (
    <section className="destination">
      <div className="container">
        <div className="destination__top">
          <h2 className="destination__top-heading">Explore Destinations With Ease</h2>
          <p className="destination__top-text">Find the best deals on railway and airplane tickets in each city, carefully selected for you.</p>
        </div>

        <ul className="destination__list">
          <li className="destination__item">
            <img className="destination__img" src={afrasiab} alt="Train img" width={340} height={228}/>
            <div className="destination__inner">
              <h3 className="destination__inner-heading">Cheap Railway Tickets With Us</h3>
              <span className="destination__inner-span">Whole World</span>
              <div className="wrapper__desc">
                <div className="button__wrapper">
                <a className="button" href="#contact">Explore More</a>
                </div>
                <p className="destination__inner-description">Embark on a railway adventure and explore destinations worldwide. Whether it&apos;s the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .</p>
              </div>
            </div>
          </li>

          <li className="destination__item">
            <img className="destination__img" src={airplane} alt="Airplane img" width={340} height={228}/>
            <div className="destination__inner">
              <h3 className="destination__inner-heading">Discover Exciting Air Travel Deals</h3>
              <span className="destination__inner-span">Global Destinations</span>
              <div className="button__wrapper">
                <a className="button" href="#contact">Explore More</a>
              </div>
              <p className="destination__inner-description">Embark on an airborne adventure and explore destinations worldwide. Whether it&apos;s the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network..</p>
            </div>
          </li>
        </ul>

        {DestinationData.map((offer, index) => ()}
      </div>
    </section>
  )
}

export default Destination