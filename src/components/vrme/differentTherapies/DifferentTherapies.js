
import React, { useRef, useEffect, useState } from "react";
import Carousell from '../carouselStyle/Carousell.js';
import "../differentTherapies/DifferentTherapies.css";
import claustrophobie from "../../../assets/images/claustrophobie.jpg";
import assenseur from "../../../assets/images/assenseur.jpg";
import acrophobiee from '../../../assets/images/acrophobie1.jpg';
import acrophobieSolution from "../../../assets/images/achroSolution.png";
import arachrophobie from "../../../assets/images/aracrophobie1.jpg";
import arachrophobieSolution from "../../../assets/images/arach.jpg";
import agora from "../../../assets/images/agoraphobie.jpg";
import agoraSol from "../../../assets/images/agora.jpg";
import social from "../../../assets/images/social.jpg";
import glossophobie from "../../../assets/images/glossophobie.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
const DifferentTherapies = (props) => {
  const CARDS = 10;
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '80%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '1px 2px #888888',
    },
  }
  const [imgSol, setImgSol] = useState();
  const [title, setTitle] = useState();
  const [textSol, setTextSol] = useState();
  const [textSol1, setTextSol1] = useState();
  const [textSol2, setTextSol2] = useState();
  const [textSol3, setTextSol3] = useState();
  const [widthStyle, setWidthStyle] = useState('100%');
  const [left, setLeft] = useState();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal1() {
    setIsOpen(true);
  }

  function closeModal1() {
    setIsOpen(false);
  }
  const Card = ({ src, title, content, content1, content2, button }) => (
    <div className='card'>
      <div>{src}</div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{content1}</p>
      <p>{content2}</p>
      <p style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: left,
        width: widthStyle
      }}>{button}</p>
    </div>
  );
  const slideRef = useRef(null);
  const windowDimensions = useResizeScreen();
  const [imageStyle1, setImageStyle1] = useState({
    width: '105%',
    height: '40%',
    marginTop: '0%',
    marginLeft: '-2%'
  });
  const [imgSolstyle, setImgSolstyle] = useState({
    width: '50%',
    height: '40%',
  });
  const data = [
    {
      id: 1,
      imgUrl: claustrophobie,
      text1: t("CLAUSTROPHOBIA_1"),
      text2: "",
      text3: t("CLAUSTROPHOBIA_2"),
      name: t("CLAUSTROPHOBIA"),
      button: <button
        type="button"
        className="btn btn-modal"
        data-toggle="modal"
        data-target="#exampleModalCenterDifferenttherapeute"
        style={{
          marginTop: "2%",
          alignItems: "end",
          width: '40%',
          right: '30%'
        }}
        onClick={() => {
          setImgSol(<img src={assenseur} style={{ width: '70%', marginLeft: '15%' }} />);
          setTitle(t("soll"));
          setTextSol("");
          setTextSol1(t("APPLICATIONS_1"));
          setTextSol2("");
          setTextSol3("");
          console.log('solutions :', imgSol)
        }

        }
      >
        {t("Learn")}
      </button>,
      imgSolution: assenseur,
      subText1: t("APPLICATIONS_1"),
      subText2: " ",
      subText3: "  ",
      SubName: t("soll"),
    },
    {
      id: 2,
      imgUrl: acrophobiee,
      text1: t("ACROPHOBIA_1"),
      // ,
      text2: t("ACROPHOBIA_2"),
      //  
      text3: "  ",
      name: t("AGORAPHOBIA"),
      imgSolution: acrophobieSolution,
      subText1: t("APPLICATIONS_2"),
      subText2: "",
      subText3: "  ",
      subName: t("soll"),
      button: <button
        type="button"
        className="btn btn-modal"
        data-toggle="modal"
        data-target="#exampleModalCenterDifferenttherapeute"
        style={{
          marginTop: "2%",
          alignItems: "end",
          width: '40%',
          right: '30%'
        }}
        onClick={() => {
          setImgSol(<img src={acrophobieSolution} style={{ width: '70%', marginLeft: '15%' }} /> );
          setTextSol("");
          setTextSol1(t("APPLICATIONS_2"));
          setTextSol2("");
          setTextSol3("");
          setTitle(t("soll"));
          console.log('solutions :', imgSol)
        }

        }
      >
        {t("Learn")}
      </button>,

    },
    {
      id: 3,
      imgUrl: arachrophobie,
      text1: t("ARACHNOPHOBIA_1"),
      // ,
      text2: t("ARACHNOPHOBIA_2"),
      // ,
      text3: "  ",
      name: t("ARACHNOPHOBIA"),
      imgSolution: arachrophobieSolution,
      subText1: t("APPLICATIONS_3"),
      subText2: "  ",
      subText3: "  ",
      subName: t("soll"),
      button: <button
        type="button"
        className="btn btn-modal"
        data-toggle="modal"
        data-target="#exampleModalCenterDifferenttherapeute"
        style={{
          marginTop: "2%",
          alignItems: "end",
          width: '40%',
          right: '30%'
        }}
        onClick={() => {
          setImgSol(<img src={arachrophobieSolution} style={{ width: '70%', marginLeft: '15%' }} /> );
          setTextSol("");
          setTextSol1(t("APPLICATIONS_3"));
          setTextSol2("")
          setTextSol3("")
          setTitle(t("soll"));
          console.log('solutions :', imgSol)
        }
        }
      >
        {t("Learn")}
      </button>,
    },
    {
      id: 4,
      imgUrl: agora,
      text1: t("AGORAPHOBIA_1"),
      text2: t("AGORAPHOBIA_2"),
      text3: "  ",
      name: t("AGORAPHOBIA"),
      imgSolution: agoraSol,
      subText1: t("APPLICATIONS_4_1"),
      subText2: t("APPLICATIONS_4_2"),
      subText3: "  ",
      subName: t("soll"),
      button: <button
        type="button"
        className="btn btn-modal"
        data-toggle="modal"
        data-target="#exampleModalCenterDifferenttherapeute"
        style={{
          marginTop: "2%",
          alignItems: "end",
          width: '40%',
          right: '30%'
        }}
        onClick={() => {
          setImgSol(<img src={agoraSol} style={{ width: '70%', marginLeft: '15%' }} />);

          setTextSol(t("APPLICATIONS_4_1"));
          setTextSol1("");
          setTextSol2(t("APPLICATIONS_4_2"));
          setTextSol3("");
          setTitle(t("soll"));
          console.log('solutions :', imgSol)
        }

        }
      >
        {t("Learn")}
      </button>,
    },

    {
      id: 5,
      imgUrl: social,
      text1: t("SOCIAL_PHOBIA_1"),
      text2: t("SOCIAL_PHOBIA_2"),
      text3: "  ",
      name: t("SOCIAL_PHOBIA"),
      imgSolution: glossophobie,
      subText1: t('SOCIAL_PHOBIA_Soll_1'),
      subText2: t('SOCIAL_PHOBIA_Soll_2'),
      subText3: t('SOCIAL_PHOBIA_Soll_3'),

      button: <button
        type="button"
        className="btn btn-modal"
        data-toggle="modal"
        data-target="#exampleModalCenterDifferenttherapeute"
        style={{
          marginTop: "2%",
          alignItems: "end",
          width: '40%',
          right: '30%'
        }}
        onClick={() => {
          setImgSol( <img src={glossophobie} style={{ width: '70%', marginLeft: '15%' }} /> );
          setTitle(t("soll"));
          setTextSol(t('SOCIAL_PHOBIA_Soll'));
          setTextSol1(t('SOCIAL_PHOBIA_Soll_1'));
          setTextSol2(t('SOCIAL_PHOBIA_Soll_2'));
          setTextSol3(t('SOCIAL_PHOBIA_Soll_3'));
          console.log('solutions :', imgSol)
        }
        }
      >
        {t("Learn")}
      </button>,

    },
  ];


  useEffect(() => {

    if (windowDimensions.width > 450) {
      setWidthStyle('100%');
      setLeft();
    }
    if (windowDimensions.width <= 450 && windowDimensions.width < 410) {
      setWidthStyle('300px');
      setLeft('0px');
    }
    if (windowDimensions.width <= 410 && windowDimensions.width > 400) {
      setWidthStyle('300px');
      setLeft('-25px');
    }
    if (windowDimensions.width <= 400 && windowDimensions.width > 350) {
      setWidthStyle('300px');
      setLeft('-40px');
    }
    if (windowDimensions.width <= 350) {
      setWidthStyle('300px');
      setLeft('-90px');
    }
  }, [windowDimensions.width,]);

  return (
    <>
      <div
        className="container-fluid"
        style={{ marginLeft: "5%", marginTop: "-10%", marginBottom: "5%" }}
        id="therapies-section" >
        <section className="about-section" >
          <div className="container-fluid">
            <div className="title-section">
              <motion.h1>
                {t("THERAPY")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.8 }}
                style={{ textAlign: "justify", marginTop: "2%" }}
              >
                {t("THERAPY_text")}
                {t("THERAPY_text_2")}
              </motion.p>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  contenttt' >
              <Carousell>
                {data.map((i) => (
                  <div key={i.id}>
                    <Card
                      src={<img src={i.imgUrl} style={imageStyle1} />}
                      title={i.name}
                      content={i.text1}
                      content1={i.text2}
                      content2={i.text3}
                      button={i.button}
                    />,
                  </div>
                ))}
              </Carousell>
            </div>
          </div>
        </section>
        <div className="modal fade" id="exampleModalCenterDifferenttherapeute" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                 <h2 style={{ textAlign: 'center' }}> {title}</h2>
               <h5 className="modal-title" id="exampleModalLongTitle" >
                  {imgSol}
                </h5>
              </div>
              <section className="contact-section">
                <div className="contact-box">
                  <div className="row" style={{ marginLeft: "2%", marginRight: "2%" }}>

                    {/* <div className="col-md-12 col-sm-8" style={{ marginTop: '-12%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
                      <a style={{ fontSize: '16px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> {textSol}</a>
                   
                    <div className="col-md-12 col-sm-8" style={{ marginTop: '-10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {textSol1}
                      {textSol2}
                      {textSol3}
                      <div style={{ marginTop: '20%' }}>  </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DifferentTherapies;



