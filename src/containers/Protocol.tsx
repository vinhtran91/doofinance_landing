import React, { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { Card } from 'components/Card'

import s from './Protocol.module.css'

export const Protocol:FC<{}> = () => {
  return (
    <section className={s.protocol} >
      <SectionTitle color='#fff'>Deflationary Token</SectionTitle>
      <div className={s.subtitle}> 
        AT Finance has a unique burning mechanism automatically sent to burn address with every transaction. Burning tokens essentially eliminate them from the available stock, making them more expensive. 
      </div>
      <div className={s.cardgroup} >
        <Card 
          image='/images/burning-cycle.png' 
          title='Burning Cycle'
          description='When a token is excluded from the current pool of cryptocurrencies in circulation, it is burned. Thus, $AT will run for a total of 148 cycles. '
        />
        <Card 
          image='/images/burn-rate.png' 
          title='Burn Rate'
          description='As people transact, the sum of tokens in your wallet will continue to grow indefinitely. Therefore, the burn rate for AT Finance is from 5% to 12%. '
        />
        <Card 
          image='/images/rebase.png' 
          title='Rebase'
          description='This burn will cause a positive rebase when the total burned tokens exceed the target threshold and distributing 50% of the burnt supply to token holders. '
        />       
      </div>
    </section>
  )
}
