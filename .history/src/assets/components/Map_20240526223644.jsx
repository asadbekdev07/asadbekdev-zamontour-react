import React from 'react';

const Map = () => {
  return (
    <section className="map">
      <div className="container map__container">
        <iframe
          className="map__iframe"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3252.2562871331756!2d69.19966845675911!3d41.28903224846708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schilonzor-9%20dom-25!5e1!3m2!1sen!2s!4v1705743542224!5m2!1sen!2s"
          width={1240}
          height={450}
          frameBorder="0"
          style={{ border: '0', borderTopLeftRadius: '23px', borderTopRightRadius: '23px' }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
