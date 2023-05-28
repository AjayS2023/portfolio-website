import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route, useLocation} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <HomeWrapper />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

function HomeWrapper() {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Home />;
  }
  return null;
}

export default App;

