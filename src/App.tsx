import {
  Footer,
  Hero,
  IntelFeed,
  PackageGrid,
  SkillsPanel,
  TopBar,
} from './components';

export function App() {
  return (
    <div className="app">
      <TopBar />
      <main className="main">
        <Hero />
        <div className="dashboard-grid">
          <PackageGrid />
          <aside className="sidebar">
            <IntelFeed />
            <SkillsPanel />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
