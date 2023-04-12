import React from 'react'
import { useState } from 'react'
import {MenuOutlined,AntCloudOutlined} from '@ant-design/icons'
function Header() {
  const [navBar,setNavBar]=useState(false)
  const openNavBar=()=>{
    setNavBar(!navBar)
  }
  return (
    <header className='header'>
      <div className='logo-app'>
        <AntCloudOutlined style={{fontSize:'34px',color:"rgb(90, 149, 253)"}}/>
        <h2>Weekend</h2>
      </div>
      <div className={!navBar ? 'navBar' :'none'}>
        <p>Home</p>
        <p>About us</p>
        <p>Contacts</p>
      </div>
      <div className='logo-menu'>
        <MenuOutlined onClick={openNavBar} style={{fontSize:'24px'}}/>
      </div>
      
      
        
    </header>
  )
}

export default Header

