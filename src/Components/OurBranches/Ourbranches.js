
import React from 'react';


import './Ourbranches.css';

function Ourbranches () {








    return (

 <div className="container" id="container-j" style={{marginTop: '5%'}}>
        <div className="card" id="last-card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-12">
                <div className="text-left">
                  <p className="card-text card-text-1"><b>5500</b> venues in <b>400</b> cities across <b>73</b> <br />countries, and everyday
                    counting.
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                      <ul className="list-group">
                        <li className="list-group-item li-1" style={{color: 'rgb(66,71, 103)'}}><span className="fas fa-map-marker-alt mr-2 map-mark" />New York</li>
                        <li className="list-group-item li-1" style={{color: 'rgb(66,71, 103)'}}><span className="fas fa-map-marker-alt mr-2 map-mark" />Paris</li>
                        <li className="list-group-item li-1" style={{color: 'rgb(66,71, 103)'}}><span className="fas fa-map-marker-alt mr-2 map-mark" />Milano</li>
                        <li className="list-group-item li-1" style={{color: 'rgb(66,71, 103)'}}><span className="fas fa-map-marker-alt mr-2 map-mark" />Rome</li>
                      </ul>
                    </div>
                    <div className="col-md-6  col-sm-12 col-12">
                      <ul className="list-group">
                        <li className="list-group-item li-1" style={{color: 'rgb(66,71, 103)'}}><span className="fas fa-map-marker-alt mr-2 map-mark" />Madrid</li>
                        <li className="list-group-item li-1" style={{color: 'rgb(66,71, 103)'}}><span className="fas fa-map-marker-alt mr-2 map-mark" />Berlin </li>
                        <li className="list-group-item li-1" style={{color: 'rgb(66,71, 103)'}}><span className="fas fa-map-marker-alt mr-2 map-mark" />London</li>
                        <li className="list-group-item li-1" style={{color: 'rgb(158,48,67)'}}>All Cities<span className="fas fa-arrow-right fa-xs " style={{marginLeft: '2%'}} /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-12 ">
                <img className="card-img-right-1" src="https://demo.themesberg.com/bootstrap/spaces/assets/img/illustrations/world-map.svg" alt="Card " />
              </div>
            </div>
            <div className="text-left">
              <button className="btn  btn-11"><span className="fas fa-plus mr-2 maap-mark" /><b>List A Space</b></button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Ourbranches;