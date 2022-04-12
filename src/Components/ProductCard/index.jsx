import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { PRODUCT_DETAIL_ROUTE } from 'src/Constants/Router';


const ProductCard = (props) => {
  const { id,image, title } = props;
  const handleClick = () => {
  }
  return (
    <div className="productCard">
      <div className="productCard__containerImage">
        <img  className='productCard__containerImage--image' src={image} alt={title} />
      </div>
      <div className="productCard__title">
        {title}
      </div>
      <div className="productCard__button">
        <Link to={`${PRODUCT_DETAIL_ROUTE}/${id}`}>
        <Button name="Go to Details" type="button" handleClick={handleClick} />
        </Link>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
}

ProductCard.defaultProps ={
  id: '',
  image: '',
  title: ''
}

export default ProductCard
