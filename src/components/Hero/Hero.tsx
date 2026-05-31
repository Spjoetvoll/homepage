import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';
import profileImage from '../../assets/images/profile.png';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background} aria-hidden="true">
        <div className={`${styles.gradientOrb} ${styles.orb1}`} />
        <div className={`${styles.gradientOrb} ${styles.orb2}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.greeting}>{t('hero.greeting')}</p>
          <h1 className={styles.name}>{t('hero.name')}</h1>
          <p className={styles.title}>{t('hero.title')}</p>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>
          <a href="#contact" className={styles.cta}>
            {t('hero.cta')}
          </a>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.imageWrapper}>
            <img
              src={profileImage}
              alt="Morten Spjøtvoll"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>{t('hero.scroll')}</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
