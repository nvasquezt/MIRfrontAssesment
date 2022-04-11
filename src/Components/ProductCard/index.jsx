import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';


const ProductCard = (props) => {

  const { image, title } = props;
  return (
    <div className='firstdiv'>
      <img className='imagee' src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
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
