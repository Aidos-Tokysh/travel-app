import React from 'react'
import beach from "../video/beach.mp4";
function Video() {
  return (
    <div>
        <div className='video'>
            <video src={beach} autoPlay loop muted width="100%" height="100%"/> 
        </div>
      
    </div>
  )
}

export default Video
