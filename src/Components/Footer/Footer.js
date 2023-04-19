import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {



    return (

        <footer className="footer" >
            <div className="row row-1">
                <div className="footer-col">
                    <div className="text-left">
                        <img src="https://demo.themesberg.com/bootstrap/spaces/assets/img/brand/light.svg" alt="logo" className="logo-1" />
                        <p className="footer-text" style={{ color: 'white', marginTop: '5%' }}>Premium Bootstrap Directory Listing Template</p>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>themesberg</h4>
                    <ul>
                        <li><a href='#' className='links'>Blog</a></li>
                        <li><a href='#' className='links'>Product</a></li>
                        <li><a href='#' className='links'>About Us</a></li>
                        <li><a href='#' className='links'>Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-col col-12 col-md-12 col-lg-6">
                    <h4 style={{ marginLeft: '9%' }}>Other</h4>
                    <ul>
                        <li><a href='#' className='links'>Documentation<span className="badge links badge-sm badge-secondary ml-2 badge-b">v3.0</span></a></li>
                        <li><a href='#' className='links'>Changelog</a></li>
                        <li><a href='#' className='links'>Support</a></li>
                        <li><a href='#' className='links'>Liscence</a></li>
                    </ul>
                </div>
                {/* <div className="footer-col">
                    <h4>Get The App</h4>
                    <p style={{ color: 'rgb(180, 180, 180)' }}>It's easy. Just select your device.</p>



                   
                    <div className='row d-flex justify-content-center' >


                        <div className='col-12 col-md-12 col-lg-6 col-xl-6 '>

                            <div className="buttons-w">
                                <button type="button" className="btn btn-light btn-lg  App-store">



                                    <div className="logo-container">
                                        <i className="fab fa-apple logo-3"></i>
                                        <div className="text-container">
                                            <span style={{ fontSize: '11px', fontWeight: '400' }}>Available on</span>
                                            <br />
                                            <span>App Store</span>
                                        </div>
                                    </div>
                                </button>
                            </div>

                  

                            <div className='col-12 col-md-12 col-lg-6 col-xl-6 '>
                                <button type="button" className="btn btn-light btn-lg Google-play">



                                    <div className="logo-container">
                                        <i className="fab fa-google-play logo-3"></i>
                                        <div className="text-container">
                                            <span style={{ fontSize: '11px', fontWeight: '400' }}>Available on</span>
                                            <br />
                                            <span>Google Play</span>
                                        </div>
                                    </div>

                                </button>
                            </div>
                        </div>
                    </div>

                </div> */}

<div className="footer-col">
  <h4>Get The App</h4>
  <p style={{ color: 'rgb(180, 180, 180)' }}>It's easy. Just select your device.</p>

  <div className=' justify-content-center'>
    <div className='col'>
      <div className="buttons-w">
        <button type="button" className="btn btn-light btn-lg  App-store">
          <div className="logo-container">
            <i className="fab fa-apple logo-3"></i>
            <div className="text-container">
              <span style={{ fontSize: '11px', fontWeight: '400' }}>Available on</span>
              <br />
              <span>App Store</span>
            </div>
          </div>
        </button>
      </div>
    </div>
    <div className='col'>
      <button type="button" className="btn btn-light btn-lg Google-play">
        <div className="logo-container">
          <i className="fab fa-google-play logo-3"></i>
          <div className="text-container">
            <span style={{ fontSize: '11px', fontWeight: '400'      
}}>    Available on   </span>
            <br />
            <span style={{}}>Google Play</span>
          </div>
        </div>
      </button>
    </div>
  </div>

</div>


                <div className="footer-col-a " >
                    <div className="text-center-a">
                        <img src="https://demo.themesberg.com/bootstrap/spaces/assets/img/themesberg.svg" alt="logo" className="logo-a" width="25px" />
                        <p className="footer-text-a" style={{ color: 'white' }}>Copyright © Themesberg 2023. All rights reserved.</p>
                    </div>
                </div>

            </div></footer>

    );
}

export default Footer;