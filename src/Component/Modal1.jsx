  import React from "react";
import "./Modal.css";


function Modal({ setOpenModal }) {
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
          <p>This website requires you to be 18 years of age or older. Please verify your age to view the content, or click Exit to leave!</p>
        </div>
        <div className="footer">
        <a href="/" ><button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
           Exit </button></a>
          <a href="Freddy" > <button>Continue Yes</button></a>
        </div>
      </div>
    </div>
  );
}

export default Modal;