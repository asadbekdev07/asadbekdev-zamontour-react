import dubai from "/img/dubai2.jpg";
import antalya from "/img/country-02.jpg";
import sharm from "/img/sharm2.jpg";
import istanbul from "/img/istanbul3.jpg";

const visitData = [
  { img: dubai, city: "Dubai", country: "United Arab Emirates", description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks." },
  { img: antalya, city: "Antalya", country: "Turkiye", description: 700 },
  { img: sharm, city: "Sharm El-Sheikh", country: "Egypt", description: 999 },
  { img: istanbul, city: "Istanbul", country: "Turkiye", description: 800 }
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