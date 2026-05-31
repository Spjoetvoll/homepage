import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

export function About() {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.bio}>{t('about.bio1')}</p>
            <p className={styles.bio}>{t('about.bio2')}</p>
            <p className={styles.bio}>{t('about.bio3')}</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>6+</div>
              <div className={styles.statLabel}>{t('about.experience')}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>{t('about.projects')}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>30+</div>
              <div className={styles.statLabel}>{t('about.technologies')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
