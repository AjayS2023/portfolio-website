import React from 'react';
import Data from './Data';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <HomeWrapper />
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <DataWrapper />
      <Footer />
    </div>
  );
}

function HomeWrapper(){
  const location = useLocation();
  if(location.pathname === '/'){
    return <Home />;
  }
  return null;
}

function DataWrapper(){
  const location = useLocation();
  if(location.pathname === '/projects'){
    return <Data />;
  }
  return null;
}

export default App;

