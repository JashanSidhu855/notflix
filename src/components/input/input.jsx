import React from "react";
import "./input.css";
const Input = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} defaultValue = {props.value} className="input-field" />
  )
}

export default Input;