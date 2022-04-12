import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import Button from '../Button';


const ProductCard = (props) => {
  const { image, title } = props;
  const handleClick = () => {}
  return (
    <div className="productCard">
      <div className="productCard__containerImage">
        <img  className='productCard__containerImage--image' src={image} alt={title} />
      </div>
      <div className="productCard__title">
        {title}
      </div>
      <div className="productCard__button">
        <Button name="Go to Details" type="button" handleClick={handleClick} />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}

ProductCard.defaultProps ={
  image: '',
  title: ''
}

export default ProductCard
