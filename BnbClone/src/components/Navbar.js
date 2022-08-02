import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav>
        <img className='bnb--logo'
          src={require('./images/airbnb-logo.png')} alt='airbnb' />
      </nav>
    </div>
  )
}