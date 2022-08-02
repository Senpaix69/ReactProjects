import React from 'react'

export default function Hero() {
  return (
    <section className='hero'>
      <img src={require('./images/bnb-exp.jpeg')} alt='bnb-exp' className='hero--photo'/>
      <h1 className='hero--header'>Online Experience</h1>
      <p className='hero--text'>Join unique interactive activities led by
        one-of-a-kind host-all without leaving home
      </p>
    </section>
  )
}
