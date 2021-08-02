import React, { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { TimelinePoint } from 'components/TimelinePoint'

import s from './Roadmap.module.css'

export const Roadmap:FC<{}> = () => {
  return (
    <section id='roadmap' className={s.roadmap}>
      <SectionTitle>Roadmap</SectionTitle>
      <p className={s.description}>DooFinance Roadmap</p>
      <div className={s.timeline}>
        <TimelinePoint 
          date='Q2 2021'
          content={[
            'Farming & Staking Pools',
            'Initial Token Release',
          ]}
        />

         <TimelinePoint 
          date='5th August 2021'
          content={[
            'Smart Contract create',
            'Website Launch',
          ]}
        />

         <TimelinePoint 
          date='5th August 2021'
          content={[
            'Initial Liquidity Even on Unicrypt',
          ]}
        />

        <TimelinePoint 
          date='Q4 2021'
          content={[
            'Liquidity Lock with Unicrypt',
            'Launch on Pancakeswap',
          ]}
        />

        <TimelinePoint 
          date='December 2021'
          content={[
            'Launch NFT Marketplace under BSC',
            'Launch Doo Swap Product',
          ]}
        />
        <TimelinePoint 
          date='Q1 2022'
          content={[
            'Launch NFT MiniGame',
          ]}
        />
      </div>
    </section>
  )
}
