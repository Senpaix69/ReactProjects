import React, { useState } from 'react';
import './Navbar.css';
import Search from '../Search/Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
    const [stat, setStat] = useState(true);
    return (
        <>
            {stat ? <div className='Navbar'>
                <button className={`Nav--btn bg${darkTheme ? "-d" : ""}`
                } onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? "Light-Mode" : "Dark-Mode"}
                </button>
                <h1 className={`Nav--Title bg${darkTheme ? "-d" : ""}`}>Senpai</h1>
                <Search darkTheme={darkTheme} stat={stat} setStat={setStat} />
            </div > :
                <div className="Navbar-S">
                    <h1 className={`NavS--Title bg${darkTheme ? "-d" : ""}`}>Senpai</h1>
                    <div className='NavS--Search'>
                        <Search darkTheme={darkTheme} />
                    </div>
                    <button className={`Nav--btn bg${darkTheme ? "-d" : ""}`} onClick={() => setDarkTheme(!darkTheme)}>
                        {darkTheme ? "Light-Mode" : "Dark-Mode"}
                    </button>
                </div>}
        </>
    )
}

export default Navbar;