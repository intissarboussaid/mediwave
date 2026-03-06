import React, { useRef, useState } from "react";
import tarification from "../../../assets/images/tarification.png";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Tarification = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [formValue, setFormValue] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
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
  };
  return (
    <div id="tarification-section">
      {/* Tarification */}
      <section id="services-section">
        <div
          className="container"
          style={{ paddingRight: "0px", paddingLeft: "0px" }}
        >
           <div className="title-section">

                    <h1 > {t('PRICING1')}
                    <a style={{color:'rgb(52, 152, 219)', textDecoration:'none'}}>  {t('PRICING2')}</a>
                   </h1>                   </div>
          <div className="services-box">
            <div className="row">
              <div className="col-lg-7">
                <img
                  src={tarification}
                  alt=""
                  style={{ width: "70%", height: "50%" }}
                />
              </div>
              <div className="col-md-5">
                <div className="inner-services-box">
                 
                  <div className="services-items">
                    <div className="row">
                      <div className="col-sm-12">
                        {/* <div className="services-post">
                          <span>01.</span>
                          <h2>
                            5<br /> {t('Applications')}
                          </h2>
                        </div> */}
                      </div>
                      <div className="col-sm-12">
                        {/* <div className="services-post">
                          <span>02.</span>
                          <h2>
                            1 <br />
                            {t('VR_headsets')}
                          </h2>
                        </div> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        {/* <div className="services-post">
                          <span>03.</span>
                          <h2>
                            2 <br />
                            {t('Days_of_training')}
                          </h2>
                        </div> */}
                      </div>
                      <div className="col-sm-12">
                        {/* <div className="services-post">
                          <span>04.</span>
                          <h2>
                            3 <br />
                            {t('technical_support')}
                          </h2>
                        </div> */}
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          style={{
                            marginTop: "2%",
                            alignItems: "end",
                            width:'40%',
                            right:'30%'
                          }}
                        >
                          {t('Buy_Now')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
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
              <h5 className="modal-title" id="exampleModalLongTitle">
                {t('search_7')}
              </h5>
              <p>{t('search_8')}</p>
            </div>
            <section className="contact-section">
              <div className="contact-box">
                <div className="row" style={{marginLeft:"2%",marginRight:"2%"}}>
                  <div className="col-md-12 col-sm-8">
                    <form ref={form} onSubmit={sendEmail} id="contact-form">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name*"
                            // value={formValue}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            name="mail"
                            id="mail"
                            type="text"
                            placeholder="Email*"
                            // value={formValue}
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            name="subject"
                            id="subject"
                            type="text"
                            placeholder="phone*"
                            // value={formValue}
                          />
                        </div>
                      </div>
                      <textarea
                        name="comment"
                        id="comment"
                        placeholder="*Message*"
                      ></textarea>
                      <input type="submit" id="submit_contact" value="Submit" />
                      <div id="msg" className="message"></div>
                      {/* <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button> */}
                      {/* <button
                          id="submit_contact"
                          type="submit"
                        >
                          Save changes
                        </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarification;
