import { useLocalization } from "../../localization";

const Cta = () => {

  const { t } = useLocalization();

  return(
    <section className="cta">
      <div className="container cta__container">
        <div className="cta__content">
          <h2 className="cta__heading">{t('areyoulookingtravel')}</h2>
          <h4 className="cta__subheading">{t('makeclickbutton')}</h4>
        </div>
          <a className="button button--cta" href="#contact">{t('bookyours')}</a>
      </div>
    </section>
  )
}
export default Cta