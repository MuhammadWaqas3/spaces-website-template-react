

import React from 'react';
import './Pricing2.css';
import Trending2 from './Trending2';
import Space2 from './Space2';

function Pricing2() {
  return (
    <div>
      <Trending2 />
      <div className="row">
        <Space2
          imgSrc="https://demo.themesberg.com/bootstrap/spaces/assets/img/conference-office.jpg"
          title="Conference Room"
          rating={4.7}
          location="Paris,
Île-de-France, France"
          distances={[
            'LE BHVMARAIS (5 mins walk)',
            'Shakespeare &amp; Company (15 mins walk)',
          ]}
          price={150}
          people={"2 - 10"}
          sqft={200} />

        <Space2
          imgSrc="https://demo.themesberg.com/bootstrap/spaces/assets/img/lifestyle-office.jpg"
          title="Lifestyle Space"
          rating={4.7}
          location="Madrid,
Hortaleza,
Spain"
          distances={[
            'Plaza Mayor (2 mins walk)',
            'eal Casa de Correos (15 mins walk)',
          ]}
          price={200}
          people={"10-30"}
          sqft={500} />

        <Space2
          imgSrc="https://demo.themesberg.com/bootstrap/spaces/assets/img/private-office.jpg"
          title="Private Space"
          rating={"5.0"}
          location=">New
York,
Manhattan, USA"
          distances={[
            'Old Street (2 mins walk)',
            'Shoreditch High Street (10 mins walk)',
          ]}
          price={100}
          people={1}
          sqft={10} />
          <div className="row">
           <div className="col mt-lg-6 mt-3 d-flex flex-column text-center">
             <div className="parent-container">
               <button type="button" className="btn btn-d btn-lg">Browse All</button></div>
             <span className="countries">124 spaces in 24 countries</span>
           </div>
         </div>
      </div>
    </div>

  );
}



export default Pricing2;




