
import React from 'react';

import PropTypes from 'prop-types';

function Rating2(props) {

    Rating2.propTypes = {
        rating: PropTypes.number.isRequired,
      };
    return (

        
        <div>

<span className="star fas fa-star fa-lg text-warning" />
                  <span className="star fas fa-star fa-lg text-warning" />
                  <span className="star fas fa-star fa-lg text-warning" />
                  <span className="star fas fa-star fa-lg text-warning" />
                  <span className="star fas fa-star fa-lg text-warning" />
                  <span className="badge rounded-pill ">{props.rating}</span>

        </div>
    )
}

export default Rating2;