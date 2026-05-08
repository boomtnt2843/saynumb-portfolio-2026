import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#events', label: 'Events' },
  { href: '#fun', label: 'Fun' },
  { href: '#goals', label: 'Goals' },
];

export default function Navbar() {
  const { i18n } = useTranslation();
  const isEN = i18n.language === 'en';

  const toggle = () => i18n.changeLanguage(isEN ? 'th' : 'en');

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <img src="/saynum-icon.png" alt="" className={styles.logoImg} />
          <span className={styles.logoText}>saynumB</span>
        </a>
        <div className={styles.right}>
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>{link.label}</a>
              </li>
            ))}
          </ul>
          <button className={styles.langToggle} onClick={toggle} aria-label="Toggle language">
            <span className={isEN ? styles.active : styles.inactive}>EN</span>
            <span className={styles.sep}>/</span>
            <span className={!isEN ? styles.active : styles.inactive}>TH</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
