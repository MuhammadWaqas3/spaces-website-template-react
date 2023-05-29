import React from 'react';
import PropTypes from 'prop-types';

import './Text.css';


function CardText(props) {
    const { cityName } = props;
    CardText.propTypes = {
      cityName: PropTypes.string.isRequired,
    };

    
    
    
    
    
    
    
    return (
      <div className="card-text-a" id={`card${cityName}-text`}>
        <p>{cityName}</p>
      </div>
    );
  }
  
  export default CardText;
  