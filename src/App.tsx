import Header from './components/Header';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import Candidate from './components/Candidate';
import Proposals from './components/Proposals';
import Gallery from './components/Gallery';
import Complaints from './components/Complaints';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Candidate />
      <QuickAccess />
      <Proposals />
      <Gallery />
      <Complaints />
      <Footer />
    </div>
  );
}

export default App;
