import { useTranslation } from 'react-i18next';
import { profile, contacts } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>{profile.handle}</span>
        <span className={styles.copy}>
          {profile.name} — {t('footer.role')} @ {profile.company}
        </span>
        <div className={styles.footerContacts}>
          {contacts.map((c) => (
            <a
              key={c.icon}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={styles.footerLink}
              aria-label={c.label}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
