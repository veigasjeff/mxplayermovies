  import React from "react";
import ReactVideoplayer from "../ReactVideoplayer";
import "./Modal.css";


function AdsCTW ({ setOpenModal }) {
  return (
    
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <a href="/" >  <button
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
      <ReactVideoplayer/>
        </div></div>
        </div>
        <div className="footer">
        <a href="/" ><button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
          
           Exit </button></a>
          <a href="Chhatriwali-2023" > <button>Skip Ads</button></a>
        </div>
      </div>
    </div>
  );
}

export default AdsCTW;