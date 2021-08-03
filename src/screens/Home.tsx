import React, { FC } from 'react'

import { Intro } from 'containers/Intro'
import { Ecosystem } from 'containers/Ecosystem'
import { Launchpad } from 'containers/Launchpad'
import { Tokenomics } from 'containers/Tokenomics'
import { Protocol } from 'containers/Protocol'
import { Roadmap } from 'containers/Roadmap'
/* import { Team } from 'containers/Team' */
import { FAQ } from 'containers/FAQ'
import { Footer } from 'containers/Footer'

export const Home: FC<{}> = () => {
  return (
    <>
      <Intro /> 
      <Ecosystem />
      <Launchpad />
      <Tokenomics />
      <Protocol />
      <Roadmap />
      {/* <Team /> */}
      <FAQ />
      <Footer />
    </>
  )
}
