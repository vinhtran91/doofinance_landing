import React, { FC } from 'react'
import s from './OutlineWhiteButton.module.css'

export const OutlineWhiteButton:FC<{
  href: string,
  text: string,
  className?: any,
  bgColor?: string,
  textColor?: string
}> = ({href, text, className, bgColor="#59C09D", textColor='#fff'}) => {
  return (
    <a className={`${s.button} ${className}`} rel="noreferrer" href={href} target='_blank' style={{background: bgColor, color: textColor}}>
      {text}
    </a>
  )
}
