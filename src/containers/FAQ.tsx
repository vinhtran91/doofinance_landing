import React, { FC, useState } from 'react'
import { SectionTitle } from 'components/SectionTitle'

import s from './FAQ.module.css'

const data = [
  {
    question: 'What is AT Finance? ',
    answer: 'AT Finance is a small ecosystem created by 6 DAPPs on the Binance Smart Chain Network, which contains an NFT Marketplace, a Liquidity Aggregator platform, a Farming & Staking platform, a BSC Tokens Launchpad, and other two platform waiting to be disclosed which is developed based in Indonesia and Singapore.'
  },
  {
    question: 'Where can I buy $AT?',
    answer: '$AT can be bought at UniCrypt during Pre-Sale starting on 18th May 2021 and purchased afterward in PancakeSwap.'
  },
  {
    question: 'What is $AT total token supply, and will it be stable? ',
    answer: '$AT max token supply will be 100,000,000. Due to that token supply, it will be deflationary.'
  },
  {
    question: 'What is the slippage tolerance need to buy $AT?',
    answer: '$AT can be bought at UniCrypt during Pre-Sale starting on 18th May 2021 and purchased afterward in PancakeSwap.'
  },
  {
    question: 'Where can I buy $AT?',
    answer: '$AT can be bought at UniCrypt during Pre-Sale starting on 18th May 2021 and purchased afterward in PancakeSwap.'
  },
]

export const FAQ:FC<{}> = () => {

  const [show, setShow] = useState(0)

  

  return (
    <section className={s.faq}>
      <SectionTitle color='#fff' >FAQs</SectionTitle>
      <p className={s.description} >General Frequently Asked Questions</p>
      <div className={s.collapse} >
      {data.map((el, i) => <Item 
        key={i+1} {...el} 
        number={i+1} 
        active={i+1===show} 
        onClick={() => setShow(i+1===show ? 0 : i+1)}
      />)}
      </div>
    </section>
  )
}


const Item:FC<{
  number: number,
  question: string,
  answer: string,
  active?: boolean,
  onClick?: any
}> = ({number, question, answer, active=false, onClick}) =>{
  return (
    <div onClick={onClick} className={s.item} data-active={active} >
      <p className={s.question}>
        <span className={s.number}>{number}</span>
        <span>{question}</span>        
      </p>
      <p className={s.answer} >{answer}</p>
    </div>
  )
}