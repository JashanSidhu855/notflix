import React from 'react';
import "./button.css";
const Button = (props) => {
  return (
    <button className="btn" type = {props.type}>{props.text}</button>
  )
}

export default Button;