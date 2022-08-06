import React, { useState } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [search, setSearch] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Search handleSearch={setSearch} />
      <div className='Notes'>
        <AddNote search={search} darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
