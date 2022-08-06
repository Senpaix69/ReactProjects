import React from 'react'

const Navbar = (props) => {

    document.body.style.backgroundColor = props.darkMode ? "black" : "white";
    const toggle = props.darkMode ? "Light" : "Dark";
    
    return (
        <div className='Navbar'>
            <div className={`Nav ${`${toggle}-Navbar`}`}></div>
            <div className='Navbar--Header'>
                <h1>Senpai's</h1>
                <h1
                    style={{ color: props.darkMode ? "white" : "black" }}
                >Notes</h1>
            </div>
            <button
                className={`${toggle}-Btn`}
                onClick={props.toggleDarkMode}
            >{toggle} Mode
            </button>
        </div>
    )
}

export default Navbar;