import React from "react";

import DrTrailer from "../DrTrailer";
import "./Modal.css";


function PromoGAG1 ({ setOpenModal }) {
  return (
    
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <a href="GinnyAndGeorgia-2023" >  <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button></a>
        </div>
       
        <div className="body">
      
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      <div className="video-responsive">
      <DrTrailer/>
        </div></div>
        </div>
        <div className="footer">
        <a href="GinnyAndGeorgia-2023" ><button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
          
           Exit </button></a>
          <a href="DownloadGAG1" > <button>Skip Ads</button></a>
        </div>
      </div>
    </div>
  );
}

export default PromoGAG1;