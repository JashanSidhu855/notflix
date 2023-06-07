import React from 'react';
import Button from '../button/button';
import "./card.css"
const Card = (props) => { 
  return (
    <div className="card">
      <div className="image-component">
        <img src={props.imgSrc} alt="show logo" className="show-logo" />
      </div>
      <div className="lower-component">
        <p className="show-name">{props.title}</p>
        <p className="show-language">Language: {props.language}</p>
        <p className="show-rating">Ratings: {props.rating}</p>
        <p className="show-channel">time: {props.time}</p>
        <Button text = "Show more"></Button>
      </div>
    </div>

  )
}

export default Card