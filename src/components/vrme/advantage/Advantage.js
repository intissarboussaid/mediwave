import React from "react";
import { motion } from "framer-motion";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useTranslation } from "react-i18next";

const Advantage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section id="about-section">
        <div className="container-fluid">
          <div
            className="about-box"
            style={{ marginLeft: "2%", marginRight: "2%" }}
          >
            <div className="row">
              <div className="col-lg-4">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="about-post"
                  // style={{ display: "flex", alignItems: "center" }}
                >
                  <a>
                    {" "}
                    <i className="pi pi-server" style={{ fontSize: "1em" }}></i>
                  </a>
                  <div className="about-post-content">
                    <h2>
                      <a href="#">{t("Easy_to_Use")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>{t("Easy_to_Use_1")}</p>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="about-post"
                >
                  <a>
                    <i
                      className="pi pi-check-circle"
                      style={{ fontSize: "1em" }}
                    ></i>
                  </a>
                  <div className="about-post-content">
                    <h2>
                      <a href="#">{t("Friendly_Support")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("Friendly_Support_1")}
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="about-post"
                >
                  <a>
                    <LightbulbIcon style={{ fontSize: "1em" }} />
                  </a>
                  <div className="about-post-content">
                    <h2>
                      <a href="#">{t("Creative_Idea")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>{t("Easy_to_Use_1")}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantage;
