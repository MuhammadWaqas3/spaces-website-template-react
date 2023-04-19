

import './Heroimage.css';
import MegamenuNavbar from '../Headersection/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Companynames from './Compnaynames';
import Searchbar from './Searchbar';
import './Heroimage.css';
import React from 'react';


function Heroimage() {
 

  return (
    <div className='capstone-project' >
      <MegamenuNavbar />
      <Searchbar />
      <Companynames />
    </div>
  );
}

export default Heroimage;



