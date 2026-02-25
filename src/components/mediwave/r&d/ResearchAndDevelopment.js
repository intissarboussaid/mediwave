import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';
import ventilateur from "../../../assets/images/Ventilateur.jpg"
import CoeurArtificiel from "../../../assets/images/CoeurArtificiel.jpg"
import syringePump from "../../../assets/images/syringe.jpg"
import useResizeScreen from "../../../utils/useResizeScreen";

function ResearchAndDevelopment() {

const windowDimensions = useResizeScreen();
const { t } = useTranslation();
const videoUrl = 'https://www.youtube.com/watch?v=uStU7HrZe0I';
const [teftText, setLeftTextt] = useState({
    marginLeft: '20%',
    width: '100%',
    textAlign: 'justify'
});
const [rightText, setRightText] = useState({
    marginLeft: '20%',
    width: '100%',
    textAlign: 'justify'
});

const [leftimgStyle, setleftimgStyle] = useState({
    width: '100%',
    height: '100%',
});
const [top, setTop] = useState('');
const [RightImg, setRightImg] = useState({
    width: '100%',
    height: '100%',
});
const [videoStyle, setVideoStyle] = useState({
    // width: '100%',
    // height: '100%',
    position: 'relative',
    paddingBottom: '56.25%',
});

useEffect(() => {
    if (windowDimensions.width >= 992) {      
        setRightImg({
            marginLeft: '150%',
            width: '100%',
            height: '100%',
            marginTop: '-30%'
        });      
        setLeftTextt({
            marginLeft: '-85%',
            width: '80%',
            textAlign: 'justify',
            marginTop: '-35%',
        });
        setRightText({
            marginLeft: '30%',
            width: '80%',
            textAlign: 'justify',
            marginTop: '-40%',
            fontSize:'16px'
        });
        setleftimgStyle({
            marginTop: '-70%',
            width: '100%',
            height: '100%',
        });
        setVideoStyle({
            marginLeft: '150%',
            // width: '100%',
            // height: '100%',
            position: 'relative',
    paddingBottom: '0%',
            marginTop: '-30%'
        })
    }

    else if (windowDimensions.width < 992) {
       
        setRightImg({
            width: '100%',
            height: '100%',
        });
       
        setLeftTextt({
            width: '100%',
            marginLeft: '0%',
        });
        setRightText({
            width: '100%',
            marginLeft: '0%',

        });
        setTop('5%');
    }
     if (windowDimensions.width < 992 && windowDimensions.width > 700 ) {

        setVideoStyle({
            position: 'relative',
    paddingBottom: '0%',
            marginTop: '0%'
        })
        setLeftTextt({
            width: '100%',
            marginLeft: '0%',
            fontSize:'16px'
        });
        setRightText({
            width: '100%',
            marginLeft: '0%',
            fontSize:'16px'
            
        });

    }
  if (windowDimensions.width <= 700 && windowDimensions.width > 500 ) {

    setVideoStyle({
        // width: '50px',
        // height: '100%',
        position: 'relative',
        paddingBottom: '0%',
        width:'20%',
    })
        setLeftTextt({
            width: '100%',
            marginLeft: '0%',
            fontSize:'14px'
        });
        setRightText({
            width: '100%',
            marginLeft: '0%',
            fontSize:'14px'
            
        });
    }

    if (windowDimensions.width < 500 && windowDimensions.width > 400 ) {
        
        setLeftTextt({
            width: '100%',
            marginLeft: '0%',
            fontSize:'14px'
        });
        setRightText({
            width: '100%',
            marginLeft: '0%',
            fontSize:'14px'
            
        });

    }
    // Presponsive Button
    else if (windowDimensions.width < 400 && windowDimensions.width > 225) {
        
        setTop('5%');
        setLeftTextt({
            width: '100%',
            marginLeft: '0%',
            fontSize:'12px'
        });
        setRightText({
            width: '100%',
            marginLeft: '0%',
            fontSize:'12px'
            
        });

    }
    else if (windowDimensions.width < 225) {
        
        setTop('5%');
        setLeftTextt({
            width: '100%',
            marginLeft: '0%',
            fontSize:'10px'
        });
        setRightText({
            width: '100%',
            marginLeft: '0%',
            fontSize:'10px'
            
        });

    }
}, [windowDimensions.width,]);


return (
    <div id='ResearchAndDevelopment' >
        <section className="about-section" style={{ marginTop: "-8%" }}>
            <div className="container">
            <div className="title-section">
             <h1 >R <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>&</a>  D</h1>
          </div>
                <div>
                    <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '17%' }}>
                        <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                            <img src={ventilateur} style={leftimgStyle} />
                        </div>
                        <div className='col-lg-5 col-md-5 col-ms-8 col-s-12 ' style={{ marginTop: top }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={rightText}
                            >
                                {/* <p style={{fontSize:fontSizeP}}> */}
                                    <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>  {t("Syringe_Pump")}</a> ,{t("t_Syringe_Pump")}
                                    {/* </p> */}
                            </motion.p>

                           
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{marginTop:'15%'}}>
                        <div className='col-lg-4 col-md-4 col-ms-4 col-s-4' >
                        <img  src={syringePump}  style={RightImg} />
                        </div>

                        <div className='col-lg-5 col-md-5 col-ms-6 col-s-6 ' style={{ marginTop: top }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={teftText}
                            >
                                {/* <p style={{fontSize:fontSizeP}}>   */}
                                <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> {t("Heart_Artificial")}</a>,{t("t_Heart_Artificial")}
                                {/* </p> */}
                            </motion.p>
                            
                        </div>

                    </div>
                    <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '20%' }}>
                        <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                            <img src={CoeurArtificiel}  style={leftimgStyle} />
                        </div>
                        <div className='col-lg-5 col-md-5 col-ms-8 col-s-12 ' style={{ marginTop: top }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={rightText}
                            >
                                {/* <p style={{fontSize:fontSizeP}} >  */}
                                <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> {t("Ventilator")} </a>, {t("t_Ventilator")} 
                                {/* </p> */}
                            </motion.p>                            
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{marginTop:'15%'}}>
                        <div className='col-lg-4 col-md-4 col-ms-4 col-s-4' >
                        <ReactPlayer url={videoUrl}  style={videoStyle} />
                        </div>

                        <div className='col-lg-5 col-md-5 col-ms-6 col-s-6 ' style={{ marginTop: top }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={teftText}
                            >
                                {/* <p style={{fontSize:fontSizeP}}>   */}
                                <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> Diagnose me</a> <br/>{t( "text1-diagnoseMe")} {t( "text2-diagnoseMe")}
                                {/* </p> */}
                            </motion.p>
                            
                        </div>

                    </div>
                </div>
            </div>

        </section>
    </div>
)
}


export default ResearchAndDevelopment