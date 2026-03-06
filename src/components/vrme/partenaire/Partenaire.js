import React from "react";
import enis from "../../../assets/images/enis.png";
import threedwave from "../../../assets/images/3dwave.png";
import fms from "../../../assets/images/fms_logo.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


const Partenaire = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="banner-line-section">
        <div className="container">
          <div className="row">          
          <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post" >
            <div className="col-md-12" style ={{cursor:'default'}}>
              <h1>
                {t('Scenarios')}
              </h1>
            </div>
            </motion.div>
          </div>
          <div className="row" style={{ marginTop: "2%" }}>
          <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
            <div className="col-md-4 col-xs-12" >
              <img
                src={enis}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%"}}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
            <div className="col-md-4 col-xs-12"  >
              <img
                src={threedwave}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%" }}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="blog-post"
                >
            <div className="col-md-4 col-xs-12">
              <img
                src={fms}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%" }}/>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partenaire;
