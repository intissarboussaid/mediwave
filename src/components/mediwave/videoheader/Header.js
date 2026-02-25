import React, { useState, useEffect } from "react";
import img1 from "../../../assets/images/hedearMediwave.png";
import useResizeScreen from "../../../utils/useResizeScreen";
import img2 from "../../../assets/images/mediHeader2.png";
import { useTranslation } from "react-i18next";
import "./Header.css";

const VideoHeader = () => {

  const [height, setHeight] = useState(window.innerHeight);
  const [topT2, setTopT2] =useState('3%')
  const [styleFrontImg1, setStyleFrontImg1] = useState({
    height: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: '1'
  });
  const [styleFrontImg2, setStyleFrontImg2] = useState({
    marginLeft: '',
    marginTop: '',
    height: '100vh',
    width: '100%'

  });
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

  useEffect(() => {

    if (windowDimensions.width > 2200) {
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
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "30px" });
    } else if (windowDimensions.width > 2100 && windowDimensions.width < 2200) {
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
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "29px" });
    } else if (windowDimensions.width > 2000 && windowDimensions.width < 2100) {
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
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "28px" });
    } else if (windowDimensions.width > 1900 && windowDimensions.width < 2000) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "30%",
        left: "55%",
        fontSize: "27px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "35%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "40%",
        marginLeft: "55%",
        fontSize: "13px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "27px" });
    } else if (windowDimensions.width > 1800 && windowDimensions.width < 1900) {
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
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "26px" });
    } else if (windowDimensions.width > 1700 && windowDimensions.width < 1800) {
      setHeight(window.innerHeight);
      setTopT2('4%')
      setTitleStyle({
        marginTop: "30%",
        left: "55%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "35%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "40%",
        marginLeft: "55%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1600 && windowDimensions.width < 1700) {
     setHeight(window.innerHeight);
      setTopT2('4%')
      setTitleStyle({
        marginTop: "30%",
        left: "55%",
        fontSize: "25px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "35%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "40%",
        marginLeft: "55%",
        fontSize: "25px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "25px" });
    } else if (windowDimensions.width > 1500 && windowDimensions.width <= 1600) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "30%",
        left: "55%",
        fontSize: "23px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "35%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "40%",
        marginLeft: "55%",
        fontSize: "23px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "23px" });
    } else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "28%",
        left: "55%",
        fontSize: "22px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "32%",
        marginLeft: "55%",
        fontSize: "18px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "43%",
        marginLeft: "55%",
        fontSize: "22px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "22px" });
    } else if (windowDimensions.width > 1300 && windowDimensions.width <= 1400) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "30%",
        left: "55%",
        fontSize: "19px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "35%",
        marginLeft: "55%",
        fontSize: "15px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "40%",
        marginLeft: "55%",
        fontSize: "20px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '80%',
        width: '32%',
        top: '20%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '80%',
        width: '33%',
        top: '20%',
        left: '20%',
        position: 'relative'
      });
      setTextSize({ fontSize: "21px" });
    } else if (windowDimensions.width > 1200 && windowDimensions.width <= 1300) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "35%",
        left: "50%",
        fontSize: "19px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "40%",
        marginLeft: "50%",
        fontSize: "17px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "45%",
        marginLeft: "50%",
        fontSize: "17px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '70%',
        width: '29%',
        top: '30%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '70%',
        width: '30%',
        top: '30%',
        left: '18%',
        position: 'relative'
      })
      setTextSize({ fontSize: "19px" });
    } else if (windowDimensions.width > 1100 && windowDimensions.width <= 1200) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "35%",
        left: "50%",
        fontSize: "17px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "41%",
        marginLeft: "50%",
        fontSize: "15px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "48%",
        marginLeft: "50%",
        fontSize: "16px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '75%',
        width: '32%',
        top: '25%',
        position: 'absolute',
        zIndex: '1'
      });
      setStyleFrontImg2({
        height: '75%',
        width: '34%',
        top: '25%',
        left: '18%',
        position: 'relative'
      })
      setTextSize({ fontSize: "18px" });
    } else if (windowDimensions.width > 1000 && windowDimensions.width <= 1100) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "35%",
        left: "50%",
        fontSize: "17px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "40%",
        marginLeft: "50%",
        fontSize: "15px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "45%",
        marginLeft: "50%",
        fontSize: "16px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '65%',
        width: '30%',
        top: '35%',
        position: 'absolute',
        zIndex: '1',

      });
      setStyleFrontImg2({
        height: '65%',
        width: '35%',
        top: '35%',
        left: '15%',
        position: 'relative'
      })
      setTextSize({ fontSize: "18px" });
    } else if (windowDimensions.width > 900 && windowDimensions.width <= 1000) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "30%",
        left: "45%",
        fontSize: "16px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "35%",
        marginLeft: "45%",
        fontSize: "14px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "40%",
        marginLeft: "45%",
        fontSize: "16px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '55%',
        width: '25%',
        top: '45%',
        position: 'absolute'
      });
      setStyleFrontImg2({
        height: '55%',
        width: '30%',
        top: '45%',
        left: '15%',
        position: 'relative'

      });
      setTextSize({ fontSize: "16px" });
    } else if (windowDimensions.width > 700 && windowDimensions.width <= 900) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "30%",
        left: "45%",
        fontSize: "13px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "35%",
        marginLeft: "45%",
        fontSize: "12px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "40%",
        marginLeft: "45%",
        fontSize: "13px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '60%',
        width: '40%',
        top: '40%',
        position: 'absolute',
        display:'none'
      });
      setStyleFrontImg2({
        height: '60%',
        width: '55%',
        top: '40%',
        left: '-10%',
        position: 'relative'

      });
      setTextSize({ fontSize: "13px" });
    } else if (windowDimensions.width >= 600 && windowDimensions.width <= 700) {
      setHeight(window.innerHeight);
      setTitleStyle({
        marginTop: "25%",
        left: "30%",
        fontSize: "13px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "33%",
        marginLeft: "30%",
        fontSize: "12px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "35%",
        marginLeft: "32%",
        fontSize: "11px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '60%',
        width: '30%',
        top: '31%',
        position: 'absolute',
        zIndex: '11',
        display:'none'
      });
      setStyleFrontImg2({
        height: '60%',
        width: '30%',
        top: '20%',
        left: '150000000000000000000000000000000000000%',
        position: 'relative',
    

      });
      setTextSize({ fontSize: "9px" });
    } else if (windowDimensions.width > 500 && windowDimensions.width < 600) {
      setHeight(window.innerHeight);

      setTitleStyle({
        marginTop: "-15%",
        left: "15%",
        fontSize: "13px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-5%",
        marginLeft: "15%",
        fontSize: "11px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "0%",
        marginLeft: "30%",
        fontSize: "7px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '69%',
        width: '25%',
        top: '31%',
        left: '10000000000000000000000000000000%',
        position: 'absolute',
        zIndex: '11',
      });
      setStyleFrontImg2({
        height: '80%',
        width: '30%',
        top: '20%',
        left: '10000000000000000000000000000000%',
        position: 'relative',

      });
      setTextSize({ fontSize: "7px" });
    } 
    else if (windowDimensions.width >= 450 && windowDimensions.width <= 500) {
      setHeight(window.innerHeight);

      setTitleStyle({
        marginTop: "-35%",
        left: "6%",
        fontSize: "13px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-20%",
        marginLeft: "6%",
        fontSize: "10px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-15%",
        marginLeft: "8%",
        fontSize: "7px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '69%',
        width: '25%',
        top: '31%',
        left: '10000000000000000000000000000000%',
        position: 'absolute',
        zIndex: '11',
      });
      setStyleFrontImg2({
        height: '80%',
        width: '30%',
        top: '20%',
        left: '10000000000000000000000000000000%',
        position: 'relative',

      });
      setTextSize({ fontSize: "7px" });
    }
    
    else if (windowDimensions.width >= 350 && windowDimensions.width < 450) {
      setHeight(window.innerHeight);

      setTitleStyle({
        marginTop: "-35%",
        left: "6%",
        fontSize: "11px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-20%",
        marginLeft: "6%",
        fontSize: "9px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-7%",
        marginLeft: "8%",
        fontSize: "7px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '69%',
        width: '25%',
        top: '31%',
        left: '10000000000000000000000000000000%',
        position: 'absolute',
        zIndex: '11',
      });
      setStyleFrontImg2({
        height: '80%',
        width: '30%',
        top: '20%',
        left: '10000000000000000000000000000000%',
        position: 'relative',

      });
      setTextSize({ fontSize: "7px" });
    }
    else if (windowDimensions.width >= 290 && windowDimensions.width < 350) {
      setHeight(window.innerHeight);

      setTitleStyle({
        marginTop: "-65%",
        left: "0%",
        fontSize: "10px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-50%",
        marginLeft: "0%",
        fontSize: "8px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-37%",
        marginLeft: "8%",
        fontSize: "7px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '69%',
        width: '25%',
        top: '31%',
        left: '10000000000000000000000000000000%',
        position: 'absolute',
        zIndex: '11',
      });
      setStyleFrontImg2({
        height: '80%',
        width: '30%',
        top: '20%',
        left: '10000000000000000000000000000000%',
        position: 'relative',

      });
      setTextSize({ fontSize: "7px" });
    }
    else if (windowDimensions.width  < 290 && windowDimensions.width > 236) {
      setHeight(window.innerHeight);

      setTitleStyle({
        marginTop: "-75%",
        left: "0%",
        fontSize: "8.2px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-60%",
        marginLeft: "0%",
        fontSize: "6.7px",
        fontWeight: "10%",
      });
      setButtonStyle({
        marginTop: "-47%",
        marginLeft: "8.2%",
        fontSize: "7px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '69%',
        width: '25%',
        top: '31%',
        left: '10000000000000000000000000000000%',
        position: 'absolute',
        zIndex: '11',
      });
      setStyleFrontImg2({
        height: '80%',
        width: '30%',
        top: '20%',
        left: '10000000000000000000000000000000%',
        position: 'relative',

      });
      setTextSize({ fontSize: "7px" });
    }
    else if (windowDimensions.width <236) {
      setHeight(window.innerHeight);

      setTitleStyle({
        marginTop: "-150%",
        left: "0%",
        fontSize: "6px",
        fontWeight: "18%",
      });
      setSubTitleStyle({
        marginTop: "-140%",
        marginLeft: "0%",
        fontSize: "6px",
        fontWeight: "10%",
        width:'100%'
      });
      setButtonStyle({
        marginTop: "-130%",
        marginLeft: "0%",
        fontSize: "8px",
        fontWeight: "600",
      });
      setStyleFrontImg1({
        height: '69%',
        width: '25%',
        top: '31%',
        left: '10000000000000000000000000000000%',
        position: 'absolute',
        zIndex: '11',
      });
      setStyleFrontImg2({
        height: '80%',
        width: '30%',
        top: '20%',
        left: '10000000000000000000000000000000%',
        position: 'relative',

      });
      setTextSize({ fontSize: "7px" });
    }
    // else if (windowDimensions.width < 100) {
    //   setTopT2('2%')
    //    setHeight(window.innerHeight);
    //    setTitleStyle({
    //      marginTop: "1%",
    //      left: "3%",
    //      fontSize: "9px",
    //      fontWeight: "18%",
    //    });
    //    setSubTitleStyle({
    //      marginTop: "15%",
    //      marginLeft: "3%",
    //      fontSize: "9px",
    //      fontWeight: "10%",
    //    });
    //    setButtonStyle({
    //      marginTop: "24%",
    //    });
    //    setStyleFrontImg1({
    //      height: '69%',
    //      width: '25%',
    //      top: '31%',
    //      left: '10000000000000000000000000000000%',
    //      position: 'absolute',
    //      zIndex: '11',
    //    });
    //    setStyleFrontImg2({
    //      height: '80%',
    //      width: '30%',
    //      top: '20%',
    //      left: '10000000000000000000000000000000%',
    //      position: 'relative',
 
    //    });
    //    setTextSize({ fontSize: "9px" });
    //  }
    console.log(height);
  }, [windowDimensions.width,]);
  const [textSize, setTextSize] = useState({ fontSize: "26px" });
  return (
    <div>
      <section
        id="homeMediwave-section"
        className="slider1"
        style={{ height: `${height}px` }}
      >
        <div className="tp-banner-container content " >
          <div >
            <div className="tp-banner" style={{ width: "100%", height: height+"px", background: ' rgb(52, 152, 219,0.5)', top: '0', left: '0' }} >
              <img src={img1} className="img" style={styleFrontImg1} />
              <img src={img2} className="img" style={styleFrontImg2} />
              <div >
                <div  style={{ marginTop: '-50%',   textAlign: 'justify' }}>
                  <div className="tp-caption small_text titleHeader" style={titleStyle} >
                    {t("t-MEDIWAVE")}
                    <br />
                    <div style={{marginTop:topT2}}>
                      {t("t1-MEDIWAVE")}
                    </div>
                  </div>
                  <div className="tp-caption small_text subTitleHeader" style={subTitleStyle} >
                    <br />{t("ST1-MEDIWAVE")}
                    <div style={{marginTop:'2%'}}>
                    {t("ST2-MEDIWAVE")}
                    </div>
                  </div>
                  <div className="tp-caption small_text buttonHeader" style={buttonStyle} >
                    <div className="center-button-mediwave">
                      <br /><br />
                      <a href="#DiscoverOurSolution" className="button-one" style={textSize} >
                      {t("t-Solution")}{t("t-Our")}
                      </a>
                    </div>
                    {/* <button type="btn">Trouver un thérapeute</button> */}
                  </div>
                </div>
              </div>
              {/* <div className="tp-bannertimer"></div> */}
            </div>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: "red", marginTop: "10%" }}></div>
    </div>
  );
};
export default VideoHeader;
