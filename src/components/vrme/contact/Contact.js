import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";
import { useTranslation } from "react-i18next";
import './Contact.css'
const Contact = () => {

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

  return (
    <div id="contact">
      <Toast ref={toast} />

      <section id="contact-section">
        <div className="container-fluid">
          <div className="title-section">
            <h1>Contact</h1>
            <p>{t("contact_1")}</p>
          </div>
          <div className="contact-box">

            <br /> <br /> <br /> <br /> <br />
            {/* <div class="col-md-3 col-md-offset-1 col-sm-4">
            <br /> <br /> <br /> <br /> <br />
              <div class="contact-post">
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                <div class="content-post">
                  <h2>{t("address")}</h2>
                  <p>
                    Rue Amouda Mali Khzema est, <br /> Sousse, Tunisia
                  </p>
                </div>
              </div>

              <div class="contact-post">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <div class="content-post">
                  <h2>{t("nous_contacter")}</h2>
                  <p>
                    +216 28 899 806 <br />{" "}
                    <a href="mailto:contact@3dwave.tech">
                      contact@3dwave.tech
                    </a>
                  </p>
                </div>
              </div>

              <div class="contact-post">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <div class="content-post">
                  <h2>{t("horaire")}</h2>
                  <p>
                    {t("time")}
                    <br />

                  </p>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-md-5 col-sm-5 form-space">
                <form ref={form} onSubmit={sendEmail} id="contact-form" >
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
                  <input onChange={handleChange} type="submit" id="submit_contact" value="Submit" />
                  <div id="msg" className="message"></div>
                </form>
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
