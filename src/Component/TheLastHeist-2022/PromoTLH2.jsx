import React from "react";
import DrTrailer from "../DrTrailer";
import "./Modal.css";



function PromoTLH1 ({ setOpenModal }) {
  return (
    
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <a href="TheLastHeist-2022" >  <button
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
        <a href="TheLastHeist-2022" ><button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
          
           Exit </button></a>
          <a href="DownloadTLH2" > <button>Skip Ads</button></a>
        </div>
      </div>
    </div>
  );
}

export default PromoTLH1;