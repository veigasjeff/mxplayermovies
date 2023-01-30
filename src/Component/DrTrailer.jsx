import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import playermx from "./video/dr.mp4";
import "react-html5video/dist/styles.css";

const DrTrailer = () => {
  return (
    <div>
    <Video autoPlay loop  width="500px" height="400px" >


<source src={playermx}  type="video/mp4"     />


    
    
    </Video>
    </div>
  )
}

export default DrTrailer
