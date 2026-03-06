import React from "react";
import { useTranslation } from "react-i18next";
import './Footer.css';
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-md-offset-3 ">
              <h1>{t("f_1")}</h1>
              <p>{t("Scenarios")}</p>
            </div>
          </div>
          <p className="copyright">Powered by 3D WAVE</p>        
        </div>
      </footer>
    </div>
  );
};

export default Footer;
