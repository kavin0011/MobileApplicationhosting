import React from 'react'
import LandingPage from './components/NavBar/LandingPage'
import InfoCard from './components/Card/InfoCard'
import OfferCard from './components/Card/OfferCard'
import Footer from './components/Footer/Footer'
import Last from './components/Footer/Last'
import Prime from './components/Prime/Prime'
import Refer from './components/Refer'

const Home = () => {
  return (
    <div>
        <LandingPage/>
        <Refer/>
        <InfoCard/>
        <Prime/>
        {/* <OfferCard/> */}
        {/* <Footer/> 
        <Last/> */}
    </div>
  )
}

export default Home