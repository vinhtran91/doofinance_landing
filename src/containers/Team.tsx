import React, { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle'
import { Member } from 'components/Member'

import s from './Team.module.css'

const data = [
  {name: 'Mad Syukri', role: 'Lead Developer'},
  {name: 'Antonio Moratti', role: 'Community Manager'},
  {name: 'HarryS.', role: 'Solidity Programmer'},
  {name: 'Chou Min Zhou', role: 'Solidity Programmer'},
  {name: 'MarkosX', role: 'Backend Developer'},
  {name: 'Carl John', role: 'Backend Developer'},
  {name: 'Brenda Hart', role: 'Frontend Developer'},
  {name: 'RUN3', role: 'Frontend Developer'},
]

export const Team:FC<{}> = () => {
  return (
    <section id='team' className={s.team} >
      <SectionTitle>Our Team</SectionTitle>
      <p className={s.description}>$AT Team</p>
      <div className={s.grid} >
      { data.map((el, i) => <Member key={i} {...el} image={`/images/at-team-${i+1}.svg`} />) }
      </div>
    </section>
  )
}
