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

            <div className="form__flex-grow"></div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Forms