// Existing import statements...
import { useLocalization } from '../../localization'; // Adjust the path as needed

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, changeLanguage, currentLanguage } = useLocalization();

  const handleToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className={`site-header ${isMenuOpen ? 'is-open' : ''}`}>
      {/* Header content */}
      <ul className="lang">
        <li className='lang__item'>
          <a className={`lang__link ${currentLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')}>EN</a>
        </li>
        <li className='lang__item'>
          <a className={`lang__link ${currentLanguage === 'uz' ? 'selected' : ''}`} onClick={() => changeLanguage('uz')}>UZ</a>
        </li>
        <li className='lang__item'>
          <a className={`lang__link ${currentLanguage === 'ru' ? 'selected' : ''}`} onClick={() => changeLanguage('ru')}>RU</a>
        </li>
      </ul>
      {/* Social icons */}
    </header>
  );
};

export default SiteHeader;
