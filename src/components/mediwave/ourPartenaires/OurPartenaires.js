import React, {useState, useEffect} from "react";
import './OurPartenaire.css'
import enis from "../../../assets/images/enis.png";
import threedwave from "../../../assets/images/3dwave.png";
import fms from "../../../assets/images/fms_logo.png";
import actia from "../../../assets/images/ACTIA.png";
import cims from "../../../assets/images/CIMS.png";
import fmm from "../../../assets/images/FMM.jpg";
import tim from "../../../assets/images/TIM.png";
import MS from "../../../assets/images/MS.png"
import CTMBH from "../../../assets/images/CTMBH.jpg"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useResizeScreen from "../../../utils/useResizeScreen";
import bgPartner from "../../../assets/images/bgpartenaire.jpg";


const _items = [
  {
    player: {
      image: CTMBH,
      height: '40%',
      color:'white'
    }
  },
  {
    player: {
      image: enis,
      height: '40%',
      color:'white'
    }
  },
  {
    player: {
      image: threedwave,
      height: '40%',
      color:'white'

    }
  },
  {
    player: {
      image: fms,
      height: '41%',
      color:'white'
    }
  },
  {
    player: {
      image: fmm,
      height: '40%',
      color:'white'
    }
  },
  {
    player: {
      image: actia,
      height: '30%', top: '10%',
      color:'white'
    }
  },
  {
    player: {
      image: MS,
      height: '50%', top: '-15%',
      color:'white'
    }
  },
  {
    player: {
      image: tim,
      height: '40%',
      color:'white'
    }
  },
  {
    player: {
      image: cims,
      height: '40%',
      width:'140%',
      color:'white'
    }
  },
 
];
const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const keys = Array.from(Array(_items.length).keys());
const OurPartenaires = () => { 
  const [slideWidth, setSlideWidth ] = useState(20);
const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
      marginTop: '0%',
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }
  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);
  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} style={{ height: item.player.height, marginTop: item.player.top, backgroundColor:item.player.color, width: item.player.width}} />
      </div>
    </li>
  );
}; 
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;
  const [titleStyle, setTitleStyle] = useState({
    fontSize: '50px',
    textTransform: 'uppercase',
});

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map(
          (_, i) => prev[(i - jump + bigLength) % bigLength],
        );
      });
    }
  };
  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length)
  }, [items]);
  const bgPartenaire = {
    backgroundImage: `url(${bgPartner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'70vh'
  };
 
  const { t } = useTranslation();
  const windowDimensions = useResizeScreen();
  useEffect(() => {
    if(windowDimensions.width > 1000){  
        setTitleStyle({
          textTransform: 'uppercase',
        fontSize: '45px'
    });
    setSlideWidth(20);

}    if (windowDimensions.width < 1000 && windowDimensions.width > 700 ) {
  setTitleStyle({
      fontSize: '45px',
      textTransform: 'uppercase',
  });
  setSlideWidth(20);
}
if (windowDimensions.width < 700 && windowDimensions.width > 500 ) {
  setTitleStyle({
      fontSize: '30px',
      textTransform: 'uppercase',
  });
  setSlideWidth(20);
}
if (windowDimensions.width < 500 &&  windowDimensions.width > 290) {
  setTitleStyle({
      fontSize: '20px',
      textTransform: 'uppercase',
  });
  setSlideWidth(20);

}  
if (windowDimensions.width < 290) {
  setTitleStyle({
      fontSize: '20px',
      textTransform: 'uppercase',
  });
  setSlideWidth(1.9);

} 

}, [windowDimensions.width,])
  return (

    <div id="Partenaires">
      <div className="container">
        <div className="row" style={{ marginTop: "2%" }}>

          <div className="title-section">
            <h1 style={titleStyle} >{t("our")}<a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> Partenaires</a></h1>
          </div>
          <div className="col-lg-12 col-md-12 col-ls-12 " 
          style={bgPartenaire}
          >           
            <div className="carousel" >
              <div className="carousel__wrap" >
                <div className="carousel__inner">
                  <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                  </button>
                  <div className="carousel__container">
                    <ul className="carousel__slide-list">
                      {items.map((pos, i) => (
                        <CarouselSlideItem
                          key={i}
                          idx={i}
                          pos={pos}
                          activeIdx={activeIdx}
                        />
                      ))}
                    </ul>
                  </div>
                  <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ReactDOM.render(<Carousel />, document.getElementById('root'));
export default OurPartenaires