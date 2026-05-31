import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types';
import styles from './Portfolio.module.css';

const projects: Project[] = [
  { id: 'sethabit', url: 'https://sethabit.app', codeUrl: 'https://github.com/Sysopoly' },
  { id: 'sysopoly-infra', codeUrl: 'https://github.com/Sysopoly/infrastructure' },
  { id: 'auth-service', codeUrl: 'https://github.com/Sysopoly/auth-service' },
  { id: 'melhus', url: 'https://apps.apple.com/no/app/sommer-i-melhus/id1571261508', codeUrl: 'https://github.com/Xytek/Melhussommer' },
  { id: 'deploy-webhook', codeUrl: 'https://github.com/Sysopoly/deploy-webhook' },
  { id: 'homepage', codeUrl: 'https://github.com/Sysopoly/homepage' },
];

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="section-subtitle">{t('portfolio.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {projects.map(({ id, url, codeUrl }) => (
            <article key={id} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {t(`portfolio.projects.${id}.title`)}
              </h3>
              <p className={styles.cardDescription}>
                {t(`portfolio.projects.${id}.description`)}
              </p>
              <div className={styles.tags}>
                {(t(`portfolio.projects.${id}.tags`, { returnObjects: true }) as string[]).map(
                  (tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  )
                )}
              </div>
              <div className={styles.links}>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <ExternalLink size={14} />
                    {t('portfolio.viewProject')}
                  </a>
                )}
                {codeUrl && (
                  <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    {t('portfolio.viewCode')}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
