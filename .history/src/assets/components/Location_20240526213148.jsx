import React from 'react';
import dubai from "/img/dubai2.jpg";
import antalya from "/img/antalya.jpg";
import istanbul from "/img/istanbul.jpg";
import sharm from "/img/sharm.jpg";
import paris from "/img/paris.jpg";

const locations = [
  { name: 'Dubai', image: dubai, population: '3.3 million' },
  { name: 'Antalya', image: antalya, population: '1.5 million' },
  { name: 'Istanbul', image: istanbul, population: '15.5 million' },
  { name: 'Sharm El-Sheik', image: sharm, population: '0.07 million' },
  { name: 'Paris', image: paris, population: '2.2 million' }
];

const LocationCard = ({ location }) => (
  <div className="location__card" style={{ backgroundImage: `url(${location.image})` }}>
    <div className="location__card-shadow"></div>
    <div className="location__card-label">
      <div className="location__card-icon">
        <i className="fa fa-expand"></i>
      </div>
      <div className="location__card-info">
        <div className="location__card-title">{location.name}</div>
        <div className="location__card-text">Population: {location.population}</div>
      </div>
    </div>
  </div>
);

const Location = () => {
  return (
    <section className="location">
      <div className="container">
        <div className="location__content">
          <h2 className="location__heading">Best Locations</h2>
          <p className="location__description">Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
        </div>

        <div className="location__cards">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
