import React from 'react';
import Header from "../Header/Header";
import Navbar from "../../steriwave/navigation/Navbar";
import Footer from "../../steriwave/navigation/Footer";
import Contact from "../../mediwave/contact/Contact";
import Informations from '../discoverUS/Informations';
import Video from '../videoSteriwave/video';
import Tarification from '../../steriwave/tarification/Tarification';
import Avis from '../avis/Avis';
import Docs from '../docs/Docs';

function SteriwaveHome() {
  return (
    <div>
      <Navbar />
      <Header />
      <Informations/>  
      <Video/>
      <Docs/>
      <Tarification />
      <Contact />
      {/* <Avis/> */}
      <Footer />
    </div>
  )
}

export default SteriwaveHome