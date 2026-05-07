import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

const NAV_KEYS = [
  { href: '#projects', key: 'nav.projects' },
  { href: '#events', key: 'nav.events' },
  { href: '#fun', key: 'nav.fun' },
  { href: '#goals', key: 'nav.goals' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
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
            {NAV_KEYS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>{t(link.key)}</a>
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
