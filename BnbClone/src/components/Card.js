import React from 'react'

export default function Card(props) {
  let badgeText = props.openSpots === 0 ? "SOLD OUT" : "ONLINE";
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={require(`./images/${props.coverImg}`)} alt='img' className='card--img' />
      <div className='card--stats'>
        <img src={require('./images/star.png')} alt='img' className='card--star' />
        <span>{props.stats.rating}</span>
        <span className='grey'>({props.stats.reviewCount})</span>
        <span className='grey'>{props.location}</span>
      </div>
      <p className='card--title'>{props.title}</p>
      <p><b>From ${props.price}</b> / person</p>
    </div>
  )
}