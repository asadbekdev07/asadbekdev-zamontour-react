import dubai from "/img/dubai2.jpg";
import antalya from "/img/country-02.jpg";
import sharm from "/img/sharm2.jpg";
import istanbul from "/img/istanbul3.jpg";

const visitData = [
  { img: dubai, city: "Dubai", checkIns: 234, price: 420 },
  { img: antalya, city: "Antalya", checkIns: 300, price: 700 },
  { img: sharm, city: "Sharm El-Sheikh", checkIns: 500, price: 999 },
  { img: istanbul, city: "Istanbul", checkIns: 200, price: 800 }
];

const Visit = () => {
  return (
    <section className="visit">
      <div className="container">
      <div className="visit__content">
        <h2 className="visit__heading">Visit One Of Our Countries Now</h2>
        <p className="visit__description">Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
      </div>
      </div>
    </section>
  )
}

export default Visit