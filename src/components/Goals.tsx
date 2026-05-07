import { useTranslation } from 'react-i18next';
import styles from './Goals.module.css';

export default function Goals() {
  const { t } = useTranslation();
  const items = t('goals.items', { returnObjects: true }) as string[];

  return (
    <section id="goals" className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>{t('goals.sectionLabel')}</p>
        <h2 className={styles.sectionTitle}>{t('goals.sectionTitle')}</h2>
        <ul className={styles.list}>
          {items.map((goal, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.text}>{goal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
