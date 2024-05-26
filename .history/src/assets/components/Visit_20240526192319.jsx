import dubai from "/img/dubai2.jpg";
import antalya from "/img/country-02.jpg";
import sharm from "/img/sharm2.jpg";
import istanbul from "/img/istanbul3.jpg";

const visitData = [
  { img: dubai, city: "Dubai", country: "United Arab Emirates", description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.", population: "3.3 million", territory: "35km²", avgPrice: "$425.000" },
  { img: antalya, city: "Antalya", country: "Turkiye", description: "Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate.", population: "1.5 million", territory: "1.417 km²", avgPrice: "$1.100.200" },
  { img: sharm, city: "Sharm El-Sheikh", country: "Egypt", description: "Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea.", population: "0.07 million", territory: "45km²", avgPrice:"$165.45" },
  { img: istanbul, city: "Istanbul", country: "Turkiye", description: "Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents.", population: "15.5 million", territory: "5.461 km²", avgPrice: "$946.000" }
];

const Visit = () => {
  return (
    <section className="visit">
      <div className="container">
      <div className="visit__content">
        <h2 className="visit__heading">Visit One Of Our Countries Now</h2>
        <p className="visit__description">Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
      </div>

      <ul className="visit__list">
        {visitData.map((visit, index) => (
          <li key={index} className="visit__item">
          <img className="visit__img" src={visitData.img} alt="Img" width={340} height={228} />
          <div className="visit__inner">
            <h3 className="visit__inner-heading">{visitData.city}</h3>
            <span className="visit__inner-span">United Arab Emirates</span>
            <div className="button__wrapper button__wrapper--visit">
              <a className="button" href="#contact">Explore More</a>
            </div>
            <p className="visit__inner-description">Embark on a railway adventure and visit destinations worldwide. Whether it&apos;s the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .</p>

            <ul className="info">
              <li><i className="fa fa-user"></i> 3.3 million people</li>
              <li><i className="fa fa-globe"></i> 45 km&#178;</li>
              <li><i className="fa fa-home"></i> $1.100.200</li>
            </ul>

            <div>
              <a className="button--arrow" href="#contact">Need Directions ? <i className="fa fa-arrow-right"></i></a>
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