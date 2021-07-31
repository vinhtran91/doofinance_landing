import { Marquee } from 'components/Marquee'
import React, { FC } from 'react'

import { Navbar } from 'components/Navbar'
import { OutlineWhiteButton } from 'components/OutlineWhiteButton'

import s from './Intro.module.css'

export const Intro: FC<{}> = () => {
  return (
    <header className={s.intro} >
      <Marquee>
        <span>Latest News! - AT Finance live at </span> &nbsp;
        <a 
          rel="noreferrer"
          href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x87eba250a34e7486eab140d89e2eb5d8d113ea2d' 
          target='_blank'
        >
          PancakeSwap
        </a>
      </Marquee>
      <Navbar />
      <div className={s.maincontent}>
        <div className={s.left}>
          <h1 className={s.title}>DECENTRALIZED IDO LAUNCHPAD FOR THE BINANCE SMART CHAIN</h1>
          <p className={s.subtitle}> Start your next project with us! </p>
          <OutlineWhiteButton 
            href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x87eba250a34e7486eab140d89e2eb5d8d113ea2d'
            text='Buy at PancakeSwap'
            className={s.button}
            bgColor="#59C09D"
          />
          <OutlineWhiteButton 
            href='https://github.com/TechRate/Smart-Contract-Audits/blob/main/ATFinance%20Full%20Smart%20Contract%20Security%20Audit.pdf'
            text='Smart Contract Audit'
            className={s.button}
            bgColor="#00A3BB"
          />
          <div className={s.social}>
            <a rel="noreferrer" target='_blank' href="https://twitter.com/ATFinance_">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width={30} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" /> </svg>
            </a>
            <a rel="noreferrer" target='_blank' href="https://t.me/DooFinanceEN">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /> </svg>
            </a>
            <a rel="noreferrer" target='_blank' href="https://github.com/ATFinance">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg>
            </a>
            <a rel="noreferrer" target='_blank' href="https://bscscan.com/token/0x87eba250a34e7486eab140d89e2eb5d8d113ea2d">
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={36} viewBox="0 0 121.378 121.333"> <g id="bscscan-logo-light-circle" transform="translate(-219.378 -213.334)"> <path id="Path_1" data-name="Path 1" d="M244.6,271.1a5.144,5.144,0,0,1,5.168-5.143l8.568.028a5.151,5.151,0,0,1,5.151,5.151v32.4c.965-.286,2.2-.591,3.559-.911a4.292,4.292,0,0,0,3.309-4.177V258.261a5.152,5.152,0,0,1,5.151-5.152H284.1a5.152,5.152,0,0,1,5.151,5.152v37.3s2.15-.87,4.243-1.754a4.3,4.3,0,0,0,2.625-3.957V245.383a5.151,5.151,0,0,1,5.15-5.151h8.585A5.151,5.151,0,0,1,315,245.383V282c7.443-5.394,14.986-11.882,20.972-19.683a8.646,8.646,0,0,0,1.316-8.072,60.636,60.636,0,1,0-109.855,50.108,7.668,7.668,0,0,0,7.316,3.79c1.624-.143,3.646-.345,6.05-.627a4.29,4.29,0,0,0,3.805-4.258V271.1" fill="#fff" /> <path id="Path_2" data-name="Path 2" d="M244.417,323.061A60.656,60.656,0,0,0,340.756,274c0-1.4-.065-2.778-.158-4.152-22.163,33.055-63.085,48.508-96.181,53.213" fill="#f0b90b" /> </g> </svg>
            </a>
          </div>
        </div>
        <div className={s.right}>
          <img src='/images/hero-isometric.svg' alt='' />
        </div>
      </div>
      <img className={s.wave} src='/images/wave.svg' alt='wave' />
    </header>
  )
}
