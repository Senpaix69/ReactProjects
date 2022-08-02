import React from 'react'

export default function Cards(props) {
  return (
    <div className='card'>
      <img src= {props.imgUrl} alt="img" className='card--img'/>
      <div className='card--about'>
        <span className='card--location'>{props.location}</span>
        <span className='card--map'> <a href={props.googleMapUrl} rel='noreferrer' target={'_blank'}> View on Google Maps</a></span>
        <h1 className='card--title'>{props.title}</h1>
        <span className='card--date'>{props.startDate} {'-'} </span>
        <span className='card--date'>{props.endDate}</span>
        <p className='card--desc'>{props.description}</p>
      </div>
    </div>
  )
}
