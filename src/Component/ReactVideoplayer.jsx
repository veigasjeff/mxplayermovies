import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import trailer from "./video/car.mp4";
import "react-html5video/dist/styles.css";


const ReactVideoplayer = () => {
  return (
    <div>
      <Video autoPlay loop  width="500px" height="400px" 
      >

<source src={trailer}  type="video/mp4"     />


      
      
      </Video>
    </div>
  )
}

export default ReactVideoplayer;
