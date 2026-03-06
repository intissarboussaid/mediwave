import React from 'react';
import "../vrme/HomeVRme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "../../components/vrme/navigation/Header";
import Footer from "../vrme/navigation/Footer";
import VideoHeader from "../../components/vrme/videoHeader.js/VideoHeader";
import Tarification from "../../components/vrme/tarification/Tarification";
import NosTherapeute from "../../components/vrme/nosTherapeute/NosTherapeute";
import DifferentTherapies from "../../components/vrme/differentTherapies/DifferentTherapies.js";
import InformationSection from "../../components/vrme/informationSection/InformationSection";
import Partenaire from "../../components/vrme/partenaire/Partenaire";
import DoctorLocalisation from "../../components/vrme/doctorLocalisation/DoctorLocalisation";
import PhysiotherapistLocalisation from "../../components/vrme/physiotherapistLocation/PhysiotherapistLocation";
import Blog from "../../components/vrme/blog/Blog";
import Contact from '../mediwave/contact/Contact';
import Advantage from "../../components/vrme/advantage/Advantage";
import DifferentPhysiotherapies from "../../components/vrme/differentphysiotherapies/DifferentPhysiotherapies.js";

import SymbolMedive from "../vrme/symboleMediwave/SymboleMediwave";
import Apptest from './differentTherapies/Apptest.js';



function PageHomeVRme() {
  return (
    <>
      <div id="VRme-section">
        {/* <SymbolMedive/> */}
        <Header />
        <VideoHeader />
        <DifferentTherapies />
        <DoctorLocalisation />
        <DifferentPhysiotherapies />
        <PhysiotherapistLocalisation />
        <Tarification />
        <Advantage />
        <Partenaire />
        <Blog />
        <InformationSection />
        <Contact />
        <div className='contact-footer'>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default PageHomeVRme