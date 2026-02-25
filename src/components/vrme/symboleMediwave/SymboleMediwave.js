import React from 'react'
import Mediwave from '../../../assets/images/logoMediwave.png'
 import './SymboleMediwave.css'



function SymboleMediwave() {
    const StyleImg={
        img:{
            width:'200px',
            height:'60px',
            backgroundColor: 'rgba(184, 184, 184, 0.8)',
            border:'3px solid rgba(0, 0, 0, 0.144)',
            borderRadius:'80px',
       
        }  
    }
  return (
    <>
     <div className='backLogo'>
         
         <a className='contanier text-position' href='/'>
        
        <img  style={StyleImg.img} src={Mediwave}/>
        </a>
    </div>
     </>
  )
}

export default SymboleMediwave