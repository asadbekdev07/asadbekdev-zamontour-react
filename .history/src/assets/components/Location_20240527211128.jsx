import React, { useState, useEffect } from 'react';
import dubai from "/img/dubai2.jpg";
import antalya from "/img/antalya.jpg";
import istanbul from "/img/istanbul.jpg";
import sharm from "/img/sharm.jpg";
import paris from "/img/paris.jpg";
import { useLocalization } from '../../localization';

const LocationCard = ({ location, isActive, onClick }) => (
  <div
    className={`location__card ${isActive ? 'active' : ''}`}
    style={{ backgroundImage: `url(${location.image})` }}
    onClick={onClick}
  >
    <div className="location__card-shadow"></div>
    <div className="location__card-label">
      <div className="location__card-icon">
        <i className="fa fa-expand"></i>
      </div>
      <div className="location__card-info">
        <div className="location__card-title">{location.name}</div>
        <div className="location__card-text">{location.population}</div>
      </div>
    </div>
  </div>
);

const Location = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const { t } = useLocalization();

  const locations = [
    { name: t('city.1'), image: dubai, population: t('population.3.3m') },
    { name: t('city.2'), image: antalya, population: t('population.1.5m') },
    { name: t('city.1'), image: istanbul, population: t('population.15.5m') },
    { name: t('city.3'), image: sharm, population: t('population.0.07m') },
    { name: t('city.8'), image: paris, population: t('population.2.2m') }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleLocations = isMobile ? locations.slice(0, 3) : locations;

  return (
    <section className="location">
      <div className="container">
        <div className="location__content">
          <h2 className="location__heading">{t('bestlocation')}</h2>
          <p className="location__description">{t('bestlocationdesc')}</p>
        </div>

        <div className="location__cards">
          {visibleLocations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
