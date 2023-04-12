import React from 'react'
import { useState } from 'react';

function Form(){
  const [changePrice,setChangePrice]=useState(0)
  const handleChangePrice=(e)=>{
    setChangePrice(e.target.value)
  }
  return (
    <div className='form'>
      <div className='flight-from'>
        <h4>
          Откуда
        </h4>
        <input placeholder='Откуда' />
      </div>
      <div className='flight-to'>
        <h4>
          Куда
        </h4>
        <input placeholder='Куда'/>
      </div>
      <div className='date'>
        <h4>
          Дата вылета
        </h4>
        <input placeholder='Дата' type="date"/>
      </div>  
      <div className='price'>
        <h4>Max price: {changePrice}</h4>
        <input type='range' onChange={handleChangePrice} max="5000" min="0"/>
      </div>  
    </div>
  )
}

export default Form;
