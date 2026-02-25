import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import img from "../../../assets/images/doctors.jpg";
import img2 from "../../../assets/images/Steriwave.jpg";
import { motion } from "framer-motion";


function AboutUs() {
    const windowDimensions = useResizeScreen();
    const [titleStyle, setTitleStyle] = useState({
        marginTop: '-5%',
        fontSize: '20px'
    });
    const [textStyle, setTextStyle] = useState({
    //    marginLeft:'50%',
    //    marginTop: "-25%",
    });
    const [fontSizeP, setFontSizeP] = useState('16px');
    const [imgStyle, setImgStyle] = useState({
        marginLeft:'0%',
    //    marginTop:'-7%'
     });
     const [img2Style, setImg2Style] = useState( {
        width:'70%',
        height:'100%',        
        border:' 5px solid white',
        boxShadow:' 0 5px 10px #505050', 
        marginLeft:'180%', 
        marginTop:'-40%', 
        position:'relative'});
    useEffect(() => {

        if(windowDimensions.width > 2000){  
            setTitleStyle({
            marginTop: "-8%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
          marginTop:'-20%'
        });
        setFontSizeP('16px');
    } else if (windowDimensions.width > 2100 && windowDimensions.width < 2200) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        });
        setFontSizeP('16px');
    }  else if (windowDimensions.width > 2000 && windowDimensions.width < 2100) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setFontSizeP('16px');
    } else if (windowDimensions.width > 1900 && windowDimensions.width < 2000) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setFontSizeP('16px');
    }  else if (windowDimensions.width > 1800 && windowDimensions.width < 1900) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setFontSizeP('16px');
    }  else if (windowDimensions.width > 1700 && windowDimensions.width < 1800) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });setFontSizeP('16px');
    }  else if (windowDimensions.width >= 1600 && windowDimensions.width < 1700) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setFontSizeP('16px');
    }  else if (windowDimensions.width > 1500 && windowDimensions.width < 1600) {
        setTitleStyle({
            marginTop: "-8%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'43%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
          marginTop: "-15%",
        });
        setFontSizeP('16px');
    }  else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
        setTitleStyle({
            marginTop: "-8%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'43%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
          marginTop: "-15%",
        });
        setFontSizeP('16px');
    } if ((windowDimensions.width > 1300 && windowDimensions.width < 1400)) {
        setTitleStyle({
            marginTop: "-8%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'43%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
          marginTop: "-15%",
        });
        setFontSizeP('16px');
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'43%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setFontSizeP('16px');

      } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'43%',
            marginTop: "-30%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setFontSizeP('16px');
      } else if (windowDimensions.width > 1000 && windowDimensions.width < 1100) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'40%',
            marginTop: "-30%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setFontSizeP('16px');
      }
    
      else if (windowDimensions.width >= 992 && windowDimensions.width <= 999) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'50%',
            marginTop: "-35%",
            width:'50%'
        });
        setImgStyle({
          width:'300%',
          height:'100%',
        });
        setFontSizeP('16px');
      }
      else if (windowDimensions.width > 900 && windowDimensions.width <= 991) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'50%',
            marginTop: "-40%",
            width:'60%'
        });
        setImgStyle({
          width:'50%',
          height:'100%',
        });
setFontSizeP('16px');
      }
       else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginTop: "15%",
            width:'100%',
            marginLeft:'00%',
        });
        setImgStyle({
          width:'70%',
          height:'70%',
          marginLeft:'15%',
        });
        setFontSizeP('16px');
      } else if (windowDimensions.width > 500 && windowDimensions.width < 700) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '30px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "15%",
            width:'100%',
            marginLeft:'0%',
        });
        setImgStyle({
          width:'70%',
          height:'70%',
          marginLeft:'15%',
        })
        setFontSizeP('14px');


      } else if (windowDimensions.width > 300 && windowDimensions.width < 500) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '20px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "15%",
            width:'100%',
            marginLeft:'0%',
        });
        setImgStyle({
          width:'100%',
          height:'100%',
          marginLeft:'0%',
        });
        setFontSizeP('12px');


      } else if (windowDimensions.width > 100 && windowDimensions.width < 300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '22px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "15%",
            width:'100%',
            marginLeft:'0%',
        });
        setImgStyle({
          width:'100%',
          height:'100%',
          marginTop: "-10%",
          marginLeft:'0%',
        });
        setImg2Style({
            width:'25%',
            height:'25%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'70%', 
            marginTop:'-15%', 
            position:'relative'
        });
        setFontSizeP('11px');


      }










        

    }, [windowDimensions.width,])
    const { t } = useTranslation();
    return (
        <section className="about-section" >
            <div className="container">
                <div className="title-section" style={{marginTop:'-15%'}}>                
                    <h1 style={titleStyle}>{t("about")}
                    <a style={{color:'rgb(52, 152, 219)', textDecoration:'none'}}> {t("us")}</a>
                   </h1>              
                </div>
                <div className='contents'>
                    
                    <div className='col-md-2 col-ms-2'>
                        <img src={img} style={imgStyle}/>
                    </div>
                    <div  className='col-md-6 col-ms-7'style={textStyle}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8}}
                    style={{ textAlign: "justify", marginTop: "7%",fontSize:fontSizeP }}
                >
                       <a style={{color:'rgb(52, 152, 219)', textDecoration:'none', fontSize:'25px'}}> Mediwave</a>{t("about-us-text1")}<br />
                    {t("about-us-text2")}<br />
                    {t("about-us-text3")}<br />
                    {t("about-us-text4")}<br />
                    {t("about-us-text5")}<br />
                </motion.p>
                    </div>
                  
                </div>
            </div>

        </section>
    )
}

export default AboutUs