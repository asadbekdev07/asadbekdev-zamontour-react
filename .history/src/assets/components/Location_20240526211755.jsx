import dubai from "img/dubai2.jpg";
import antalya from "img/antalya.jpg";
import istanbul from "img/istanbul.jpg";
import sharm from "img/sharm.jpg";

const Location = () => {
  return(
    <section className="location">
      <div className="container">
        <div className="location__content">
          <h2 className="location__heading">Best Locations</h2>
          <p className="location__description">Discover the best  offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
        </div>

        <div className="location__cards">
          <div className="location__card" style={{backgroundImage: dubai}}>
            <div className="location__card-shadow"></div>
            <div className="location__card-label">
              <div className="location__card-icon">
                <i className="fa fa-expand"></i>
              </div>
              <div className="location__card-info">
                  <div className="location__card-title">Dubai</div>
                  <div className="location__card-text">Population: 3.3 million</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location