import React from "react";
import { useTranslation } from "react-i18next";
import './Footer.css';
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">

      <footer className="footerMediwave" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-s-12">
              <div className="col-lg-4 col-md-4 col-s-12">
                <ul className="social-icons" style={{ marginLeft: '12%', marginTop: '12%' }}>
                  <li>
                    <a className="facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="linkedin">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-4 col-md-4 col-s-12 ourServices">
                <h2 className="title">{t("t-Our")}</h2>
                <div className="nosService">
                  <div className="first projets" >
                    <ul><a href="medilink">MediLink</a></ul>
                    <ul><a href="steriwave">Steriwave</a></ul>
                    <ul><a href="vrme">VRme</a></ul>
                  </div>
                  <div className="second projets">
                    <ul><a href="#ResearchAndDevelopment"> Heart Artificial</a></ul>
                    <ul> <a href="#ResearchAndDevelopment"> Ventilateur</a></ul>
                    <ul><a href="#ResearchAndDevelopment"> diagnose me</a></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright">Copyright © 2023 3dwave</p>
        
        </div>



      </footer>





    </div>
  );
};

export default Footer;
