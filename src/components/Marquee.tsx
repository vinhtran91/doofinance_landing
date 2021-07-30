import React, { FC } from 'react'

import s from './Marquee.module.css'

export const Marquee:FC<{}> = ({
  children
}) => {
  return (
    <div className={s.marquee}>
      <div className={s.content}>{children}</div> 
    </div>
  )
}
