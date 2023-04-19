
import './Card.css';

import CardImage from './Images';
import CardText from './Text';

function CityCard(props) {
  const { city } = props;

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