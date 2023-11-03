


// Navbar.js
import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src="your-logo.png" alt="Logo" />
//       </div>
//       <div className="nav-links">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#services">Services</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
      <div className=''> Design Studio</div>
        
      </div>
      <div className="nav-links">
      
        <input type="text" placeholder='support Request'></input>
        <input type="text" placeholder='ProductTour'></input>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
}

export default Navbar;