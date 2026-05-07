import { useTranslation } from 'react-i18next';
import { miniProjects } from '../data';
import styles from './MiniProjects.module.css';

export default function MiniProjects() {
  const { t } = useTranslation();
  const items = t('fun.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    warning?: string;
  }>;

  return (
    <section id="fun" className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>{t('fun.sectionLabel')}</p>
        <h2 className={styles.sectionTitle}>{t('fun.sectionTitle')}</h2>
        <div className={styles.grid}>
          {items.map((item, i) => {
            const meta = miniProjects[i];
            return (
              <article key={item.title} className={styles.card}>
                {meta?.image && (
                  <div className={styles.imageWrap}>
                    <img
                      src={meta.image}
                      alt={meta.imageCaption ?? item.title}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                  {item.warning && (
                    <p className={styles.warning}>{item.warning}</p>
                  )}
                  {meta?.link && (
                    <a
                      href={meta.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cta}
                    >
                      {t('fun.viewLive')}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
