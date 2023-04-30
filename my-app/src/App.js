import React from 'react';
import Data from './Data';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <HomeWrapper />
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <DataWrapper />
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

