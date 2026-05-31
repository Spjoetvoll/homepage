import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useAnimateIn } from '../../hooks/useAnimateIn';
import styles from './About.module.css';

const coreStack = ['Go', 'Flutter', 'React', 'TypeScript', 'PostgreSQL', 'Puppet', 'Podman'];

export function About() {
  const { t } = useTranslation();
  const { ref, isInView } = useAnimateIn();

  return (
    <section className={`section ${styles.about}`} id='about'>
      <div className='container'>
        <span className='section-label'>// {t('nav.about')}</span>
        <h2 className='section-title'>{t('about.title')}</h2>
        <p className='section-subtitle'>{t('about.subtitle')}</p>

        <motion.div
          ref={ref}
          className={styles.bento}
          style={{
            marginTop: '3rem',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className={`${styles.card} ${styles.bioCard}`}>
            <div className={styles.cardLabel}>Background</div>
            <p className={styles.bio}>{t('about.bio1')}</p>
            <p className={styles.bio}>{t('about.bio2')}</p>
          </div>

          <div className={`${styles.card} ${styles.statsCard}`}>
            <div className={styles.statRow}>
              <div className={styles.statNumber}>6+</div>
              <div className={styles.statLabel}>{t('about.experience')}</div>
            </div>
            <div className={styles.statRow}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>{t('about.projects')}</div>
            </div>
            <div className={styles.statRow}>
              <div className={styles.statNumber}>40+</div>
              <div className={styles.statLabel}>{t('about.technologies')}</div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.experienceCard}`}>
            <div className={styles.cardLabel}>Experience</div>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineText}>
                  <strong>Hansen Technologies</strong>
                  <span>2020 - present</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineText}>
                  <strong>Freelance (Sysopoly)</strong>
                  <span>2021 - present</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineText}>
                  <strong>NTNU - B.Sc. Programming</strong>
                  <span>2017 - 2020</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineText}>
                  <strong>RMIT Melbourne - Exchange</strong>
                  <span>2019</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.stackCard}`}>
            <div className={styles.cardLabel}>Core Stack</div>
            <div className={styles.stackGrid}>
              {coreStack.map((item) => (
                <span key={item} className={styles.stackItem}>{item}</span>
              ))}
            </div>
            <p className={styles.bio} style={{ marginTop: '1.5rem' }}>
              {t('about.bio3')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
