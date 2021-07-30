import React, { FC } from 'react'

import s from './Card.module.css'

export const Card:FC<{
  image: string,
  title: string,
  description: string
}> = ({ image, title, description}) => {
  return (
    <div className={s.card}>
      <img src={image} alt="at" />
      <h2 className={s.title} >{title}</h2>
      <p className={s.description} >{description}</p>
    </div>
  )
}
