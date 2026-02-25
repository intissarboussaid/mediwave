import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";
import { useTranslation } from "react-i18next";
import './Contact.css';
import useResizeScreen from "../../../utils/useResizeScreen";
import img from '../../../assets/images/contactMediwave.jpg';
import img2 from '../../../assets/images/tarification.png';
import img3 from '../../../assets/images/doctor.jpg';
const Contact = () => {
  const windowDimensions = useResizeScreen();
  const error = {
    span: {
      color: 'red',

    }
  }
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    tel: '',
  })
  const [buttonStyle, setbuttonStyle] = useState('0%');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();
  const form = useRef();
  const toast = useRef(null);
  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Contact",
      detail: "Message Envoyer",
    });
  };
  const [left, setLeft] = useState('50%');
  const [topForm, setTopForm] = useState({
    marginTop: '-50%',
  });
  const [imgStyle, setImgStyle] = useState({
    width: '30%',
    height: '30%',
    marginLeft: '8%',
    marginTop: '-10%'
  })
  const [img2Style, setImg2Style] = useState({
    width: '12%',
    height: '12%',
    marginLeft: '-5%',
    border: ' 5px solid white',
    boxShadow: ' 0 20px 30px #505050',
    marginTop: '-15%'
  })
  const [img3Style, setImg3Style] = useState({
    width: '12%',
    height: '12%',
    marginLeft: '-25%',
    border: ' 5px solid white',
    boxShadow: ' 0 20px 30px #505050',
    marginTop: '10%'
  })
  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required"
    }
    if (!formData.mail.trim()) {
      validationErrors.mail = "Email is required"
    }
    else if (!/^\S+@\S+\.\S+$/.test(formData.mail)) {
      validationErrors.mail = "Email is not valid"
    }
    if (!formData.tel.trim()) {
      validationErrors.tel = "Phone number is required"
    }
    else if (formData.tel.length < 8) {
      validationErrors.tel = "Phone number should be 8 numbers"
    }
    emailjs
      .sendForm(
        "service_iylypok",
        "template_81nmims",
        form.current,
        "-7ZEOqRzOnAqMEt0Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      show();
    }

  };
  useEffect(() => {
    if (windowDimensions.width > 2000) {
      setbuttonStyle('0%');
      setTopForm({
        marginTop: '-30%'
      });
      setImgStyle({
        width: '30%',
        height: '30%',
        marginLeft: '8%',
        marginTop: '-10%'
      });
      setImg2Style({
        width: '12%',
        height: '12%',
        marginLeft: '-5%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '-15%'
      });
      setImg3Style({
        width: '12%',
        height: '12%',
        marginLeft: '-25%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '10%'
      });

    }
    else if (windowDimensions.width > 1300 && windowDimensions.width < 2000) {
      setbuttonStyle('70%');
      setTopForm({
        marginTop: '-10%'
      });
      setImgStyle({
        width: '40%',
        height: '60%',
        marginLeft: '8%',
        marginTop: '-9%'
      });
      setImg2Style({
        width: '12%',
        height: '12%',
        marginLeft: '-5%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%'
      });
      setImg3Style({
        width: '12%',
        height: '12%',
        marginLeft: '-25%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%'
      });
    }
    else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
      setbuttonStyle('60%');
      setTopForm({
        marginTop: '-10%'
      });
      setImgStyle({
        width: '40%',
        height: '60%',
        marginLeft: '8%',
        marginTop: '-9%'
      });
      setImg2Style({
        width: '12%',
        height: '12%',
        marginLeft: '-5%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%'
      });
      setImg3Style({
        width: '12%',
        height: '12%',
        marginLeft: '-25%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%'
      });
    }
    else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
      setbuttonStyle('50%');
      setTopForm({
        marginTop: '-10%'
      });
      setImgStyle({
        width: '40%',
        height: '60%',
        marginLeft: '8%',
        marginTop: '0%'
      });
      setImg2Style({
        width: '12%',
        height: '12%',
        marginLeft: '-5%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%'
      });
      setImg3Style({
        width: '12%',
        height: '12%',
        marginLeft: '-25%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%'
      });
    }
    else if (windowDimensions.width > 900 && windowDimensions.width < 1200) {
      setLeft('30%')
      setbuttonStyle('50%');
      setTopForm({
        marginTop: '-10%'
      });
      setImgStyle({
        width: '50%',
        height: '60%',
        marginLeft: '55%',
        marginTop: '0%',
      });
      setImg2Style({
        width: '12%',
        height: '12%',
        marginLeft: '-5%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%',
        display: 'none'
      });
      setImg3Style({
        width: '12%',
        height: '12%',
        marginLeft: '-25%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%',
        display: 'none'
      });
    }
    else if (windowDimensions.width > 800 && windowDimensions.width < 900) {
      setLeft('27%')
      setbuttonStyle('50%');
      setTopForm({
        marginTop: '-10%'
      });
      setImgStyle({
        width: '30%',
        height: '30%',
        marginLeft: '8%',
        marginTop: '3%'
      });
      setImg2Style({
        width: '12%',
        height: '12%',
        marginLeft: '-5%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '-5%'
      });
      setImg3Style({
        width: '12%',
        height: '12%',
        marginLeft: '-25%',
        border: ' 5px solid white',
        boxShadow: ' 0 20px 30px #505050',
        marginTop: '17%'
      });
    }

    else if (windowDimensions.width <= 800 && windowDimensions.width > 646) {
      setLeft('0%')
      setbuttonStyle('40%');
      setTopForm({
        marginTop: '-1%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });
    } else if (windowDimensions.width <= 646 && windowDimensions.width > 520) {
      setLeft('0%')
      setbuttonStyle('35%');
      setTopForm({
        marginTop: '-23%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });
    }
    else if (windowDimensions.width <= 520 && windowDimensions.width > 490) {
      setLeft('0%')
      setbuttonStyle('30%');
      setTopForm({
        marginTop: '-30%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });

    }
    else if (windowDimensions.width < 490 && windowDimensions.width > 384) {
      setLeft('0%')
      setbuttonStyle('30%');
      setTopForm({
        marginTop: '-37%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });
    }
    else if (windowDimensions.width < 384 && windowDimensions.width > 365) {
      setLeft('0%')
      setbuttonStyle('25%');
      setTopForm({
        marginTop: '-45%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });
    }
    else if (windowDimensions.width < 365 && windowDimensions.width > 322) {
      setLeft('0%')
      setbuttonStyle('25%');
      setTopForm({
        marginTop: '-50%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });
    }
    else if (windowDimensions.width <= 322 && windowDimensions.width < 290) {
      setLeft('0%')
      setbuttonStyle('25%');
      setTopForm({
        marginTop: '-52%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });
    }

    else if (windowDimensions.width <= 290 && windowDimensions.width > 280) {
      setLeft('0%')
      setbuttonStyle('25%');
      setTopForm({
        marginTop: '-60%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });
    }
    else if (windowDimensions.width <= 280) {
      setLeft('0%')
      setbuttonStyle('0%');
      setTopForm({
        marginTop: '-70%'
      });
      setImgStyle({
        display: 'none'
      });
      setImg2Style({
        display: 'none'
      });
      setImg3Style({
        display: 'none'
      });

    }
  }, [windowDimensions.width,]);

  return (
    <div id="contact" style={{marginTop:'-2%'}}>
      <Toast ref={toast} />

      <section id="contact-section">
        <div className="container">
          <div className="title-section">
            <h1>Contact</h1>
            <p>{t("contact_1")}</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-s-12 ">
            <div className="contact-box">
              <div className="row" >
                <div className="col-lg-6 col-md-6 col-sm-7 col-s-12 ">
                  <div className="col-md-12 col-sm-12" >
                    <div className=" col-lg-12 col-md-12 col-sm-12" >
                      <div className="media-title" style={{marginLeft:'15%'}}>
                        <h2>{t("f-m-t")}</h2>
                      </div>
                      <ul className="social-icons" style={{marginLeft:'12%', marginTop:'5%'}}>
                        <li>
                          <a className="facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a className="instagram">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="linkedin">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div style={{marginLeft:'15%'}}>
                        {/* <div class="contact-post"> */}
                        <div className="content-post">
                          <h2>{t("address")}</h2>
                          <p>
                            Rue Amouda Mali Khzema est, <br /> Sousse, Tunisia
                          </p>
                        </div>

                        {/* </div> */}
                     
                        <div className="contact-post">
                          <div className="content-post">

                            <h2>{t("nous_contacter")}</h2>
                            <p>
                              +216 28 899 806 <br />{" "}
                              <a href="mailto:contact@3dwave.tech">
                                contact@3dwave.tech
                              </a>
                            </p>
                          </div>
                        </div>
                      
                        <div className="contact-post">
                          {/* <i class="fa fa-clock-o" aria-hidden="true"></i> */}
                          <div className="content-post">
                            <h2>{t("horaire")}</h2>
                            <p>
                              {t("time")}
                              <br />
                            </p>
                          </div>
                        </div>
                        </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-7 col-s-12 form-space" style={{ marginTop: '-5%' }}  >
                  {/* <form ref={form} onSubmit={sendEmail} id="contact-form" > */}
                     <form ref={form}  id="contact-form" >
                    <div className="row text-center ">
                      <br /><br /><br />
                      <div className="col-md-12">
                        {errors.name && <span style={error.span}>{errors.name}</span>}
                        <input
                          onChange={handleChange}
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name*"
                        />
                      </div>
                      <div className="col-md-12">
                        {errors.mail && <span style={error.span}>{errors.mail}</span>}
                        <input
                          onChange={handleChange}
                          name="mail"
                          id="mail"
                          type="email"
                          placeholder="Email*"
                        />

                      </div>
                      <div className="col-md-12">
                        {errors.tel && <span style={error.span}>{errors.tel}</span>}
                        <input
                          onChange={handleChange}
                          name="tel"
                          id="tel"
                          type="tel"
                          placeholder="Phone number*"
                        />

                      </div>
                      <div className="col-md-12">
                        <input
                          onChange={handleChange}
                          name="subject"
                          id="subject"
                          type="text"
                          placeholder="Subject*"
                        />
                      </div>
                    </div>
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="*Message*"
                    ></textarea>
                    <input  style={{ marginLeft: buttonStyle }} type="submit" id="submit_contact" value="Submit" />
                    <div id="msg" className="message"></div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="map"></div>
      </section>
      {/* Saturday, Sunday
                  9:00am - 19:00pm */}

    </div>

  );
};

export default Contact;
