import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import img from "../../../assets/images/headerSteriwave.jpg";
const Footer = () => {
  const { t } = useTranslation();
  const [top, setTop] =useState('5%');
  const windowDimensions = useResizeScreen();
  const [styleP, setStyleP] = useState({  transform: 'translate(20%, 100%)' });
  useEffect(() => {
if (windowDimensions.width > 1200 && windowDimensions.width <= 1300) {
  setStyleP({  transform: 'translate(20%, 20%)' }) 
    } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
      setStyleP({  transform: 'translate(20%, 20%)' }) 
    } else if (windowDimensions.width > 991 && windowDimensions.width < 1100) {
      setStyleP({  transform: 'translate(20%, 20%)' }) 
    } else if (windowDimensions.width > 900 && windowDimensions.width <= 991) {
      setStyleP({  transform: 'translate(35%, -20%)' }) 
    } else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
      setStyleP({  transform: 'translate(35%, -20%)' }) 
    } else if (windowDimensions.width >= 500 && windowDimensions.width < 700) {
      setStyleP({  transform: 'translate(35%, -20%)' }) 
    } else if (windowDimensions.width > 300 && windowDimensions.width < 500) {
      setStyleP({  transform: 'translate(35%, -20%)' })
    } 
    else if (windowDimensions.width > 200 && windowDimensions.width <= 300) {
      setStyleP({  transform: 'translate(35%, -15%)' })
    }else if (windowDimensions.width > 100 && windowDimensions.width < 300) {
  
    }
   
  }, [windowDimensions.width,]);

  return (
    <div id="footer" style={{  backgroundImage: `url(${img})`, backgroundSize:'cover'}}>
      
      <footer className="footerMediwave">
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
              <div className=" col-lg-5 col-md-7  col-xs-8 col-s-8">
              <p style={styleP} >{t("Scenarios")}</p>
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
