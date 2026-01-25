import Header from './components/Header';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import Services from './components/Services';
import Gallery from './components/Gallery';
import News from './components/News';
import Complaints from './components/Complaints';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickAccess />
      <Services />
      <Gallery />
      <News />
      <Complaints />
      <Footer />
    </div>
  );
}

export default App;
