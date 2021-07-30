import React, { FC } from 'react'
import { Fade } from "react-awesome-reveal";

export const SectionTitle:FC<{color?: string}> = ({children, color}) => {
  return (
    <Fade direction='up'>
      <h1 style={{
        fontSize: '3.5rem',
        textAlign: 'center',
        color: color ? color : '#031c4e',
        marginBottom: '1.6rem'
      }} >{children}</h1>
    </Fade>
  )
}
