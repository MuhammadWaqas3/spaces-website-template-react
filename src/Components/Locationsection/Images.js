import React from 'react';

import PropTypes from 'prop-types';

import './Images.css';



function CardImage(props) {
    const { imageUrl } = props;
    CardImage.propTypes = {
      imageUrl: PropTypes.string.isRequired,
    };
    return (
      <img src={imageUrl} alt="card-1" width="100%" />
    );
  }
  
  export default CardImage;
  