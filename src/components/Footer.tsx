import { useTranslation } from 'react-i18next';
import { profile } from '../data';
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
      </div>
    </footer>
  );
}
