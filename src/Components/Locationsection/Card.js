import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import CardImage from './Images';
import CardText from './Text';

function CityCard(props) {
  const { city } = props;
  CityCard.propTypes = {
    city: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
  };
  return (
    <div className="card top-cities city-card" id={`card${city.id}`}>
      <CardImage imageUrl={city.imageUrl} />
      <div className="card-content">
        <div className="card-overlay" id={`card${city.id}-overlay`} />
        <CardText cityName={city.name} />
      </div>
    </div>
  );
}

export default CityCard;