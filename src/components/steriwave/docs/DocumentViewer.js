import React, { useState, useEffect }  from 'react';
import useResizeScreen from "../../../utils/useResizeScreen";

const DocumentViewer = ({ documents }) => {
 const handleClick = (url) => {
    window.open(url, '_blank');
 };
 const windowDimensions = useResizeScreen();
 const [ImgStyle, setImgStyle]=useState(
   {width:'40px',
   marginLeft:'30%'});
   const [textStyle, setTextStyle]=useState(
      {width:'70%',
      marginLeft:'5%'});
 return (
    <div>
      {documents.map((doc, index) => (
       <div className='col-lg-3 col-md-4 col-sm-3 col-s-7 col-xs-7'>
       <a
          key={index}
          src={doc.url}
          alt={doc.name}
          onClick={() => handleClick(doc.url)}
          style={{width:'0%'}}
        >
         <img src={doc.img} style={ImgStyle} />
         <p style={textStyle}>{doc.title}</p>
            </a>
            </div>
      ))}
    </div>
 );
      }

export default DocumentViewer;