import React from 'react'
import './MyStyle.css';

const Navbar = () => {
  return (
  <>
  <div className="container">
  <div className="dropdown">
  <button className="dropbtn"><strong>Uwatch4free Movies™ Menu</strong></button>
  <div className="dropdown-content">
    <a href="/"><button type="button" className="btn btn-outline-secondary"><strong>Home</strong></button></a>
    <a href="Hollywood"><button type="button" className="btn btn-outline-secondary"><strong>Hollywood</strong></button></a>
    <a href="Bollywood"><button type="button" className="btn btn-outline-secondary"><strong>Bollywood</strong></button></a>
    <a href="Adult"><button type="button" className="btn btn-outline-secondary"><strong>Adult +18</strong></button></a>
    
  </div></div>
</div>

    </>
  );
}

export default Navbar;
