import { useTranslation } from 'react-i18next';
import { useAnimateIn } from '../../hooks/useAnimateIn';
import styles from './Technologies.module.css';

const colors = {
  lang: '#a78bfa',
  frontend: '#f472b6',
  backend: '#34d399',
  data: '#fbbf24',
  devops: '#60a5fa',
  tools: '#94a3b8',
};

const row1 = [
  { name: 'Go', color: colors.backend },
  { name: 'TypeScript', color: colors.lang },
  { name: 'Dart', color: colors.lang },
  { name: 'C#', color: colors.lang },
  { name: 'JavaScript', color: colors.lang },
  { name: 'Python', color: colors.lang },
  { name: 'PL/SQL', color: colors.data },
  { name: 'Bash', color: colors.lang },
  { name: 'HTML/CSS', color: colors.frontend },
  { name: 'Sass/SCSS', color: colors.frontend },
  { name: 'Razor', color: colors.frontend },
  { name: 'React', color: colors.frontend },
  { name: 'Flutter', color: colors.frontend },
  { name: 'Angular', color: colors.frontend },
  { name: 'React Native', color: colors.frontend },
  { name: 'Vite', color: colors.tools },
  { name: 'Webpack', color: colors.tools },
  { name: 'CSS Modules', color: colors.frontend },
  { name: 'Framer Motion', color: colors.frontend },
  { name: 'i18next', color: colors.frontend },
];

const row2 = [
  { name: 'Gin', color: colors.backend },
  { name: '.NET', color: colors.backend },
  { name: 'REST APIs', color: colors.backend },
  { name: 'OAuth2 / JWT', color: colors.backend },
  { name: 'PKCE', color: colors.backend },
  { name: 'Nginx', color: colors.devops },
  { name: 'Microservices', color: colors.backend },
  { name: 'gRPC', color: colors.backend },
  { name: 'Puppet', color: colors.devops },
  { name: 'Node.js', color: colors.backend },
  { name: 'Bun', color: colors.backend },
  { name: 'npm', color: colors.tools },
  { name: 'NuGet', color: colors.tools },
  { name: 'Dio', color: colors.frontend },
  { name: 'GetIt', color: colors.frontend },
  { name: 'NSwag', color: colors.tools },
  { name: 'Swagger', color: colors.tools },
  { name: 'EmailJS', color: colors.tools },
  { name: 'Logdy', color: colors.tools },
];

const row3 = [
  { name: 'PostgreSQL', color: colors.data },
  { name: 'SQLite', color: colors.data },
  { name: 'Oracle DB', color: colors.data },
  { name: 'PgAdmin', color: colors.data },
  { name: 'Redis', color: colors.data },
  { name: 'Garnet', color: colors.data },
  { name: 'Migrations', color: colors.data },
  { name: 'Linux', color: colors.devops },
  { name: 'Ubuntu', color: colors.devops },
  { name: 'Podman', color: colors.devops },
  { name: 'Docker', color: colors.devops },
  { name: 'Quadlet', color: colors.devops },
  { name: 'Systemd', color: colors.devops },
  { name: 'GitHub Actions', color: colors.devops },
  { name: 'Cloudflare', color: colors.devops },
  { name: 'Restic', color: colors.devops },
  { name: 'Backblaze B2', color: colors.devops },
  { name: 'SOPS + age', color: colors.devops },
  { name: 'Vagrant', color: colors.devops },
];

const row4 = [
  { name: 'Git', color: colors.tools },
  { name: 'GitHub', color: colors.tools },
  { name: 'VS Code', color: colors.tools },
  { name: 'Jira', color: colors.tools },
  { name: 'Uptime Kuma', color: colors.tools },
  { name: 'Makefile', color: colors.tools },
  { name: 'ERB Templates', color: colors.tools },
  { name: 'Hiera', color: colors.tools },
  { name: 'JSON/YAML', color: colors.tools },
  { name: 'Expo', color: colors.frontend },
  { name: 'Bootstrap', color: colors.frontend },
  { name: 'Agile/Scrum', color: colors.tools },
  { name: 'Code Review', color: colors.tools },
  { name: 'Mentoring', color: colors.tools },
  { name: 'CI/CD', color: colors.devops },
  { name: 'TDD', color: colors.tools },
  { name: 'Clean Architecture', color: colors.tools },
  { name: 'DDD', color: colors.tools },
];

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`${styles.marqueeRow} ${reverse ? styles.marqueeRowReverse : ''}`}>
      {doubled.map((item, i) => (
        <span key={`${item.name}-${i}`} className={styles.chip}>
          <span className={styles.chipDot} style={{ background: item.color }} />
          {item.name}
        </span>
      ))}
    </div>
  );
}

export function Technologies() {
  const { t } = useTranslation();
  const { ref, isInView } = useAnimateIn();

  return (
    <section className={`section ${styles.tech}`} id='tech'>
      <div className='container'>
        <span className='section-label'>// {t('nav.technologies')}</span>
        <h2 className='section-title'>{t('technologies.title')}</h2>
        <p className='section-subtitle'>{t('technologies.subtitle')}</p>
      </div>

      <div
        ref={ref}
        className={styles.marqueeWrapper}
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeRow items={row3} />
        <MarqueeRow items={row4} reverse />
      </div>
    </section>
  );
}
