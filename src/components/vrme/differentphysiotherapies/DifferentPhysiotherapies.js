
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ninjaCandy from "../../../assets/images/NinjaVR.jpg";
import KineCOu from "../../../assets/images/KneCou.jpg";
import KineSoignies from "../../../assets/images/KineSoignies.jpg";
import kineSpear from "../../../assets/images/kineSpear.jpg";
import KineSquat from "../../../assets/images/kineSquat.jpg";
import AppleOfEden from "../../../assets/images/AppleOfEden.jpg";
import Carousell from '../carouselStyle/Carousell.js';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';





function DifferentPhysiotherapies(props) {
  const { t } = useTranslation();
  const slideRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Card = ({ src, title, content, content1, content2, button, subContent1, subContent2, subContent3, subContent4,subContent5 }) => (
    <div className='card'>
      <div>{src}</div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{content1}</p>
      <p>{content2}</p>
      {/* <div>{button}</div> */}
  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="itemm">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {(
              <>
                <div>{subContent1}</div>
                <div>{subContent2}</div>
                <div>{subContent3}</div>
                <div>{subContent4}</div>
                <div>{subContent5}</div>
              </>
            )}
          </Typography>
          <button onClose={handleClose}> x</button>
        </Box>
      </Modal>
  
    </div>
  );
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { imgUrl, setImgUrl } = useState('');
  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item1");
    slideRef.current.appendChild(items[0]);
  };
  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item1");
    slideRef.current.prepend(items[items.length - 1]);
  };
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const style = {
    width:
    {
      width: '100%',
      height: '100vh',
    },
    media: {
      '@media screen and (max-width: 587px)': {
        '.all1 .item1': {
          displau: 'none'
        }
      },
    }
  }
  const data = [
    {
      id: 1,
      imgUrl: <img src={ninjaCandy} style={{width:'100%'}}/>,
      text1: t("CANDY_NINJA_TEXT1"),
      text2: "",
      text3: "  ",
      name: t("CANDY_NINJA"),
    },
    {
      id: 2,
      imgUrl: <img src={KineCOu} style={{width:'100%'}}/>,
      text1: t("Brick_Breaker_text1"),
      text2: " ",
      text3: "  ",
      name: t("Brick_Breaker"),
    },
    {
      id: 3,
      imgUrl: <img src={KineSoignies} style={{width:'100%'}}/>,
      text1:t("Shot_Put_text1"),
      text2: t("Shot_Put_text2"),
      text3: "  ",
      name: t("Shot_Put"),
    },

    {
      id: 4,
      imgUrl: <img src={kineSpear} style={{width:'100%'}}/>,
      text1: t("Spear_text1"),
      text2: t("Spear_text2"),
      text3: "  ",
      name: t("Spear "),
    },
    {
      id: 5,
      imgUrl: <img src={KineSquat} style={{width:'100%'}}/>,
      text1:t("kineSquat_text1"),
      text2:t("kineSquat_text2"), 
      text3: "  ",
      name: t("kineSquat"),
    },

    {
      id: 7,
      imgUrl:  <img src={AppleOfEden} style={{width:'100%'}}/>,
      text1:t("APPLE_EDEN_text1"),  
      text2:t("APPLE_EDEN_text2"),   
      text3: "  ",
      name: t("APPLE_EDEN"),
    },


  ];
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:'70vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ marginLeft: "5%", marginTop: "5%", marginBottom: "5%" }}
        id="physiotherapies-section">



        <section className="about-section" style={{ marginTop: "5%" }}>
          <div className="container-fluid">
            <div className="title-section">
              <motion.h1>
                {t("PHYSIOTHERAPY")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.8 }}
                style={{ textAlign: "justify", marginTop: "2%" }}
              >
                {t("PHYSIOTHERAPY_text")}
                {t("PHYSIOTHERAPY_text_2")}
              </motion.p>
            </div>



            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  contenttt'>
              <Carousell>
                {data.map((i) => (
                  <div key={i.id}>
                    <Card
                      src={i.imgUrl}
                      title={i.name}
                      content={i.text1}
                      content1={i.text2}
                      content2={i.text3}
                      // button={i.button}
                    subContent={i.img}
                    subContent2={i.name}
                    subContent3={i.text1}
                    subContent4={i.text2}
                    subContent5={i.text3}
/>
                  </div>
                ))}
              </Carousell>
            </div>
            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 all1">
              <div className="container containerSlide" style={style.width}>
                <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
                <div id="slide" ref={slideRef}>
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="item1"
                      style={{ background: `url(${item.imgUrl})`, backgroundSize: 'cover' }}
                      >
                      <div className="content">
                        <div className="name">{item.name}</div>
                         model 
                        <Button onClick={handleOpen} style={{borderRadius: 'none', backgroundColor: 'none',width:'100%', marginLeft:'-30%', fontSize:'16px',color:'white'}}
                         >     
                          {t("Our-Solution")}
                          </Button>
                       <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style1}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              {t("Our-Solution")} :
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: -2 }}>
                              
                            </Typography>
                          </Box>
                        </Modal> 
                      </div>
                    </div>
                  ))}
                </div>
                <div className="button1">
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

          </div>
        </section>
      </div>
    </>
  );
};


export default DifferentPhysiotherapies