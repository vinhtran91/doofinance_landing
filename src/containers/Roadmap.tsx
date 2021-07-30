import React, { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { TimelinePoint } from 'components/TimelinePoint'

import s from './Roadmap.module.css'

export const Roadmap:FC<{}> = () => {
  return (
    <section className={s.roadmap}>
      <SectionTitle>Roadmap</SectionTitle>
      <p className={s.description}>$AT Roadmap</p>
      <div className={s.timeline}>
        <TimelinePoint 
          date='Q2 2021'
          content={[
            'Farming & Staking Pools',
            'Initial Token Release',
          ]}
        />

         <TimelinePoint 
          date='Q3 2021'
          content={[
            'Initial Launchpad Release (ALPHA)',
            'Liquidity Aggregator Starting Development',
          ]}
        />

         <TimelinePoint 
          date='Q4 2021'
          content={[
            'Launchpad Release Stable v1',
            'Initial Liquidity Aggregator Release (ALPHA)',
            'NFT Marketplace Starting Development',
          ]}
        />

         <TimelinePoint 
          date='Q1 2022'
          content={[
            'Initial NFT Marketplace Release (ALPHA)',
            'Liquidity Aggregator Release Stable v1',
            'NFT Marketplace Release Stable V1',
          ]}
        />
      </div>
    </section>
  )
}
