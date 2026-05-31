import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

interface Props {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Navigation({ theme, onToggleTheme }: Props) {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'no' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('language', next);
  };

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#technologies', label: t('nav.technologies') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoAccent}>S</span>ysopoly
        </a>

        <div className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link}>
              {label}
            </a>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.langButton}
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {i18n.language === 'en' ? 'NO' : 'EN'}
          </button>
          <button
            className={styles.iconButton}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link} onClick={closeMobile}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
