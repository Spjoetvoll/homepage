import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import styles from './Navigation.module.css';

interface Props {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Navigation({ theme, onToggleTheme }: Props) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'no' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('language', next);
  };

  return (
    <nav className={styles.nav}>
      <a href='#about' className={styles.link}>{t('nav.about')}</a>
      <a href='#work' className={styles.link}>{t('nav.portfolio')}</a>
      <a href='#tech' className={styles.link}>{t('nav.technologies')}</a>
      <a href='#contact' className={styles.link}>{t('nav.contact')}</a>
      <span className={styles.divider} />
      <button className={styles.langBtn} onClick={toggleLanguage} aria-label='Toggle language'>
        {i18n.language === 'en' ? 'NO' : 'EN'}
      </button>
      <button className={styles.iconBtn} onClick={onToggleTheme} aria-label='Toggle theme'>
        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
      </button>
    </nav>
  );
}
