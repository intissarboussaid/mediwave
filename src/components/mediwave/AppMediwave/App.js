import React from 'react'
import VideoHeader from '../videoheader/Header'

import Navbar from '../navigation/Navbar'
import Footer from "../../mediwave/navigation/Footer";
import Contact from '../../mediwave/contact/Contact';
import AboutUs from '../aboutUs/AboutUs';
import Information from "../information/InformationSection";
import DiscoverUs from '../ourSolution/DiscoverUs';
import '../AppMediwave/AppMediwave.css';
import ResearchAndDevelopment from '../r&d/ResearchAndDevelopment';
import OurPartenaires from '../ourPartenaires/OurPartenaires';


function Home() {
  return (
    <>
      <VideoHeader />
      <Navbar />

      <AboutUs />
      <DiscoverUs />
      <ResearchAndDevelopment/>
      <Information/>  
      <OurPartenaires/> 
      <Contact />
      <Footer />
    </>
  )
}

export default Home