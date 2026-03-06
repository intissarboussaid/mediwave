import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import Img from "../../../assets/images/Steriwave.jpg";
import Steriwave3 from "../../../assets/images/steriwave3.jpg";
import steriwave2 from "../../../assets/images/steriwave2.jpg";
import { motion } from "framer-motion";
import './introduction.css';

function Informations() {
    const windowDimensions = useResizeScreen();
    const { t } = useTranslation();
 


    useEffect(() => {

        if (windowDimensions.width > 1290) {
           

        }
        else if (windowDimensions.width < 657 && windowDimensions.width > 612) {
        
        }
        else if (windowDimensions.width < 612) {
           
        }
    }, [windowDimensions.width,]);


    const [fontSizeP, setFontSizeP] = useState('16px');
    const [teftText, setLeftTextt] = useState({
        marginLeft: '20%',
        width: '100%',
        textAlign: 'justify',
        fontSize:'16px'
    });
    const [rightText, setRightText] = useState({
        marginLeft: '20%',
        width: '100%',
        textAlign: 'justify',
        fontSize:'16px'
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


    useEffect(() => {
        if (windowDimensions.width >= 992) {
         
            setRightImg({
                marginLeft: '200%',
                width: '100%',
                height: '100%',
                marginTop: '-30%'
            });
           
            setLeftTextt({
                marginLeft: '-80%',
                width: '80%',
                textAlign: 'justify',
                marginTop: '-20%',
                fontSize:'16px'
            });
            setRightText({
                marginLeft: '40%',
                width: '80%',
                textAlign: 'justify',
                marginTop: '-20%',
                fontSize:'16px'
            });
      
            setleftimgStyle({
                marginTop: '-50%',
                width: '100%',
                height: '100%',
            });
         
            setFontSizeP('16px')
        }

        else if (windowDimensions.width < 992) {
            setleftimgStyle({
                marginTop: '10%',
                width: '50%',
                height: '50%',
            });
           
            setRightImg({
                width: '50%',
                height: '50%',
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
         
            setFontSizeP('16px');
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
      if (windowDimensions.width < 700 && windowDimensions.width > 500 ) {
           
            setFontSizeP('14px');
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
         if (windowDimensions.width < 500) {
         

        }
        if (windowDimensions.width < 500 && windowDimensions.width > 400 ) {
            setFontSizeP('14px');
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
            setFontSizeP('12px');
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
            setFontSizeP('10px');
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

    const slideRef = useRef(null);

    return (
        <>
            <div id='DiscoverOurSolution'>
                <section className="about-section" style={{ marginTop: "-7%" }}>
                    <div className="container">
                        <div className="title-section">
                            <h1>{t("t-Solution")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }} href=''>SteriWave</a></h1>
                        </div>
                        {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 all2 " style={{ background: 'white' }}>
                            <div className="container " >
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Img} style={img} />
                                    <img src={SubImg} style={subImg} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " ref={slideRef} style={{ marginTop: '6%' }}>
                                    <div className="container " style={carouselStyle} >
                                        {data.map((item) => (
                                            <div
                                                key={item.id}
                                                className="item2"

                                            >
                                                <div className="contanier content2">
                                                    <div className="name" style={{ color: 'rgb(52, 152, 219)', fontSize: '25px' }}>{item.name}</div>
                                                
                                                        <div className="dess" style={{ marginTop: '5%' }}>{item.text1}</div>
                                                        <div className="dess">{item.text2}</div>
                                                        <div className="dess">{item.text3}</div>
                                                        <div className="dess">{item.text4}</div>
                                                        <div className="dess">{item.text5}</div>
                                               

                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" >
                                    <button id="prev" onClick={handleClickPrev}>
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </button>
                                    <button id="next" onClick={handleClickNext}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </button>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div> */}

                        <div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '17%' }}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                                <img src={Img} style={leftimgStyle} alt='img' />
                            </div>
                            <div className='col-lg-6 col-md-7 col-ms-8 col-s-12 ' style={{ marginTop: top }}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={rightText}
                                >
                                    {/* <div style={{fontSize:fontSizeP}}> */}
                                        <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }} href=''>  STERIWAVE:</a> <br/>{t("steri-intro1")}<br />{t("steri-intro2")}
                                        {/* </div> */}
                                </motion.p>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ marginTop: '15%' }}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4' >
                                <img src={steriwave2} style={RightImg} alt='img' />
                            </div>

                            <div className='col-lg-6 col-md-6 col-ms-6 col-s-6 ' style={{ marginTop: top }}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={teftText}
                                >
                                          <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }} href=''> STERIWAVE</a> <br/> {t("steri-useText1")}<br />{t("steri-useText2")}
                                           {/* </div> */}
                                </motion.p>

                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '30%' }}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                                <img src={Steriwave3} style={leftimgStyle} alt='img' />
                            </div>
                            <div className='col-lg-6 col-md-7 col-ms-8 col-s-12 ' style={{ marginTop: top }}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    fontSize={{fontSizeP}}
                                    style={rightText}
                                >
                                    {/* <div style={{fontSize:fontSizeP}}>  */}
                                    <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }} href=''> Steriwave</a><br />{t("steri-Step1")} <br />{t("steri-Step2")} <br/> {t("steri-Step3")} <br/>{t("steri-Step4")}<br/> {t("steri-Step5")}
                                     {/* </div> */}
                                </motion.p>
                            </div>

                        </div>
                    </div>

                    </div>
                </section>

            </div></>
    )
}

export default Informations