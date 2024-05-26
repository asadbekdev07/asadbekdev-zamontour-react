import afrasiab from "img/afr.jpg";
import airplane from "img/airplane.jpg";
const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <div className="explore__top">
          <h2 className="explore__top-heading">Explore Destinations With Ease</h2>
          <p className="explore__top-text">Find the best deals on railway and airplane tickets in each city, carefully selected for you.</p>
        </div>

        <ul className="explore__list">
          <li className="explore__item">
            <img className="explore__img" src={afrasiab} alt="Airplane img"/>
            <div className="explore__inner">
              <h3 className="explore__inner-heading">Cheap Railway Tickets With Us</h3>
              <span className="explore__inner-span">Whole World</span>
              <div className="wrapper__desc">
                <div className="button__wrapper">
                <a className="button" href="#contact">Explore More</a>
                </div>
                <p className="explore__inner-description">Embark on a railway adventure and explore destinations worldwide. Whether it&apos;s the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .</p>
              </div>
            </div>
          </li>

          <li className="explore__item">
            <img className="explore__img" src={airplane} alt="Airplane img" />
            <div className="explore__inner">
              <h3 className="explore__inner-heading">Discover Exciting Air Travel Deals</h3>
              <span className="explore__inner-span">Global Destinations</span>
              <div className="button__wrapper">
                <a className="button" href="#contact">Explore More</a>
              </div>
              <p className="explore__inner-description">Embark on an airborne adventure and explore destinations worldwide. Whether it&apos;s the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network..</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Explore