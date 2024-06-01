import { FC, ReactNode } from 'react'
import { Hero } from './hero'
import { Brands } from './brands'
import { Statement } from './statement'
import { Develop } from './develop'
import { Review } from './review'
import { Deploy } from './deploy'
import { Stats } from './stats'
import { Services } from './services'
import { Features } from './features'
import { Snacks } from './snacks'
import { SignUp } from './signUp'
import { Links } from './links'



export const HomePage = () => {

  return (
    <>
      <Hero />
      <Brands />
      <Statement />
      <Develop />
      <Review />
      <Deploy />
      <Stats />
      <Services />
      <Features />
      <Snacks />
      <SignUp />
      <Links />
    </>
  )
}


