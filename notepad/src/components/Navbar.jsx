import React from 'react'

const Navbar = (props) => {
    const toggle = props.darkMode ? "Light" : "Dark";
    return (
        <div className='Navbar'>
            <div className='Navbar--Header'>
                <h1 className='head'>Senpai's</h1>
                <h1 style={{ color: props.darkMode ? "white" : "black" }}
                >Notes</h1>
                <img className='logo' src={require('./images/logo512.png')} alt='logo' />
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