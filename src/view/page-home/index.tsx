import DrawerUI from '@/components/drawer'
import React from 'react'
import HeroSection from './components/heroSection'
import SectionTwo from './components/sectionTwo'
import SectionThree from './components/sectionThree'
import SectionFour from './components/sectionFour'

type Props = {}

const HomePageUI:React.FC = (props: Props) => {
  return (
    <div className=''>
        <HeroSection/>
        <br/>
        <SectionTwo/>
        <br/>
        <SectionThree/>
        <br/>
        <SectionFour/>
    </div>
  )
}

export default HomePageUI