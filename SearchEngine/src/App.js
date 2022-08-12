import './App.css';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    const theme = JSON.parse(localStorage.getItem('theme'))
    return theme ? theme : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkTheme))
  }, [darkTheme]);
  console.log(darkTheme)

  return (
    <div className='App'>
      <Helmet>
        <style>{`body { background-color: ${darkTheme ? "#27272a" : "white"}; }`}</style>
      </Helmet>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className='Routes'>
        <Routes darkTheme={darkTheme} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
