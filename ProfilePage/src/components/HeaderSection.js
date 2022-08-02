import React from 'react'

export default function HeaderSection(props) {
  return (
    <>
      <div className='headerSec'>
        <img src={require('./images/huraira.jpeg')} alt='pic' />
      </div>
      <div className='about'>
        <p className='name'>{props.name}</p>
        <p className='dev'>{props.dev}</p>
        <p className='city'>{props.address}</p>
      </div>
    </>
  )
}