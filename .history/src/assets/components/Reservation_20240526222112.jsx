const Reservation = () => {
  return (
    <section className="reservation">
      <div className="container reservation__container">
        <div className="reservation__content">
        <h4 className="reservation__title" id="contact">Book Prefered Deal Here</h4>
        <h2 className="reservation__heading">Make your reservation</h2>
        <a className="button button--white" href="#contact">Discover More</a>
        </div>

        <ul className="reservation__list">
          <li className="reservation__item">
            <div className="reservation__icon-wrapper">
              <i className="fa fa-phone"></i>
            </div>
            <h4 className="reservation__subheading">Make a Phone Call</h4>
            <a className="reservation__link" href="tel:+998992999996">+998 99 299 99 96</a>
          </li>
          <li className="reservation__item">
            <div className="reservation__icon-wrapper">
              <i className="fa fa-envelope"></i>
            </div>
            <h4 className="reservation__subheading">Contact Us via Email</h4>
            <a className="reservation__link" href="mailto:zamonbiznestour@mail.ru">zamonbiznestour@mail.ru</a>
          </li>
          <li className="reservation__item">
            <div className="reservation__icon-wrapper">
              <i className="fa fa-map-marker"></i>
            </div>
            <h4 className="reservation__subheading">Contact Us via Email</h4>
            <a className="reservation__link" href="mailto:zamonbiznestour@mail.ru">zamonbiznestour@mail.ru</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Reservation