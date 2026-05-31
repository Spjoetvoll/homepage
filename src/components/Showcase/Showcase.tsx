import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimateIn } from '../../hooks/useAnimateIn';
import styles from './Showcase.module.css';

import imgLogo from '../../assets/images/logo.png';
import imgIpad from '../../assets/images/ipad.png';
import imgArrangements from '../../assets/images/arrangements.png';
import imgMenu from '../../assets/images/menu.png';
import imgCalendar from '../../assets/images/calendar.png';

const slides = [imgLogo, imgIpad, imgArrangements, imgMenu, imgCalendar];
const slideLabels = ['App Logo', 'iPad Overview', 'Events View', 'Menu Navigation', 'Calendar View'];

export function Showcase() {
  const { t } = useTranslation();
  const { ref, isInView } = useAnimateIn();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={`section ${styles.showcase}`} id='showcase'>
      <div className='container'>
        <span className='section-label'>// {t('showcase.label')}</span>
        <h2 className='section-title'>{t('showcase.title')}</h2>

        <div
          ref={ref}
          className={styles.content}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className={styles.carousel}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((src, i) => (
                <div key={i} className={styles.slide}>
                  <img src={src} alt={slideLabels[i]} />
                </div>
              ))}
            </div>
            <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={prev} aria-label='Previous slide'>
              <ChevronLeft size={16} />
            </button>
            <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={next} aria-label='Next slide'>
              <ChevronRight size={16} />
            </button>
            <div className={styles.carouselNav}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={styles.info}>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>📱</span>
              {t('showcase.badge')}
            </span>
            <h3 className={styles.title}>{t('showcase.projectTitle')}</h3>
            <p className={styles.description}>{t('showcase.description')}</p>
            <div className={styles.tags}>
              {['React Native', 'Expo', 'JavaScript', 'iOS', 'Android'].map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a href='https://github.com/Spjoetvoll/Melhussommer' target='_blank' rel='noopener noreferrer' className={styles.link}>
                <ArrowUpRight size={13} /> Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
