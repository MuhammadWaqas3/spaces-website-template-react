import React from 'react';

import './Searchbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';



function Searchbar (){



    return (

        <div className="xyz text-light" style={{textAlign: 'center', fontFamily: 'inherit'}}>
        <div className="container-a">
          <h1 className="space-a">Find your space.</h1>
          <p className="space">12,000+ coworking spaces with desks, offices &amp;
            meeting rooms in 165+ <br />countries. Discover
            and
            reserve space today.
          </p>
        </div>
        <div className="row mb-5 cc" style={{ display: 'flex', justifyContent: 'center'}}>
          <div className="col-12">
            <div className="card p-md-2">
              <div className="card-body p-2 p-md-0">
                <form autoComplete="on" className="row" action="/" method="get"  >
                  <div className="col-12 col-lg-5">
                    <div className="form-group form-group-lg mb-lg-0">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" style={{height: '50px'}}>
                            <span className="fas fa-map-marker-alt">
                            </span>
                          </span>
                        </div>
                        <input id="search-location" type="text" className="form-control autocomplete" placeholder="Search location" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="input-group input-group-lg mb-3 mb-lg-0">
                      <div className="input-group-prepend ">
                        <span className="input-group-text " style={{height: '50px'}}>
                          <i className="far fa-calendar-alt ">
                          </i>
                        </span>
                      </div>
                      <input className="form-control datepicker"  type="text" placeholder="Select date" style={{fontSize: '16px'}}/>
                    </div>
                  </div>
                  <div className="a col-12 col-lg-3">
                    <button className="btn btn-lg btn-block animate-up-2 btn-a" >Find
                      a
                      desk</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Searchbar;