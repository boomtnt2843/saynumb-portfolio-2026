import { useTranslation } from 'react-i18next';
import { projects } from '../data';
import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true }) as Array<{
    title: string;
    period: string;
    description: string;
    bullets: string[];
  }>;

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>{t('projects.sectionLabel')}</p>
        <h2 className={styles.sectionTitle}>{t('projects.sectionTitle')}</h2>
        <div className={styles.grid}>
          {items.map((item, i) => {
            const meta = projects[i];
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
                    {meta.imageCaption && (
                      <p className={styles.imageCaption}>{meta.imageCaption}</p>
                    )}
                  </div>
                )}
                <div className={styles.body}>
                  <span className={styles.period}>{item.period}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                  <ul className={styles.bullets}>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {meta?.link && (
                    <a
                      href={meta.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cta}
                    >
                      {t('projects.viewProject')}
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
