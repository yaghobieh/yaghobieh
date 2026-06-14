import {
  Footer,
  IntelFeed,
  PackageGrid,
  ProfileAbout,
  TechCollage,
  TopBar,
} from './components';

export function App() {
  return (
    <div className="app">
      <TopBar />
      <main className="main">
        <ProfileAbout />
        <TechCollage />
        <div className="dashboard-grid">
          <PackageGrid />
          <aside className="sidebar">
            <IntelFeed />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
