import React from 'react'
import './textcomp.scss'

interface TextCompProps {
  text: string
}
const TextComp = ({ text }: TextCompProps) => {
  return <p className='forecastElement'>{text}</p>
}

export default TextComp
