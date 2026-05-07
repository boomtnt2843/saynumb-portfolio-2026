import { useTranslation } from 'react-i18next';
import { profile } from '../data';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.label}>{t('hero.label')}</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.intro}>{t('hero.intro')}</p>
          <div className={styles.current}>
            <span className={styles.chip}>{t('hero.chip')}</span>
          </div>
        </div>
        <div className={styles.avatarWrap}>
          <img
            src={profile.avatar}
            alt={profile.name}
            className={styles.avatar}
          />
        </div>
      </div>
    </section>
  );
}
