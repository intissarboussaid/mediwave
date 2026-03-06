import React from 'react';
import Header from '../medilink/Header/Header';
import Navbar from '../medilink/navigation/Navbar';
import Footer from '../medilink/navigation/Footer';
import Contact from '../mediwave/contact/Contact';
import AboutUs from '../medilink/aboutUs/AboutUs';

function AppMedilink() {
  return (
    <>
    <Navbar />
    <Header />

    <AboutUs/>
    {/* <Tarification /> */}
    <Contact />
    <Footer />
    </>
  );
}

export default AppMedilink


