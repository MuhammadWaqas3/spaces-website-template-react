import React from 'react';
import './Pricing.css';
import Trending from './Trending';
import Space from './Space';

function Pricing() {
  return (
    <div>
      <Trending />
      <div className="row">
        <Space
          imgSrc="https://demo.themesberg.com/bootstrap/spaces/assets/img/image-office.jpg"
          title="Collaborative Workspace"
          rating={"5.0"}
          location="New York, Manhattan, USA"
          distances={[
            'Old Street (2 mins walk)',
            'Shoreditch High Street (10 mins walk)',
          ]}
          price={2100}
          people={12}
          sqft={1200}
        />
        <Space
          imgSrc="https://demo.themesberg.com/bootstrap/spaces/assets/img/cowork-office.jpg"
          title="Coworking Space"
          rating={"3.0"}
          location="California, USA"
          distances={[
            'Penny Market Street (15 mins walk)',
            'Museum Street (20 mins walk)',
          ]}
          price={300}
          people={24}
          sqft={2000}
        />
        <Space
          imgSrc="https://demo.themesberg.com/bootstrap/spaces/assets/img/meeting-office.jpg"
          title="Meeting Office Space"
          rating={4.5}
          location="London, UK"
          distances={[
            'Bank Station (5 mins walk)',
            'Liverpool Street Station (10 mins walk)',
          ]}
          price={400}
          people={"2 - 4"}
          sqft={600}
        />
       

      </div>
    </div>

  );
}
export default Pricing;