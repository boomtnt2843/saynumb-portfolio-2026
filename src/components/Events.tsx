import { useTranslation } from 'react-i18next';
import { events } from '../data';
import styles from './Events.module.css';

export default function Events() {
  const { t } = useTranslation();
  const items = t('events.items', { returnObjects: true }) as Array<{
    title: string;
    location: string;
    period: string;
    description: string;
    imageCaption?: string;
  }>;

  return (
    <section id="events" className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>{t('events.sectionLabel')}</p>
        <h2 className={styles.sectionTitle}>{t('events.sectionTitle')}</h2>
        <div className={styles.list}>
          {items.map((item, i) => {
            const meta = events[i];
            return (
              <article key={item.title} className={styles.item}>
                <div className={styles.number}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.period}>{item.period}</span>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
                {meta?.image && (
                  <div className={styles.imageWrap}>
                    <img
                      src={meta.image}
                      alt={item.imageCaption ?? item.title}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
