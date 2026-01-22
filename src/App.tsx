import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import News from './components/News';
import QuickAccess from './components/QuickAccess';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickAccess />
      <Services />
      <News />
      <Footer />
    </div>
  );
}

export default App;
