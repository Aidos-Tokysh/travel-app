import React from 'react'
import {ShoppingOutlined,HeartTwoTone} from '@ant-design/icons';
import { Space } from 'antd';
function Data({item}) {
  // const ShoppingOutlined=()=>{
  //   <svg width={80px}> </svg>
  // }
  return (
    <div className='hotTour-card'>
      <img src={item.image} alt={item.name}/>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className='moreInfo'>
        <h4>${item.price}</h4>
        <Space>      
          <button>
            <ShoppingOutlined style={{color:'black', scale:'1.8'}}/>
          </button>   
        </Space>   
      </div>
      
    </div>
  )
}

export default Data
