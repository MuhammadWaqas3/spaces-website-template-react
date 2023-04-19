


function Rating(props) {
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

export default Rating;