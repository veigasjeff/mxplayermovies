import React from "react";
import "./Modal.css";

function Modal4({ setOpenModal }) {
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
      <div className="title">
        <h1>Are You Sure You Want to Continue?</h1>
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
    <iframe src='https://www.youtube.com/embed/76BhvV8ihRM?autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=76BhvV8ihRM'
    height={250}
    width={450}
    frameborder='0'
    allow=' autoplay; loop; encrypted-public'
    allowfullscreen
    title='video' />
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
        <a href="Kuttey" > <button>Skip Ads</button></a>
      </div>
    </div>
  </div>
   
  )
}

export default Modal4;
