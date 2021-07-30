import React, { FC } from 'react'
import { SectionTitle } from 'components/SectionTitle'

import s from './Launchpad.module.css'

export const Launchpad:FC<{}> = () => {
  return (
    <section className={s.lauchpad} >
      <SectionTitle color='#fff'>AT Finance Launchpad</SectionTitle>
      <p className={s.subtitle} > Join the community. Be the first to decentralize the way you raise capital for your ideas. </p>
    </section>
  )
}
