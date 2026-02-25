import React, { useState, useEffect } from "react";
import vid from "../../../assets/video/vid.mp4";
import useResizeScreen from "../../../utils/useResizeScreen";
import { useTranslation } from "react-i18next";
import "./VideoHeader.css";

const VideoHeader = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const windowDimensions = useResizeScreen();
  const { t } = useTranslation();
  const [titleStyle, setTitleStyle] = useState({
    marginTop: "18%",
    left: "45%",
    fontSize: "28px",
    fontWeight: "20%",
  });
  const [subTitleStyle, setSubTitleStyle] = useState({
    marginTop: "22%",
    marginLeft: "45%",
    fontSize: "18px",
    fontWeight: "10%",
  });
  const [buttonStyle, setButtonStyle] = useState({
    marginTop: "27%",
    marginLeft: "45%",
    fontSize: "26px",
    fontWeight: "600",
  });
  const [textSize, setTextSize] = useState({ fontSize: "20px" });
  useEffect(() => {
    setViewportHeight(window.innerHeight);
    if (windowDimensions.width > 2200) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "55%",
        fontSize: "30px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "30px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "30px" });
    } else if (windowDimensions.width > 2100 && windowDimensions.width < 2200) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "55%",
        fontSize: "29px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "29px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "29px" });
    } else if (windowDimensions.width > 2000 && windowDimensions.width < 2100) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "55%",
        fontSize: "28px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "28px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "28px" });
    } else if (windowDimensions.width > 1900 && windowDimensions.width < 2000) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "55%",
        fontSize: "27px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "13px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "27px" });
    } else if (windowDimensions.width > 1800 && windowDimensions.width < 1900) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "55%",
        fontSize: "26px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "26px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "26px" });
    } else if (windowDimensions.width > 1700 && windowDimensions.width < 1800) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "55%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1600 && windowDimensions.width < 1700) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "55%",
        fontSize: "24px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "24px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "24px" });
    } else if (windowDimensions.width > 1500 && windowDimensions.width <= 1600) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-25%",
        left: "55%",
        fontSize: "23px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-20%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "23px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "23px" });
    } else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
    
      setTitleStyle({
        marginTop: "-25%",
        left: "55%",
        fontSize: "22px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-20%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "22px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "22px" });
    } else if (windowDimensions.width > 1300 && windowDimensions.width < 1400) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-25%",
        left: "55%",
        fontSize: "21px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-21%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "21px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "21px" });
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-25%",
        left: "55%",
        fontSize: "19px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-21%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "19px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "19px" });
    } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-25%",
        left: "55%",
        fontSize: "18px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-21%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "18px" });
    } else if (windowDimensions.width > 1000 && windowDimensions.width < 1100) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-25%",
        left: "50%",
        fontSize: "18px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-21%",
        marginLeft: "50%",
        fontSize: "18p7",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-18%",
        marginLeft: "50%",
        fontSize: "16px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "18px" });
    } else if (windowDimensions.width > 900 && windowDimensions.width < 1000) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-35%",
        left: "45%",
        fontSize: "16px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-31%",
        marginLeft: "45%",
        fontSize: "16px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-27%",
        marginLeft: "45%",
        fontSize: "16px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "16px" });
    } else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-35%",
        left: "50%",
        fontSize: "13px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-30%",
        marginLeft: "50%",
        fontSize: "12px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-27%",
        marginLeft: "50%",
        fontSize: "13px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "13px" });
    } else if (windowDimensions.width > 500 && windowDimensions.width < 700) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-37%",
        left: "50%",
        fontSize: "9px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-30%",
        marginLeft: "50%",
        fontSize: "8px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-24%",
        marginLeft: "50%",
        fontSize: "9px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "9px" });
    } else if (windowDimensions.width > 300 && windowDimensions.width < 500) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "10%",
        fontSize: "10px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-17%",
        marginLeft: "10%",
        fontSize: "7px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-24%",
        marginLeft: "50%",
        fontSize: "7px",
        fontWeight: "600",
        display:'none'
      });
      setTextSize({ fontSize: "7px" });
    } else if (windowDimensions.width > 100 && windowDimensions.width < 300) {
      // setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "-27%",
        left: "10%",
        fontSize: "7px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-14%",
        marginLeft: "10%",
        fontSize: "7px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-14%",
        marginLeft: "50%",
        fontSize: "7px",
        fontWeight: "600",
        display:'none'
      });
      setTextSize({ fontSize: "9px" });
    }
    console.log(viewportHeight);
  }, [windowDimensions.width,]);

  return (
    <div>
      
      <section
        id="home-section"
        className="slider1"
      >
        <div className="tp-banner-container">
          <div className="tp-banner"  >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="videoStyle"
              style={{width:'100%'}} 
            >
              <source src={vid} type="video/mp4" />
            </video>
            <div className="">
              <div
              // style={{maxWidth: '60%', margin: '0 auto'}}
              >
              
                <div
                  className="tp-caption small_text titleHeader"
                  style={titleStyle}
                >
                  <div style={{marginTop:'-8%'}}> VRME: <br/></div>
                  <div style={{marginTop:'3%'}}>
                  {t("VIRTUAL_REALITY")}
                  </div>
                </div>
                <div style={{marginTop:'3%'}}>
                <div className="tp-caption small_text subTitleHeader" style={subTitleStyle} >
                  {t("Overcome")}
                </div>
                </div>
                <div
                  className="tp-caption small_text buttonHeader"
                  style={buttonStyle}
                >
                  <div className="center-button">
                    <div className="vrme">
                    <a              
                      href="#doctor-section"
                      className="vrme button-one"
                      style={textSize}
                    >
                      {t("Find")}{" "}
                    </a>
                    </div>
                  </div>
                  {/* <button type="btn">Trouver un thérapeute</button> */}
                </div>
              </div>
            </div>
            <div className="tp-bannertimer"></div>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: "red", marginTop: "10%" }}></div>
    </div>
  );
};
export default VideoHeader;
