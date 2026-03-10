import React from 'react';
const DocumentViewer = ({ documents }) => {
 const handleClick = (url) => {
    window.open(url, '_blank');
 };

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
          href='/steriwave'
        >
         <img src={doc.img} style={{width:'40px',
   marginLeft:'30%'}} alt='img' />
         <p style={{width:'70%',
      marginLeft:'5%'}}>{doc.title}</p>
            </a>
            </div>
      ))}
    </div>
 );
      }

export default DocumentViewer;