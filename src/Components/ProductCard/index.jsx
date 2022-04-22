import { getAProductThunk } from '../../Store/actions';
import { Link } from 'react-router-dom';
import { PRODUCT_DETAIL_ROUTE } from 'src/Constants/Router';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';
import React, {useState } from 'react';
import './ProductCard.scss';

const ProductCard = (props) => {
  const { id,image, title } = props;
  const [changeClass, setChangeClass] = useState(true);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(getAProductThunk(id));
  }
  const handleComplete = () => {
    setChangeClass(false);
  }

  return (

    <div className="productCard">
      <div className="productCard__containerImage">
        <img  className='productCard__containerImage--image' src={image} alt={title} />
      </div>
      <div className="productCard__title">
        {title}
      </div>
      <div className={changeClass ? 'productCard__button' : 'productCard__button--disabled'}>
        <Countdown date={Date.now()+20000 * (Math.floor(Math.random() * 5) + 1)} onComplete={handleComplete} />
        <Link to={`${PRODUCT_DETAIL_ROUTE}/${id}`}>
          <Button name="Go to Details" type="button" handleClick={handleClick} />
        </Link>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
}

ProductCard.defaultProps ={
  image: '',
  title: ''
}

export default ProductCard
