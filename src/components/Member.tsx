import React, { FC } from 'react'

import s from './Member.module.css'

export const Member:FC<{
  name: string,
  role: string,
  image:  string,
}> = ({name, role, image}) => {
  return (
    <div className={s.member}>
      <img src={image} alt='member' />
      <p className={s.name} >{name}</p>
      <p className={s.role} >{role}</p>
    </div>
  )
}
