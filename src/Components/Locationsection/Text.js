import './Text.css';


function CardText(props) {
    const { cityName } = props;
  
    return (
      <div className="card-text-a" id={`card${cityName}-text`}>
        <p>{cityName}</p>
      </div>
    );
  }
  
  export default CardText;
  