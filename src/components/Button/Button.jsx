import React from 'react'

const Button = ({ text, bgColor, textColor, px, py,textSize, handler = () => { } }) => {
  return (
    <button  onClick={handler}  className={`${text} ${bgColor} ${textColor} hover:scale-105 rounded-2xl z-10 ${textSize} ${px} ${py}`}>{text}</button>
  )
}

export default Button
