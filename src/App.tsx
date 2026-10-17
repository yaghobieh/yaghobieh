import {
  About,
  Contact,
  Experience,
  Footer,
  ForgeStack,
  Header,
  Hero,
  Projects,
  Skills,
} from './components';

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-ink-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <ForgeStack />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
