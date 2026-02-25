import React from 'react';
import Carousell from '../../vrme/carouselStyle/Carousell';

import { useTranslation } from "react-i18next";
import claustrophobie from "../../../assets/images/claustrophobie.jpg";
import assenseur from "../../../assets/images/assenseur.jpg";
import acrophobiee from '../../../assets/images/acrophobia.jpg';
import acrophobieSolution from "../../../assets/images/achroSolution.png";
import arachrophobie from "../../../assets/images/aracrophobie.jpg";
import arachrophobieSolution from "../../../assets/images/arach.jpg";
import agora from "../../../assets/images/agoraphobie.jpg";
import agoraSol from "../../../assets/images/agora.jpg";
import social from "../../../assets/images/social.jpg";
import glossophobie from "../../../assets/images/glossophobie.jpg";


const CARDS = 10;
const Card = ({ src, title, content,content1,content2 }) => (
  <div className='card'>
    <div>{src}</div>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>{content1}</p>
    <p>{content2}</p>
  </div>
);

function Apptest() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      imgUrl: <img src={claustrophobie}  />,
      text1: t("CLAUSTROPHOBIA_1"),
      text2: "",
      text3: t("CLAUSTROPHOBIA_2"),
      name: t("CLAUSTROPHOBIA"),
      img: <img src={assenseur} />,
      textt1: t("APPLICATIONS_1"),
      textt2: " ",
      textt3: "  ",
      namet: t("soll"),
  
    },
    {
      id: 3,
      imgUrl: <img src={acrophobiee} />,
      text1: t("ACROPHOBIA_1"),
      text2: t("ACROPHOBIA_2"),
      text3: "  ",
      name: t("AGORAPHOBIA"),
  
      id: 4,
      img: <img src={acrophobieSolution} />,
      text1: t("APPLICATIONS_2"),
      textt2: "  ",
      textt3: "  ",
      namet: t("soll")
  
    },
    {
      id: 5,
      imgUrl: <img src={arachrophobie} />,
      text1: t("ARACHNOPHOBIA_1"),
      text2: t("ARACHNOPHOBIA_2"),
      text3: "  ",
      name: t("ARACHNOPHOBIA"),
  
      img: <img src={arachrophobieSolution}/>,
      textt1: t("APPLICATIONS_3"),
      textt2: "",
      textt3: "  ",
      namet: t("soll"),
  
    },
    {
      id: 7,
      imgUrl: <img src={agora} s></img>,
      text1: t("AGORAPHOBIA_1"),
      text2: t("AGORAPHOBIA_2"),
      text3: "  ",
      name: t("AGORAPHOBIA"),
      id: 8,
      img: <img src={agoraSol} />,
      textt1: t("APPLICATIONS_4_1"),
      textt2: t("APPLICATIONS_4_2"),
      textt3: "  ",
      name: t("soll")
  
  
    },
    {
      id: 9,
      imgUrl: <img src={social} />,
      text1: t("SOCIAL_PHOBIA_1"),
      text2: t("SOCIAL_PHOBIA_2"),
      text3: "  ",
      name: t("SOCIAL_PHOBIA"),
      id: 10,
      img: <img src={glossophobie}/>,
      textt1: t('SOCIAL_PHOBIA_Soll_1'),
      textt2: t('SOCIAL_PHOBIA_Soll_2'),
      textt3: t('SOCIAL_PHOBIA_Soll_3'),
      namet: t("soll")
  
  
    },
  ];
  return (
    <div className='contenttt'>
      <Carousell>
        {/* {[...new Array(data)].map((i) => (
          <Card src={i.imgUrl}
          title={i.name}
            content={i.text1} 
            content1={i.text2} 
            content2={i.text3}/>
        ))} */}

{data.map((i) => (
                    <Card src={i.imgUrl}
                    title={i.name}
                      content={i.text1} 
                      content1={i.text2} 
                      content2={i.text3}/>
                  ))}
      </Carousell>
    </div>
  )
}

export default Apptest