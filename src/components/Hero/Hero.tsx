import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../../assets/images/profile.png';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden='true' />
      <div className={`${styles.glow} ${styles.glow1}`} aria-hidden='true' />
      <div className={`${styles.glow} ${styles.glow2}`} aria-hidden='true' />

      <div className={styles.content}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for projects
          </div>

          <h1 className={styles.headline}>
            {t('hero.greeting')}{' '}
            <span className={styles.gradientText}>{t('hero.name')}</span>
          </h1>

          <p className={styles.description}>{t('hero.subtitle')}</p>

          <div className={styles.actions}>
            <a href='#contact' className={styles.primaryBtn}>
              {t('hero.cta')}
              <ArrowRight size={16} />
            </a>
            <a href='#work' className={styles.secondaryBtn}>
              {t('portfolio.title')}
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <img src={profileImg} alt='Morten Spjotvoll' className={styles.image} />
          </div>
          <div className={styles.floatingCard}>
            <code>{'>'}</code> Software Architect @ Norway
          </div>
        </motion.div>
      </div>
    </section>
  );
}
