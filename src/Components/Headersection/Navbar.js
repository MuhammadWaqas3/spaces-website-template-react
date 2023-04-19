// import { navbar, nav } from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import Registration from './Register';

import './Navbar.css';



function MegamenuNavbar() {

  // const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  }
  return (

    < nav className="navbar navbar-expand-lg justify-content-center top-fix" style={{ backgroundColor: 'transparent' }}>
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#">
          <img className="navbar-brand-dark common" src="https://demo.themesberg.com/bootstrap/spaces/assets/img/brand/light.svg" height={35} alt="Logo light" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" />

            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" />
            </li>
            {/*-------------------------------Front pages Section-------------------------------------------------------*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Frontpages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="#">Main
                    Pages</a></li>
                  <li><a className="dropdown-item" href="#">Landing 1</a></li>
                  <li><a className="dropdown-item" href="#">Landing 2</a></li>
                  <li><a className="dropdown-item" href="#">Landing 3</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">pricing</a></li>
                  <li><a className="dropdown-item" href="#">Team</a></li>
                  <li><a className="dropdown-item" href="#">Contact</a></li>
                  <li>
                    <a className="dropdown-item" id="legal" href="#">Legal</a>
                  </li>
                  <li><a className="dropdown-item" href="#">Legal Center</a></li>
                  <li><a className="dropdown-item" href="#">Terms &amp; Agreement</a></li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="#">Listings</a></li>
                  <li><a className="dropdown-item" href="#">All Spaces</a></li>
                  <li><a className="dropdown-item" href="#">Map View</a></li>
                  <li><a className="dropdown-item" href="#">All Spaces Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Space Details</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" id="support" href="#">Support</a></li>
                  <li><a className="dropdown-item" href="#">Support Center</a></li>
                  <li><a className="dropdown-item" href="#">Support Topic </a></li>
                  <li><a className="dropdown-item" id="blog" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Blog Post</a></li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="#">User</a></li>
                  <li><a className="dropdown-item" href="#">Sign In</a></li>
                  <li><a className="dropdown-item" href="#">Sign Up</a></li>
                  <li><a className="dropdown-item" href="#">Forgot Password</a></li>
                  <li><a className="dropdown-item" href="#">Reset Password</a></li>
                  <li><a className="dropdown-item" id="special" href="#">Special</a></li>
                  <li><a className="dropdown-item" href="#">404 Not Found</a></li>
                  <li><a className="dropdown-item" href="#">500 Server Error</a></li>
                  <li><a className="dropdown-item" href="#">Maintenance</a></li>
                  <li><a className="dropdown-item" href="#">coming soon</a></li>
                  <li><a className="dropdown-item" href="#">Blank Page</a></li>
                </ul>
              </div>
            </li>
            {/*--------------------------------------------------------------Dashboard section----------------------------------------*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dashboard
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="#">User
                    Dashboard</a></li>
                  <li><a className="dropdown-item" href="#">My Account</a></li>
                  <li><a className="dropdown-item" href="#">Setting</a></li>
                  <li><a className="dropdown-item" href="#">Security</a></li>
                  <li><a className="dropdown-item" href="#">Items</a></li>
                  <li><a className="dropdown-item" href="#">My Items</a></li>
                  <li><a className="dropdown-item" href="#">Edit Items</a></li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="#">Messages</a></li>
                  <li><a className="dropdown-item" href="#">Messages</a></li>
                  <li><a className="dropdown-item" href="#">Chat</a></li>
                  <li><a className="dropdown-item" href="#">Billing</a></li>
                  <li><a className="dropdown-item" href="#">Billing Details</a></li>
                  <li><a className="dropdown-item" href="#">Invoice</a></li>
                </ul>
              </div>
              {/*--------------------------------------------------------------Support section----------------------------------------*/}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Support
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li>
                    <div className="documentation" style={{ display: 'flex' }}>
                      <i className="fas fa-file-alt" />
                      <p className="documentation" style={{ marginLeft: '2%' }}>Documentation</p><span className="badge badge-sm badge-secondary ml-2 badge-b" style={{ width: '48px', height: '23px', marginLeft: '10px' }}>v3.0</span><br />
                    </div>
                    <p style={{ fontSize: '10px' }}>Examples and Guides</p>
                  </li>
                  <hr />
                  <li>
                    <div className="Support" style={{ display: 'flex' }}><i className="fas fa-microphone-alt" />
                      <p className="documentation" style={{ marginLeft: '2%' }}>Support</p>
                    </div>
                    <p className="documentation" style={{ fontSize: '10px' }}>Looking
                      For answers?</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/*------------------------------------------ Last two Buttons --------------------------------------------*/}

          <div className="d-none d-lg-block @@cta_button_classes mr-5 ;">
            <a href="#" target="_blank" className="btn nav-button btn-md
              btn-outline-light animate-up-2 mr-2">
              <i className="fas fa-book lg" />
              <span className="d-xl-none">Docs</span>
              <span className="d-noned-xl-inline ">Components</span>
            </a>
            <a href="#" target="_blank" className="btn btn-md nav-button btn-danger
              animate-up-2">
              <i className="fas fa-shopping-bag lg" />
              Buy now
            </a>

           
            <button
              className="btn btn-md nav-button btn-warning" onClick={handleShowLoginModal}><i className="fa-solid fa-right-to-bracket lg" /> Login</button>

            <Registration show={showLoginModal} onHide={() => setShowLoginModal(false)} />

          </div>

  

      </div>
    </nav>
  );
}


export default MegamenuNavbar;



