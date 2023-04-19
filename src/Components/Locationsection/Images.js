import './Images.css';



function CardImage(props) {
    const { imageUrl } = props;
  
    return (
      <img src={imageUrl} alt="card image" width="100%" />
    );
  }
  
  export default CardImage;
  