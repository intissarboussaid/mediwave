import React, { useEffect, useMemo, useState, ReactElement } from "react";
import { Card } from "primereact/card";
import useResizeScreen from "../../../utils/useResizeScreen";
import { Avatar } from "primereact/avatar";
import PhysiotherapistImage1 from "../../../assets/images/physiotherapy1.jpg";
import PhysiotherapistImage2 from "../../../assets/images/physiotherapy2.jpg";
import PhysiotherapistImage3 from "../../../assets/images/physiotherapy3.jpg";
import PhysiotherapistImage4 from "../../../assets/images/physiotherapy4.jpg";
import PhysiotherapistImage5 from "../../../assets/images/physiotherapy5.jpg";
import PhysiotherapistImage6 from "../../../assets/images/physiotherapy6.jpg";
import { useTranslation } from "react-i18next";

const PhysiotherapistLocalisation = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState("");
  const [physiotherapist, setPhysiotherapist] = useState({});
  const [marginLeftAvatar, setMarginLeftAvatar]= useState('0%')
  const [mapAdjust, setMapAdjust] = useState(
    "col-lg-8 col-md-7 col-sm-6 col-xs-12"
  );
  const [showPhysiotherapist, setShowPhysiotherapist] = useState(false);
  const [selectedMap, setSelectedMap] = useState({
    map1: true,
    map2: false,
    map3: false,
    map4: false,
    map5: false,
    map6: false,
  });
  useEffect(() => {
    console.log(physiotherapist);
  }, [physiotherapist]);

  const [data, setData] = useState([
    {
      acts_et_soins: "acts et soins du physio1",
      adresse: "adresse sokra ",
      featured: true,
      genre: "Male",
      gouvernorat: "Sfax",
      lat: 36.74561853435546,
      lng: 10.295197155062155,
      mail: "physio1@gmail.com",
      media: [],
      name: "",
      phone1: "+216 96385274 ",
      phone2: "+216 97123450",
      prename: "Hedi",
      qualification_personnel: "qualification personnel du hedi",
      specialty: "sports",
      _id: "63ad4fe5923f9689646b0080",
      img:<img
      alt="Card"
      src={PhysiotherapistImage6}
      // width={100}
    />
    },
    {
      acts_et_soins: "acts et soins du physio2",
      adresse: "adresse Sahloul ",
      featured: true,
      genre: "Female",
      gouvernorat: "Sousse",
      lat: 35.82773884566303,
      lng: 10.63877166558366,
      mail: "physio2@gmail.com",
      media: [],
      name: "Leila",
      phone1: "9112345",
      phone2: "9612345",
      prename: "akremi",
      qualification_personnel: "qualification personnel du physio2",
      specialty: "Neurological",
      _id: "63ad5060923f9689646b0082",
      img:<img
      alt=""
      src={PhysiotherapistImage1}
      // width={100}
    />
    },
    {
      acts_et_soins: "acts et soins du physio3",
      adresse: "adresse saltniya ",
      featured: true,
      genre: "Female",
      gouvernorat: "Sfax",
      lat: 36.02739528911792,
      lng: 10.516575958078903,
      mail: "physio3@gmail.com",
      media: [],
      name: "Dalila",
      phone1: "59112345",
      phone2: "59612345",
      prename: "akremi",
      qualification_personnel: "qualification personnel du physio3",
      specialty: "cardiorespiratory",
      _id: "63ada52e8bc7c59c414f1f08",
      img:<img
      alt=""
      src={PhysiotherapistImage2}
      // width={100}
    />
    },
    {
      acts_et_soins: "acts et soins du physio4",
      adresse: "adresse Khzema ",
      featured: true,
      genre: "Female",
      gouvernorat: "Sousse",
      lat: 34.744994555298184,
      lng: 10.762687401023049,
      mail: "physio4@gmail.com",
      media: [],
      name: "Mariem",
      phone1: "29112345",
      phone2: "29612345",
      prename: "abdi",
      qualification_personnel: "qualification personnel du physio4",
      specialty: "Geriatric",
      _id: "63adaff58bc7c59c414f1f23",
      img:<img
      alt=""
      src={PhysiotherapistImage3}
      // width={100}
    />
    },
    {
      acts_et_soins: "acts et soins du physio5",
      adresse: "adresse lac 2 ",
      featured: false,
      genre: "Male",
      gouvernorat: "Tunis",
      lat: 35.76690598514113,
      lng: 10.84111483143234,
      mail: "physio5@gmail.com",
      media: [],
      name: "Ossema",
      phone1: "79112345",
      phone2: "29612345",
      prename: "Abdi",
      qualification_personnel: "qualification personnel du physio5",
      specialty: "Pediatric",
      _id: "63adb6958bc7c59c414f1f3b",
      img:<img
      alt=""
      src={PhysiotherapistImage4}
      // width={100}
    />
    },
    {
      acts_et_soins: "acts et soins du physio6",
      adresse: "adresse centre ville ",
      featured: true,
      genre: "Male",
      gouvernorat: "Monastir",
      lat: 34.72745080533784,
      lng: 10.782006011443983,
      mail: "physio@gmail.com",
      media: [],
      name: "Makrem",
      phone1: "79112345",
      phone2: "29612345",
      prename: "Abdi",
      qualification_personnel: "qualification personnel du physio6",
      specialty: "Othopedic",
      _id: "63b2aa80bdbdf53bacf86ce6",
      img: <img
           alt=""
      src={PhysiotherapistImage5}
      
      // width={100}
         />
    },
  ]);

  const [filter, setFielters] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFielters({
      ...filter,
      [e.target.name]: value,
    });
  };
  const header = ([
    {img: <img
      alt="Card"
      src={PhysiotherapistImage1}
      // width={100}
    />},
    {img:<img
      alt="Card"
      src={PhysiotherapistImage2}
      // width={100}
    />},
    {img:<img
      alt="Card"
      src={PhysiotherapistImage3}
      // width={100}
    />},
    {img:<img
    alt="Card"
    src={PhysiotherapistImage4}
    // width={100}
  />},
  {img:<img
  alt="Card"
  src={PhysiotherapistImage5}
  // width={100}
/>}
  ]
  );
  const [Headers, setHeader] = useState(header);
  useEffect(() => {
    console.log(Headers);
  }, [Headers]);
  useEffect(() => {
    setItems(
      header.filter((Headers) =>
        Object.entries(filter).every(([key, value]) =>
        Headers[key].includes(value)
        )
      )
    );
  }, [data, filter]);
  const [items, setItems] = useState(data);
  useEffect(() => {
    console.log(items);
  }, [items]);
  useEffect(() => {
    setItems(
      data.filter((items) =>
        Object.entries(filter).every(([key, value]) =>
          items[key].includes(value)
        )
      )
    );
  }, [data, filter]);
  const { width, height } = useResizeScreen();
  const [leftCard, setLeftCard] = useState('0%');
  const [styleLeft, setStyleLeft]=useState('0%');
  const [styleHeight, setStyleHeight]=useState(500);
  useEffect(() => {
    if (width > 1200) {
     setStyleLeft('0%');
     setLeftCard('5%');
     setMarginLeftAvatar('-50%')
   }

   else if (width < 1200 && width > 992 ) { 
    setStyleLeft('20%');
    setLeftCard('0%')
  }
   if (width < 992 && width > 768 ) {
    setStyleLeft('40%');
    setLeftCard('0%');   
  }
  if (width < 768 && width > 600  ) {
    setStyleLeft('2%');
    setLeftCard('5%');
  }
  if (width < 600  ) {
    setStyleLeft('10%');
    setLeftCard('25%');
  }
  
  if (width > 770  ) {
    setStyleHeight(500)
  }
  if (width < 770  ) {
    setStyleHeight(520)
  }
  if (width < 586  ) {
    setMarginLeftAvatar('10%')
  }
  
 }, [width]);


  return (
    <>
      <div
        className="container-fluid"
        style={{ marginLeft: "5%", marginTop: "-5%", marginBottom: "5%" }}
        id="physiotherapist-section"
      >
        <div className="container">
          <div className="title-section">
            <h1>{t("FindPhysiotherapist")}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">
            <div className="card flex justify-content-center">
              <Card
                title={t("All_Physiotherapists")}
                subTitle={t("Choose_a_Physiotherapist")}
                //   header={header}
                className="md:w-38rem"
                style={{
                  height: styleHeight,
                  marginRight: "10%",
                  overflowY: "scroll",
                  marginLeft:leftCard,
                  width:'90%',
                  marginTop: "-2%",
                }}
              >               
                <div>
                  <div
                    className="p-card-subtitle"
                    style={{ marginRight: "7%", marginLeft: "15%" }}
                  >
                    <div className="card">
                      {data.map((item, i) => {
                        return (
                          <div
                            // className="physiotherapistName"
                            style={{
                              display: "flex",
                              marginLeft: "15%",
                              marginTop: "3%",
                              cursor: "pointer",
                              borderRadius: "2%",
                            }}
                            key={i}
                            onClick={() => {
                                setPhysiotherapist(item);
                              console.log(i);
                              if (i === 0) {
                                setSelectedMap({
                                  map1: true,
                                  map2: false,
                                  map3: false,
                                  map4: false,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-5 col-sm-6 col-xs-9"
                                );
                                setShowPhysiotherapist(true);
                              } else if (i === 1) {
                                setSelectedMap({
                                  map1: false,
                                  map2: true,
                                  map3: false,
                                  map4: false,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-5 col-sm-6 col-xs-9"
                                );
                                setShowPhysiotherapist(true);
                              } else if (i === 2) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: true,
                                  map4: false,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-5 col-sm-6 col-xs-9"
                                );
                                setShowPhysiotherapist(true);
                              } else if (i === 3) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: false,
                                  map4: true,
                                  map5: false,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-5 col-sm-6 col-xs-9"
                                );
                                setShowPhysiotherapist(true);
                              } else if (i === 4) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: false,
                                  map4: false,
                                  map5: true,
                                  map6: false,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-5 col-sm-6 col-xs-9"
                                );
                                setShowPhysiotherapist(true);
                              } else if (i === 5) {
                                setSelectedMap({
                                  map1: false,
                                  map2: false,
                                  map3: false,
                                  map4: false,
                                  map5: false,
                                  map6: true,
                                });
                                setMapAdjust(
                                  "col-lg-5 col-md-5 col-sm-6 col-xs-9"
                                );
                                setShowPhysiotherapist(true);
                              }
                            }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Click Here"
                          >
                            <Avatar
                              icon="pi pi-user"
                              // className="mr-2"
                              size="xlarge"
                              style={{ marginLeft: marginLeftAvatar}}
                            />
                            <h5 style={{ marginRight: "3%" }}>
                              {item.prename}
                            </h5>
                            <h5 >{item.name}</h5>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {selectedMap.map1 ? (
            <div className={`${mapAdjust}`} style={{marginTop:'5.5%'}}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  // marginTop: "12%",
                  marginLeft:styleLeft
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=34.72745080533784, 10.782006011443983&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowFullScreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map2 ? (
            <div className={`${mapAdjust}`}style={{marginTop:'5.5%'}}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  // marginTop: "16%",
                  marginLeft:styleLeft
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=35.82773884566303, 10.63877166558366&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowFullScreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map3 ? (
            <div className={`${mapAdjust}`} style={{marginTop:'5.5%'}}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  // marginTop: "16%",
                  marginLeft:styleLeft
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=36.02739528911792, 10.516575958078903&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowFullScreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map4 ? (
            <div className={`${mapAdjust}`} style={{marginTop:'5.5%'}}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  // marginTop: "16%",
                  marginLeft:styleLeft
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=34.744994555298184, 10.762687401023049&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowFullScreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map5 ? (
            <div className={`${mapAdjust}`} style={{marginTop:'5.5%'}}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  width: "100%",
                  // marginTop: "16%",
                  marginLeft:styleLeft
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=35.76690598514113, 10.84111483143234&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowFullScreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : selectedMap.map6 ? (
            <div className={`${mapAdjust}`}style={{marginTop:'5.5%'}}>
              <iframe
                className="sc_googlemap"
                style={{
                  height: 500,
                  height: "400",
                  width: "100%",
                  // marginTop: "16%",
                  marginLeft:styleLeft
                }}
                src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=34.72745080533784, 10.78200601144398&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA"
                allowFullScreen
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51792.26018942601!2d10.578497617784596!3d35.77497688642883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020aed8ec4bbbb%3A0xbc3f31e38b7f743b!2sSousse%20Riad!5e0!3m2!1sen!2stn!4v1677838951208!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          ) : null}
          {showPhysiotherapist ? (
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-5">
              <div className="card">
                <Card
                  title={`${physiotherapist.name} ${physiotherapist.prename}`}
                  subTitle={`${physiotherapist.specialty}`}
                  // footer={footer}
                  header={physiotherapist.img}
                  className="md:w-25rem"
                  style={{
                    height: styleHeight,
                    marginRight: "10%",
                    marginTop: "0%",
                    marginLeft:styleLeft
                  }}
                >
                  {/* <p className="m-0">{physiotherapist.name}</p> */}
                  <div
                    style={{
                      overflow: "hidden",
                      overflowY: "scroll",
                      height: "150px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-envelope"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{physiotherapist.mail}</h5>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-home"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{physiotherapist.adresse}</h5>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-phone"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{physiotherapist.phone1}</h5>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <Avatar
                        icon="pi pi-phone"
                        // className="mr-2"
                        size="xlarge"
                        style={{ marginRight: "10%" }}
                      />
                      <h5 style={{ marginRight: "2%" }}>{physiotherapist.phone2}</h5>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default PhysiotherapistLocalisation;