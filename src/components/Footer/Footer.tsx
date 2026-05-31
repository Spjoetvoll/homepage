import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          {t('footer.copyright', { year })}
        </p>
        <p className={styles.builtWith}>{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
}
