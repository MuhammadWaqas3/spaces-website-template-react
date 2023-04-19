import Rating from './Rating';
import './Space.css';



function Space(props) {
    return (
      <div className="col-sm-12 col-lg-4 col-md-12 col-12 col-xl-4 col-xxl-4">
        <div className="card trending-spaces" style={{ height: '100%' }}>
          <div className="card-header">
            <img className="card-img-top" src={props.imgSrc} alt="Card image" />
          </div>
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <Rating rating={props.rating} />
            <ul className="list-group mb-3">
              <li className="list-group-item small p-0">
                <span className="fas fa-map-marker-alt mr-2" id="fontawesome" />
                {props.location}
              </li>
              {props.distances.map((distance, index) => (
                <li key={index} className="list-group-item small p-0">
                  <span className="fas fa-bullseye mr-2" id="fontawesome" />
                  {distance}
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <div className="footera">
                Monthly<h6 className="heading">{props.price}$</h6>
              </div>
              <div className="footerb">
                people<h6 className="heading">{props.people}</h6>
              </div>
              <div className="footerc">
                Sq.ft<h6 className="heading">{props.sqft}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  export default  Space;