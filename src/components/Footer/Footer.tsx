import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.left}>
          {year} Morten Spjotvoll
        </span>
        <span className={styles.right}>
          Built with <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>React</a> + <a href='https://www.typescriptlang.org' target='_blank' rel='noopener noreferrer'>TypeScript</a>
        </span>
      </div>
    </footer>
  );
}
