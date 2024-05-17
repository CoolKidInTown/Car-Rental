import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Home/Hero/Hero'
import Featured from '../Components/Home/Featured/Featured'
import WhyUs from '../Components/Home/WhyUs/WhyUs'
import OurMission from '../Components/Home/Mission/OurMission'
import CarNews from '../Components/Home/News/CarNews'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar /> 
      <Hero />
      <Featured />
      <WhyUs />
      <OurMission />
      <CarNews />
      <Footer />
    </>
  )
}

export default Home
