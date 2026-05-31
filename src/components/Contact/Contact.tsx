import { type FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useAnimateIn } from '../../hooks/useAnimateIn';
import styles from './Contact.module.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export function Contact() {
  const { t } = useTranslation();
  const { ref, isInView } = useAnimateIn();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.get('name') as string,
          from_email: formData.get('email') as string,
          message: formData.get('message') as string,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={`section ${styles.contact}`} id='contact'>
      <div className='container'>
        <span className='section-label'>// {t('nav.contact')}</span>
        <h2 className='section-title'>{t('contact.title')}</h2>
        <p className='section-subtitle'>{t('contact.subtitle')}</p>

        <div
          ref={ref}
          className={styles.layout}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className={styles.info}>
            <p className={styles.infoText}>
              {t('contact.subtitle')}
            </p>
            <div className={styles.socials}>
              <a href='https://github.com/Spjoetvoll' target='_blank' rel='noopener noreferrer' className={styles.socialLink} aria-label='GitHub'>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'/></svg>
              </a>
              <a href='https://www.linkedin.com/in/mortents95' target='_blank' rel='noopener noreferrer' className={styles.socialLink} aria-label='LinkedIn'>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>
              </a>
              <a href='mailto:morten@sysopoly.com' className={styles.socialLink} aria-label='Email'>
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalDot} style={{ background: '#ff5f57' }} />
              <span className={styles.terminalDot} style={{ background: '#febc2e' }} />
              <span className={styles.terminalDot} style={{ background: '#28c840' }} />
              <span className={styles.terminalTitle}>contact.sh</span>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor='name' className={styles.label}>$ name</label>
                <input type='text' id='name' name='name' required className={styles.input} placeholder={t('contact.namePlaceholder')} />
              </div>
              <div className={styles.field}>
                <label htmlFor='email' className={styles.label}>$ email</label>
                <input type='email' id='email' name='email' required className={styles.input} placeholder={t('contact.emailPlaceholder')} />
              </div>
              <div className={styles.field}>
                <label htmlFor='message' className={styles.label}>$ message</label>
                <textarea id='message' name='message' required className={styles.textarea} placeholder={t('contact.messagePlaceholder')} />
              </div>
              <button type='submit' className={styles.submit} disabled={sending}>
                <Send size={14} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                {sending ? t('contact.sending') : t('contact.send')}
              </button>
              {status === 'success' && <div className={`${styles.status} ${styles.success}`}>{t('contact.success')}</div>}
              {status === 'error' && <div className={`${styles.status} ${styles.error}`}>{t('contact.error')}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
