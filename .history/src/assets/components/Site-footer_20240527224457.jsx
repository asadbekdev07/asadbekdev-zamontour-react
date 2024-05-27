import { useLocalization } from "../../localization";

const SiteFooter = () => {

  const { t } = useLocalization();

  return(
    <footer className="site-footer">
      <div className="container">
        <p className="site-footer__text">Copyright © 2024 <a className="site-footer__link" href="https://t.me/zamonbiznestour">Zamon Business Tour.</a>   All rights reserved.</p>
      </div>
    </footer>
  )
}
export default SiteFooter