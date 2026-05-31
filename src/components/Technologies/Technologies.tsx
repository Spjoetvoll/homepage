import { useTranslation } from 'react-i18next';
import { Code2, Layout, Server, Database, Cloud, Wrench } from 'lucide-react';
import type { TechCategory } from '../../types';
import styles from './Technologies.module.css';

const icons = {
  languages: Code2,
  frontend: Layout,
  backend: Server,
  databases: Database,
  devops: Cloud,
  tools: Wrench,
};

const techData: TechCategory[] = [
  {
    key: 'languages',
    items: [
      { name: 'Go' },
      { name: 'TypeScript' },
      { name: 'Dart' },
      { name: 'C#' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'PL/SQL' },
      { name: 'Bash' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'React' },
      { name: 'Flutter' },
      { name: 'Angular' },
      { name: 'React Native' },
      { name: 'HTML/CSS' },
      { name: 'Vite' },
      { name: 'CSS Modules' },
      { name: 'Sass' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Go (Gin)' },
      { name: '.NET' },
      { name: 'REST APIs' },
      { name: 'OAuth2 / JWT' },
      { name: 'Nginx' },
      { name: 'Microservices' },
      { name: 'gRPC' },
      { name: 'Puppet' },
    ],
  },
  {
    key: 'databases',
    items: [
      { name: 'PostgreSQL' },
      { name: 'SQLite' },
      { name: 'Oracle DB' },
      { name: 'PgAdmin' },
      { name: 'SQL' },
      { name: 'NoSQL' },
      { name: 'Redis' },
      { name: 'Migrations' },
    ],
  },
  {
    key: 'devops',
    items: [
      { name: 'Linux / Ubuntu' },
      { name: 'Podman' },
      { name: 'Docker' },
      { name: 'Quadlet' },
      { name: 'Systemd' },
      { name: 'GitHub Actions' },
      { name: 'Cloudflare' },
      { name: 'Restic / B2' },
    ],
  },
  {
    key: 'tools',
    items: [
      { name: 'Git' },
      { name: 'VS Code' },
      { name: 'GitHub' },
      { name: 'Jira' },
      { name: 'SOPS / age' },
      { name: 'Vagrant' },
      { name: 'Uptime Kuma' },
      { name: 'NSwag' },
    ],
  },
];

export function Technologies() {
  const { t } = useTranslation();

  return (
    <section className="section" id="technologies">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('technologies.title')}</h2>
          <p className="section-subtitle">{t('technologies.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {techData.map(({ key, items }) => {
            const Icon = icons[key as keyof typeof icons];
            return (
              <div key={key} className={styles.category}>
                <h3 className={styles.categoryTitle}>
                  <span className={styles.categoryIcon}>
                    <Icon size={18} />
                  </span>
                  {t(`technologies.categories.${key}`)}
                </h3>
                <div className={styles.items}>
                  {items.map(({ name }) => (
                    <span key={name} className={styles.item}>{name}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
