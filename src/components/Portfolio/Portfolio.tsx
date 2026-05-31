import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useAnimateIn } from '../../hooks/useAnimateIn';
import type { Project } from '../../types';
import styles from './Portfolio.module.css';

const projects: (Project & { featured?: boolean })[] = [
  { id: 'sethabit', url: 'https://sethabit.app', codeUrl: 'https://github.com/Sysopoly', featured: true },
  { id: 'homepage', codeUrl: 'https://github.com/Sysopoly/homepage' },
];

export function Portfolio() {
  const { t } = useTranslation();
  const { ref, isInView } = useAnimateIn();

  return (
    <section className={`section ${styles.work}`} id='work'>
      <div className='container'>
        <span className='section-label'>// {t('nav.portfolio')}</span>
        <h2 className='section-title'>{t('portfolio.title')}</h2>
        <p className='section-subtitle'>{t('portfolio.subtitle')}</p>

        <div
          ref={ref}
          className={styles.grid}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {projects.map(({ id, url, codeUrl, featured }, i) => (
            <article key={id} className={`${styles.card} ${featured ? styles.featured : ''}`}>
              <div>
                <div className={styles.cardNumber}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className={styles.cardTitle}>
                  {t(`portfolio.projects.${id}.title`)}
                </h3>
                <p className={styles.cardDescription}>
                  {t(`portfolio.projects.${id}.description`)}
                </p>
                <div className={styles.tags}>
                  {(t(`portfolio.projects.${id}.tags`, { returnObjects: true }) as string[]).map(
                    (tag) => <span key={tag} className={styles.tag}>{tag}</span>
                  )}
                </div>
                <div className={styles.links}>
                  {url && (
                    <a href={url} target='_blank' rel='noopener noreferrer' className={styles.link}>
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                  {codeUrl && (
                    <a href={codeUrl} target='_blank' rel='noopener noreferrer' className={styles.link}>
                      <ArrowUpRight size={13} /> Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
