import React from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Detail.scss'

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
          <img className='detail__image--item' src={image} alt="{title}"/>
        </div>
        <div className="detail__info">
          <div className="detail__info--rating">
            <span><strong>Rate:</strong> {rate}</span> <span>/({count} votes)</span>
          </div>
          <div className="detail__info--price">
            <span><strong>Price:</strong> {price}</span>
          </div>
          <div className="detail__info--description">
            <p><strong>Description</strong> <br />{description}</p>
          </div>
          <div className="detail__info--category">
            <span><strong>category:</strong> {category}</span>
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
