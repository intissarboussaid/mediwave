import React, { useState, useEffect } from "react";
import img from "../../../assets/images/HeaderMedilink.png";
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
  const [top, setTop] = useState("3%");
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
        marginTop: "15%",
        left: "60%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "20%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "27%",
        marginLeft: "60%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1600 && windowDimensions.width < 1700) {
      setTop("0%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "18%",
        left: "60%",
        fontSize: "50px",
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
        marginLeft: "60%",
        fontSize: "24px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "24px" });
    } else if (windowDimensions.width > 1500 && windowDimensions.width < 1600) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "14%",
        left: "60%",
        fontSize: "50px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "20%",
        marginLeft: "55%",
        fontSize: "16px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "28%",
        marginLeft: "60%",
        fontSize: "23px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "23px" });
    } else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "15%",
        left: "60%",
        fontSize: "40px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "20%",
        marginLeft: "55%",
        fontSize: "16px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "28%",
        marginLeft: "60%",
        fontSize: "22px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "22px" });
    } else if (windowDimensions.width > 1300 && windowDimensions.width < 1400) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "25%",
        left: "60%",
        fontSize: "30px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "30%",
        marginLeft: "55%",
        fontSize: "17px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "38%",
        marginLeft: "60%",
        fontSize: "21px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "21px" });
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "17%",
        left: "55%",
        fontSize: "30px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "23%",
        marginLeft: "50%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "30%",
        marginLeft: "55%",
        fontSize: "19px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "19px" });
    } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "16%",
        left: "60%",
        fontSize: "30px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "23%",
        marginLeft: "55%",
        fontSize: "15px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "30%",
        marginLeft: "60%",
        fontSize: "18px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "18px" });
    } else if (windowDimensions.width > 1000 && windowDimensions.width < 1100) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "16%",
        left: "55%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "21%",
        marginLeft: "45%",
        fontSize: "15px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "30%",
        marginLeft: "55%",
        fontSize: "16px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "18px" });
    } else if (windowDimensions.width > 900 && windowDimensions.width < 1000) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "17%",
        left: "50%",
        fontSize: "24px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "22%",
        marginLeft: "45%",
        fontSize: "15px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "31%",
        marginLeft: "50%",
        fontSize: "16px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "16px" });
    } else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "17%",
        left: "40%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "25%",
        marginLeft: "33%",
        fontSize: "14px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "40%",
        fontSize: "13px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "13px" });
    } else if (windowDimensions.width > 572 && windowDimensions.width < 700) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "25%",
        left: "30%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "40%",
        marginLeft: "5%",
        fontSize: "19px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "55%",
        marginLeft: "30%",
        fontSize: "20px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "15px" });
    } else if (windowDimensions.width > 400 && windowDimensions.width < 572) {
      setTop("2%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "28%",
        left: "30%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "40%",
        marginLeft: "8%",
        fontSize: "16px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "55%",
        marginLeft: "25%",
        fontSize: "10px",
        fontWeight: "600",

      });
      setTextSize({ fontSize: "12px" });
    }
    else if (windowDimensions.width > 300 && windowDimensions.width < 400) {
      setTop("1%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "35%",
        left: "25%",
        fontSize: "20px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "55%",
        marginLeft: "4%",
        fontSize: "13px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "100%",
        marginLeft: "20%",
        fontSize: "20px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "12px" });
    }
    else if (windowDimensions.width > 255 && windowDimensions.width < 300) {
      setTop("-1%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "30%",
        left: "25%",
        fontSize: "18px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "45%",
        marginLeft: "0%",
        fontSize: "11px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "70%",
        marginLeft: "15%",
        fontSize: "10px",
        fontWeight: "600",
      });
      setTextSize({ fontSize: "10px" });
    } else if (windowDimensions.width > 100 && windowDimensions.width < 255) {
      setTop("-1%");
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "50%",
        left: "25%",
        fontSize: "14px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "65%",
        marginLeft: "0%",
        fontSize: "9px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "70%",
        marginLeft: "15%",
        fontSize: "10px",
        fontWeight: "600",
        display: 'none'
      });
      setTextSize({ fontSize: "10px" });
    }
    console.log(height);
  }, [windowDimensions.width,]);

  return (
    <div>

      <section
        id="medilink-section"
        className="slider1"
        style={{ height: `100%` }}
      >
        <div className="tp-banner-container " style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
          <div className="tp-banner " style={{ width: "100%", height: height + "px", top: '0', left: '0', background: ' rgb(52, 152, 219,0.3)' }}>


            <div className="">
              <div style={{ zIndex: '11' }}>
                <div
                  className="tp-caption small_text titleHeader"
                  style={titleStyle}
                >
                  MEDILINK:
                </div>
                <div className="tp-caption small_text subTitleHeader" style={subTitleStyle} >
                  <div >
                    {t("Title-medilink")}
                  </div>
                  <div className="subTitle" style={{ marginTop: top }}>
                    {t("subTitle-medilink")}
                  </div>
                  <div className="subTitle2" >
                    <div style={{ marginTop: top }}>
                      {t("subTitle1-medilink")}
                      <div style={{ marginTop: '2%' }}>
                        {t("subTitle2-medilink")}
                      </div>
                    </div>

                  </div>


                </div>
                <div
                  className="tp-caption small_text buttonHeader"
                  style={buttonStyle}
                >
                  <div className="center-button">
                    <div className="vrme">
                      <a
                        href="#about-medilink"
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
