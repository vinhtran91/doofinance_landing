import React,  { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle'

import s from './Ecosystem.module.css';
import { Service } from 'components/Service';

export const Ecosystem:FC<{}> = () => {
  return (
    <section className={s.ecosystem} >
      <SectionTitle>Ecosystem</SectionTitle>
      <p className={s.subtitle} >Part of the DooFinance Ecosystem</p>
      <div className={s.maincontent}>
        <Service
          title='Launchpad'
          description='The IDO will give community members the chance to get in on the ground floor and claim a new token on the launchpad.'
          image='/images/launchpad.svg'
        />
        <Service
          title='Liquidity Aggregator'
          description='Traders use liquidity aggregators to find the best possible price across a variety of liquidity pools. '
          image='/images/liquidity.svg'
        />
        <Service
          title='Farming/Staking'
          description='With each IDO launched on our platform, a new farming pool will be deployed based on the launched token.'
          image='/images/farming.svg'
        />
        <Service
          title='NFT Marketplace'
          description='Users can easily create as many collectibles as they wish, sell them, or decide not to sell on this network.'
          image='/images/nft.svg'
        />
      </div>
    </section>
  )
}
