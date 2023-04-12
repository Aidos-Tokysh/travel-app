import React from 'react'
import footer from "../video/footer.mp4";

function Footer() {
  return (
    <div className='footer'>
      <video src={footer} autoPlay loop muted width="100%" height="100%"/>
      
      
      <div className='footer-form'>
      <div className='footer-heading'>
        <h1>Weekend</h1>
        <h3>Путешествие с нами легче</h3> 
      </div>
        <input type='text' placeholder='Укажите свою почту'/>
        <button>SEND</button>
      </div>
    </div>
  )
}

export default Footer
