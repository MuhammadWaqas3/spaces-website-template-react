

import React from 'react';


import { useState, useEffect } from 'react';
import './Reviews.css';
import { Carousel, CarouselItem } from 'react-bootstrap';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
  fetch(' https://jsonplaceholder.typicode.com/comments')  
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, []);

  const handleSelect = (selectedIndex) => { 
    setCurrentReview(selectedIndex);
  };

  return (
    <div className="container" id="container-i">
      <div className="row">
        <div className="col-md-4 d   d-flex justify-content-center" >
          <Carousel activeIndex={currentReview} onSelect={handleSelect} indicators={false} interval={null} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />}>
          

{reviews.slice(0, 5).map((review, index) => (
  <CarouselItem key={index}>
    <img
  className="d-block w-100"
  src={`https://demo.themesberg.com/bootstrap/spaces/assets/img/team/profile-picture-${index + 1}.jpg`}
  alt={`Review ${index + 1}`}
  width={100}
  height={100}
  onClick={() => setCurrentReview(index)}
/>

{/* Yeh currentReview state ko select kiye gaye item ka index se update karta hai. */}
  </CarouselItem>
))}
          </Carousel>
        </div>
        <div className="col-md-8 performance" style={{textAlign: 'center'}}>
          <span className="star fas fa-star text-warning" />
          <span className="star fas fa-star text-warning" />
          <span className="star fas fa-star text-warning" />
          <span className="star fas fa-star text-warning" />
          <span className="star fas fa-star text-warning" />
          <blockquote style={{fontSize: '20px', fontWeight: 400, color: 'rgb(71, 71, 122)'}}> Review:{reviews[currentReview]?.body}</blockquote>
          <h4 style={{fontSize: '20px', fontWeight: 600, color: 'rgb(6, 6, 78)'}}>Name: {reviews[currentReview]?.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default Reviews;