import React, { useState, useEffect } from "react";
import img from "../../../assets/images/headerSteriwave.jpg";
import useResizeScreen from "../../../utils/useResizeScreen";
import { useTranslation } from "react-i18next";
import "./Header.css";

const VideoHeader = () => {
  const [height, setHeight] = useState(window.innerHeight);
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
  const [top, setTop] = useState("1%");
  const [textSize, setTextSize] = useState({ fontSize: "20px" });
 
  useEffect(() => {

    if (windowDimensions.width > 2200) {
      setTop("0%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "18%",
        left: "55%",
        fontSize: "30px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "27%",
        marginLeft: "55%",
        fontSize: "30px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "30px" });
    } else if (windowDimensions.width > 2100 && windowDimensions.width < 2200) {
      setTop("0%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "18%",
        left: "55%",
        fontSize: "29px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "27%",
        marginLeft: "55%",
        fontSize: "29px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "29px" });
    } else if (windowDimensions.width > 2000 && windowDimensions.width < 2100) {
      setTop("0%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "18%",
        left: "55%",
        fontSize: "28px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "27%",
        marginLeft: "55%",
        fontSize: "28px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "28px" });
    } else if (windowDimensions.width > 1900 && windowDimensions.width < 2000) {
      setTop("0%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "18%",
        left: "55%",
        fontSize: "27px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "27%",
        marginLeft: "55%",
        fontSize: "13px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "27px" });
    } else if (windowDimensions.width > 1800 && windowDimensions.width < 1900) {
      setTop("0%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "18%",
        left: "55%",
        fontSize: "26px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "27%",
        marginLeft: "55%",
        fontSize: "26px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "26px" });
    } else if (windowDimensions.width > 1700 && windowDimensions.width < 1800) {
      setTop("3%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "16%",
        left: "65%",
        fontSize: "60px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "55%",
        fontSize: "25px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "68%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1600 && windowDimensions.width < 1700) {
      setTop("0%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "16%",
        left: "65%",
        fontSize: "60px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "55%",
        fontSize: "25px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "68%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1500 && windowDimensions.width < 1600) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "16%",
        left: "55%",
        fontSize: "60px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "50%",
        fontSize: "25px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "58%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "16%",
        left: "55%",
        fontSize: "60px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "50%",
        fontSize: "25px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "58%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1300 && windowDimensions.width < 1400) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "16%",
        left: "55%",
        fontSize: "60px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "50%",
        fontSize: "25px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "58%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
      setTop("5%");
      setHeight(window.innerHeight);
            setTitleStyle({
        marginTop: "16%",
        left: "55%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "45%",
        fontSize: "25px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "58%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
      setTop("5%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "40%",
        left: "50%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "45%",
        marginLeft: "45%",
        fontSize: "23px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "55%",
        marginLeft: "52%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1000 && windowDimensions.width < 1100) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "40%",
        left: "25%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "47%",
        marginLeft: "15%",
        fontSize: "23px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "60%",
        marginLeft: "27%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 900 && windowDimensions.width < 1000) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "50%",
        left: "25%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "62%",
        marginLeft: "15%",
        fontSize: "23px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "75%",
        marginLeft: "27%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "38%",
        left: "25%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "44%",
        marginLeft: "15%",
        fontSize: "23px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "58%",
        marginLeft: "27%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 550 && windowDimensions.width < 700) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "45%",
        left: "25%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "54%",
        marginLeft: "10%",
        fontSize: "19px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "70%",
        marginLeft: "27%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 433 && windowDimensions.width < 550) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "55%",
        left: "20%",
        fontSize: "40px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "70%",
        marginLeft: "3%",
        fontSize: "16px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "95%",
        marginLeft: "20%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    }
    else if (windowDimensions.width > 340 && windowDimensions.width < 433) {
      setTop("-1%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "55%",
        left: "25%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "65%",
        marginLeft: "5%",
        fontSize: "12px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "88%",
        marginLeft: "24%",
        fontSize: "10px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "12px" });
    } else if (windowDimensions.width > 274 && windowDimensions.width < 340) {
      setTop("-1%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "45%",
        left: "20%",
        fontSize: "20px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "65%",
        marginLeft: "0%",
        fontSize: "10.2px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "100%",
        marginLeft: "14%",
        fontSize: "10px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "9px" });
    }
    else if (windowDimensions.width > 100 && windowDimensions.width < 274) {
      setTop("-1%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "55%",
        left: "10%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "75%",
        marginLeft: "0%",
        fontSize: "8px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "120%",
        marginLeft: "14%",
        fontSize: "10px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "9px" });
    }
    console.log(height);
  }, [windowDimensions.width,]);

  return (
    <div>
      
      <section
        id="steriwave-section"
        className="slider1"
        style={{ height: `100%` }}
      >
        <div className="tp-banner-container ">
          <div className="tp-banner " style={{ width: "100%", height: height+"px", backgroundImage: `url(${img})`, top: '0', left: '0', backgroundSize:'cover' }}>
                

            <div className="">
              <div style={{zIndex:'11'}}>
                <div
                  className="tp-caption small_text titleHeader"
                  style={titleStyle}
                >
                  STERIWAVE: 
                </div>
                <div
                  className="tp-caption small_text subTitleHeader"
                  style={subTitleStyle}
                >
                      <div style={{marginTop:"2%"}}>
                       {t("subTitle1-steriwave")} 
                       <div style={{marginTop:'2%'}}>
                       {t("subTitle2-steriwave")} 
                       </div>
                      </div>
                      <div  style={{marginTop:'2%'}}>
                       {t("subTitle3-steriwave")}
                      </div>
                </div>
                <div
                  className="tp-caption small_text buttonHeader"
                  style={buttonStyle}
                >
                  <div className="center-button">
                    <div className="vrme">
                    <a
                      href="#DiscoverOurSolution"
                      className="button-one"
                      style={textSize}
                    >                    
                         {t("t-Solution")}
                    </a>
                    </div>
                  </div>
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
