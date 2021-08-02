import React, { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { Card } from 'components/Card'

import s from './Protocol.module.css'

export const Protocol:FC<{}> = () => {
  return (
    <section id='protocol' className={s.protocol} >
      <SectionTitle color='#fff'>Deflationary Token</SectionTitle>
      <div className={s.subtitle}> 
        Doo Finance has a unique burning mechanism automatically sent to burn address with every transaction. Burning tokens essentially eliminate them from the available stock, making them more expensive. 
      </div>
      <div className={s.cardgroup} >
        <Card 
          image='/images/burning-cycle.png' 
          title='4% LOCKED IN LIQUIDITY POOL'
          description='We depend on Pancake swap liquidity pools to have a market and to guarantee it we will auto add 4% tax that will be used to add DOO Token and BNB back to the pancake liquidity pool. '
        />
        <Card 
          image='/images/burn-rate.png' 
          title='AUTOMATIC BURNING BY THE REFLECTIONS'
          description='Our dead wallet is like a holder, and it receives a part of 2% that is redistributed to all holders in every transaction but instead of keeping the tokens it just burns 🔥 automatically, which means we are a deflationary token. '
        />
        <Card 
          image='/images/rebase.png' 
          title='2% REDISTRIBUTED TO ALL HOLDERS'
          description='Holders of our token can be rewarded simply by holding the token by 2% of every transaction, which is a form of in-wallet staking that does not require tokens to be locked. '
        />       
      </div>
    </section>
  )
}
