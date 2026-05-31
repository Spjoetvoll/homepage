import './i18n';
import './styles/global.css';
import { useTheme } from './hooks/useTheme';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Showcase } from './components/Showcase/Showcase';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Technologies } from './components/Technologies/Technologies';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navigation theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Portfolio />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
