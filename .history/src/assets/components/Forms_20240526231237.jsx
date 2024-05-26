const Forms = () => {
  return(
    <section className="forms">
      <div className="container forms__container">
        <form id="form__reservation" name="form" method="post" action="#">
          <h3 className="form__heading">Make Your <em>Reservation</em> Through This <em>Form</em></h3>
          <div className="form__flex">
            <div className="form__flex-grow">
            <fieldset className="form__column">
              <label htmlFor="name" className="form__label">Your Name</label>
              <input className="form__field" id="name" type="text" name="name" placeholder="Ex. John Smithee" autoComplete="on" required />
            </fieldset>
            </div>

            <div className="form__flex-grow">
              <fieldset className="form__column">
              <label htmlFor="number" className="form__label">Your Phone Number</label>
              <input className="form__field" id="number" type="text" name="number" placeholder="Ex. +99899 999 99 99" autoComplete="on" required></input>
              </fieldset>
            </div>
          </div>

          <div className="form__flex">
              <div className="form__flex-grow">
                <fieldset className="form__colum">
                  <label htmlFor="chooseGuests" className="form__label">Number Of Guests</label>
                  <select name="guests" className="form__field" aria-label="Default select example" id="chooseGuests">
                    <option selected>ex. 3 or 4 or 5</option>
                    <option type="checkbox" name="option1" value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </fieldset>
              </div>

              <div className="form__flex-grow">
                <fieldset className="form__column">
                <label htmlFor="date" className="form__label">Check In Date</label>
                <input type="date" className="form__field" id="date" name="date" required />
                </fieldset>
              </div>
            </div>

            <fieldset className="form__column">
              <label htmlFor="chooseDestination" className="form__label">Choose Your Destination</label>
              <select name="destination" className="form__field" aria-label="Default select example" id="chooseDestination">
              <option selected>Antalya</option>
                <option value="Istanbul">Istanbul</option>
                <option value="Dubai">Dubai</option>
                <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Kanada">Canada</option>
                <option value="England">England</option>
              </select>
            </fieldset>

            <fieldset className="form__column">
              <label htmlFor="visa" className="form__label">Choose Your Visa Support</label>
            </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Forms