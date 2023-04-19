

import './Destinationsection.css';

import CityCard from './Card';

function TopCitiesSection() {
  const cities = [
    {
      id: 1,
      name: 'New York',
      imageUrl: 'https://demo.themesberg.com/bootstrap/spaces/assets/img/newyork.jpg'
    },
    {
      id: 2,
      name: 'Paris',
      imageUrl: 'https://demo.themesberg.com/bootstrap/spaces/assets/img/paris.jpg'
    },
    {
      id: 3,
      name: 'London',
      imageUrl: 'https://demo.themesberg.com/bootstrap/spaces/assets/img/london.jpg'
    },
    {
      id: 4,
      name: 'Tokyo',
      imageUrl: 'https://demo.themesberg.com/bootstrap/spaces/assets/img/tokyo.jpg'
    }
  ];

  return (
    <div className="container-e">
      <h3 style={{marginBottom: '5%', marginLeft: '7%', color: 'rgb(33,37,41)'}}>Top Cities</h3>
      <div className="row ab">
        {cities.map(city => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3" key={city.id}>
            <CityCard city={city} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCitiesSection;


