import React from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Detail = () => {
  const eachProduct = useSelector(state => state.eachProduct);
  const {title, price, description, category, image, rating} = eachProduct;
  const {rate, count}= rating

  return (
    <div className="detail">
      <div className="detail__title">
        <h1>{title}</h1>
      </div>
      <div className="detail__container">
        <div className="detail__image">
          <img src={image} alt="{title}"/>
        </div>
        <div className="detail__info">
          <div className="detail__info__price">
            <h2>Price: {price}</h2>
          </div>
          <div className="detail__info__description">
            <p><strong>Description</strong> <br />{description}</p>
          </div>
          <div className="detail__info__category">
            <h3>category: {category}</h3>
          </div>
          <div className="detail__info__rating">
            <h3>Rate: {rate}</h3>
            <h3>votes: {count}</h3>
          </div>
      </div>

    </div>
  </div>
  )
}

Detail.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.object
}

Detail.defaultProps = {
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  }
}

export default Detail
