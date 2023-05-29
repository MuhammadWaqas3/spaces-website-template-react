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
        <a className="navbar-brand logo" href="https://github.com/MuhammadWaqas3">
          <img className="navbar-brand-dark common" src="https://demo.themesberg.com/bootstrap/spaces/assets/img/brand/light.svg" height={35} alt="Logo light" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://github.com/MuhammadWaqas3" />

            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/MuhammadWaqas3" />
            </li>
            {/*-------------------------------Front pages Section-------------------------------------------------------*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="https://github.com/MuhammadWaqas3" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Frontpages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="https://github.com/MuhammadWaqas3">Main
                    Pages</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Landing 1</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Landing 2</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Landing 3</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">About</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">pricing</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Team</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Contact</a></li>
                  <li>
                    <a className="dropdown-item" id="legal" href="https://github.com/MuhammadWaqas3">Legal</a>
                  </li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Legal Center</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Terms &amp; Agreement</a></li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="https://github.com/MuhammadWaqas3">Listings</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">All Spaces</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Map View</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">All Spaces Sidebar</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Space Details</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Profile</a></li>
                  <li><a className="dropdown-item" id="support" href="https://github.com/MuhammadWaqas3">Support</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Support Center</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Support Topic </a></li>
                   <li><a className="dropdown-item" id="blog" href="https://github.com/MuhammadWaqas3">Blog</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Blog</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Blog Post</a></li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="https://github.com/MuhammadWaqas3">User</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Sign In</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Sign Up</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Forgot Password</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Reset Password</a></li>
                  <li><a className="dropdown-item" id="special" href="https://github.com/MuhammadWaqas3">Special</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">404 Not Found</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">500 Server Error</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Maintenance</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">coming soon</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Blank Page</a></li>
                </ul>
              </div>
            </li>
            {/*--------------------------------------------------------------Dashboard section----------------------------------------*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="https://github.com/MuhammadWaqas3" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dashboard
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="https://github.com/MuhammadWaqas3">User
                    Dashboard</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">My Account</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Setting</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Security</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Items</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">My Items</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Edit Items</a></li>
                </ul>
                <ul>
                  <li><a className="dropdown-item" id="dropdown-heading" href="https://github.com/MuhammadWaqas3">Messages</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Messages</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Chat</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Billing</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Billing Details</a></li>
                  <li><a className="dropdown-item" href="https://github.com/MuhammadWaqas3">Invoice</a></li>
                </ul>
              </div>
              {/*--------------------------------------------------------------Support section----------------------------------------*/}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="https://github.com/MuhammadWaqas3" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="https://github.com/MuhammadWaqas3" target="_blank" rel="noopener noreferrer" className="btn nav-button btn-md
              btn-outline-light animate-up-2 mr-2">
              <i className="fas fa-book lg" />
              <span className="d-xl-none">Docs</span>
              <span className="d-noned-xl-inline ">Components</span>
            </a>
            <a href="https://github.com/MuhammadWaqas3" target="_blank" rel="noopener noreferrer" className="btn btn-md nav-button btn-danger
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



