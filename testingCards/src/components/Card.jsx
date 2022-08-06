import React from 'react'

const Card = (props) => {
  return (
    <div className="back">
    <div className='Card'>
      <h1 className="Card--title">{props.title}</h1>
      <span className='Startdate'>{props.startDate}<span className='EndDate'>{props.endDate}</span></span>
      <p className='Card--Desc'>{props.desc}</p>
      <button onClick={() => props.handleDelete(props.id)}>delete card</button>
    </div>
    </div>
  )
}

export default Card
