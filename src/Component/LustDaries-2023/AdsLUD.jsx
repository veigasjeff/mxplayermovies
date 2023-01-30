  import React from "react";
  import "./ModalAdult.css";


function AdsLUD ({ setOpenModal }) {
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
              
          <h1>Are You Sure You Want to Continue?</h1>      
     
          <div style={{ fontSize: "18px", color: "#FF0000", fontWeight: "bold" }} className="some classes here">
          <p>This website requires you to be 18 years of age or older. Please verify your age to view the content, or click Exit to leave!</p></div>
  
     
          <div className="footer">
          <a href="/" ><button
          onClick={() => {
            setOpenModal(false);
          }}
          id="cancelBtn"
        >
    
        
           Exit </button></a>
          
          <a href="LustDaries-2023" > <button class="btn btn-primary btn-lg " >Continue Yes</button></a>
          <p></p>
        </div>
        </div></div>

 
  );
}

export default AdsLUD;