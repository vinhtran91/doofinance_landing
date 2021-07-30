import React, { FC } from 'react'


import s from './Service.module.css';

export const Service:FC<{
  title: string,
  description: string,
  image: string
}> = ({
  title, description, image
}) => {
  return (
    <div className={s.service}>
      <img className={s.image} src={image} alt={title} />
      <h3 className={s.title} >{title}</h3>
      <p className={s.description} > {description} </p>
    </div>
  )
}
