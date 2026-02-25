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
    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll(".item2");
        slideRef.current.appendChild(items[0]);
    };
    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll(".item2");
        slideRef.current.prepend(items[items.length - 1]);
    };
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [carouselStyle, setCarouselStyle] = useState({
        width: "100%",
        marginTop: "0%",
        marginRight: "20"
    });



    const [subImg, setSubImg] = useState({
        height: '30%',
        width: '30%',
        marginLeft: '85%',
        marginTop: '-20%',
        zIndex: '2',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',

    });
    const [show, setShow] = useState(false);
    const [img, setImg] = useState({
        width: '100%',
        height: '100%',


    });
    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const style = {
        width:
        {
            width: '100%',
            height: '100vh',
        },
    }
    const data = [
        {
            id: 1,
            imgUrl: "/static/media/steriIntrod.b6b0672553cce9e9b849.jpg",
            //   <img src={imgIntro} />,
            text1: t("steri-intro1"),
            text2: t("steri-intro2"),
            text3: "",
            text4: "",
            text5: "",
            name: "SteriWave:",
        },
        {
            id: 2,
            imgUrl: "/static/media/steriIntrod.b6b0672553cce9e9b849.jpg",
            text1: t("steri-useText1"),
            text2: t("steri-useText2"),
            text3: "",
            text4: "",
            text5: "",
            name: t("SteriWave-operation"),
        },
        ,
        {
            id: 3,
            imgUrl: "/static/media/steriIntrod.b6b0672553cce9e9b849.jpg",
            text1: t("steri-Step1"),
            text2: t("steri-Step2"),
            text3: t("steri-Step3"),
            text4: t("steri-Step4"),
            text5: t("steri-Step5"),
            name: t("SteriWave-operation"),
        },
    ];
    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: '70vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {

        if (windowDimensions.width > 1290) {
            setImg({
                width: '100%',
                height: '100%',
            });
            setSubImg({
                height: '30%',
                width: '30%',
                marginLeft: '85%',
                marginTop: '-20%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "0%",
                marginRight: "20"
            });

        } else if (windowDimensions.width < 1290 && windowDimensions.width > 1200) {
            setImg({
                width: '80%',
                height: '80%',
            });
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "0%",
                marginLeft: "-20%"
            });

        }
        else if (windowDimensions.width < 1200 && windowDimensions.width > 990) {
            setImg({
                width: '100%',
                height: '100%',
                marginLeft: '10%'
            });
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "-15%",
                marginLeft: "0%",
                height: '100%'
            });

        }
        else if (windowDimensions.width <= 990 && windowDimensions.width >= 768) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '80%',
                height: '80%',
                marginLeft: '10%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });

        } else if (windowDimensions.width < 768 && windowDimensions.width > 657) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '60%',
                height: '60%',
                marginLeft: '15%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });

        }
        else if (windowDimensions.width < 657 && windowDimensions.width > 612) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '60%',
                height: '60%',
                marginLeft: '15%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });
        }
        else if (windowDimensions.width < 612) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '60%',
                height: '60%',
                marginLeft: '15%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });
        }
    }, [windowDimensions.width,]);



    const [titleStyle, setTitleStyle] = useState({
        fontSize: '50px',
        textTransform: 'uppercase',
    });
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
    const [SubLeftImg, setSubLeftImg] = useState({
        width: '40%',
        height: '40%',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',
        marginLeft: '80%',
        marginTop: '-20%',
        position: 'relative'
    });
    const [leftimgStyle, setleftimgStyle] = useState({
        width: '100%',
        height: '100%',
    });
    const [SubRightImg, setSubRightImg] = useState({
        width: '40%',
        height: '40%',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',
        marginLeft: '80%',
        marginTop: '-20%',
        position: 'relative'
    });
    const [top, setTop] = useState('');
    const [RightImg, setRightImg] = useState({
        width: '100%',
        height: '100%',
    });
    const [SubkineImg, setSubkineImg] = useState({

        width: '40%',
        height: '40%',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',
        marginLeft: '80%',
        marginTop: '-20%',
        position: 'relative'
    });
    const [kineImg, setkineImg] = useState({
        width: '100%',
        height: '100%',
    });
    const [buttonStyle, setButtonStyle] = useState({
        marginTop: '-10%',
    });
    const [ButtonLeftStyle, setButtonLeftStyle] = useState({
        marginTop: '-10%',
    });

    useEffect(() => {
        if (windowDimensions.width >= 992) {
            setSubLeftImg({
                width: '40%',
                height: '40%',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                marginLeft: '80%',
                marginTop: '-30%',
                position: 'relative',
            })
            setRightImg({
                marginLeft: '200%',
                width: '100%',
                height: '100%',
                marginTop: '-30%'
            });
            setSubRightImg({
                marginLeft: '170%',
                width: '40%',
                height: '40%',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                marginTop: '-20%',
                position: 'relative'
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
            setButtonLeftStyle({
                marginLeft: '65%',
                width: '50%'
            });
            setButtonStyle({
                marginLeft: '-190%',
                width: '50%'
            });
            setleftimgStyle({
                marginTop: '-50%',
                width: '100%',
                height: '100%',
            });
            setTitleStyle({
                fontSize: '45px',
                textTransform: 'uppercase',
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
            setButtonLeftStyle({
                alignItem: 'center',
                width: '50%'
            });
            setButtonStyle({
                alignItem: 'center',
                width: '50%'
            });
            setTop('5%');
        }
         if (windowDimensions.width < 992 && windowDimensions.width > 700 ) {
            setTitleStyle({
                fontSize: '45px',
                textTransform: 'uppercase',
            });
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
            setTitleStyle({
                fontSize: '30px',
                textTransform: 'uppercase',
            });
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
            setTitleStyle({
                fontSize: '20px',
                textTransform: 'uppercase',
            });

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
            setButtonLeftStyle({
                alignItem: 'center',
                width: '100%',
            });
            setButtonStyle({
                alignItem: 'center',
                width: '100%',
            });
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
            setButtonLeftStyle({
                width: '100%',
                marginLeft: '-10%',
                marginLeft:'-20%'

            });
            setButtonStyle({
                width: '100%',
                marginLeft: '-10%',
                marginLeft:'-20%'
            });
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
                            <h1>{t("t-Solution")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>SteriWave</a></h1>
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
                                <img src={Img} style={leftimgStyle} />
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
                                        <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>  STERIWAVE:</a> <br/>{t("steri-intro1")}<br />{t("steri-intro2")}
                                        {/* </div> */}
                                </motion.p>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ marginTop: '15%' }}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4' >
                                <img src={steriwave2} style={RightImg} />
                            </div>

                            <div className='col-lg-6 col-md-6 col-ms-6 col-s-6 ' style={{ marginTop: top }}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={teftText}
                                >
                                          <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> STERIWAVE</a> <br/> {t("steri-useText1")}<br />{t("steri-useText2")}
                                           {/* </div> */}
                                </motion.p>

                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '30%' }}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                                <img src={Steriwave3} style={leftimgStyle} />
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
                                    <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> Steriwave</a><br />{t("steri-Step1")} <br />{t("steri-Step2")} <br/> {t("steri-Step3")} <br/>{t("steri-Step4")}<br/> {t("steri-Step5")}
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