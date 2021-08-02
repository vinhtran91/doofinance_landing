import React, { FC, useState } from 'react'
import s from './Navbar.module.css'

import { OutlineWhiteButton } from 'components/OutlineWhiteButton'

export const Navbar:FC<{}> = () => {

  const [show, setShow] = useState(false)

  return (
    <nav className={`${s.navbar} ${show && s.show}`}>
      <div className={s.wrapper}>
        <a href='/' className={s.logo} >
          <img src='/images/logo-new.svg' alt='logo at' />
        </a>      
        <div className={s.toggle} onClick={() => setShow(!show)} />
      </div>
      
      <ul className={s.menu}>
        <li><a href='#ecosystem'>Ecosystem</a></li>        
        <li><a href='#launchpad'>Launchpad</a></li>
        <li><a href='#tokenomics'>Tokenomics</a></li>
        <li><a href='#protocol'>Protocol</a></li>
        <li><a href='#roadmap'>Roadmap</a></li>
        <li><a href='#team'>Team</a></li>
        <li>
          <OutlineWhiteButton
            href='#'
            text='White Paper'
            className={s.whitepaper}
            bgColor='#fff'
            textColor='#00A3BB'
          />
        </li>
      </ul>           
    </nav>
  )
}
