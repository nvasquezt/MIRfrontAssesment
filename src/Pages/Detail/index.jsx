import React from 'react'
import PropTypes from 'prop-types';

const Detail = (props) => {
  const {title, price, description, category, image, rating} = props;
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
            <h2>{price}</h2>
          </div>
          <div className="detail__info__description">
            <p>{description}</p>
          </div>
          <div className="detail__info__category">
            <h3>{category}</h3>
          </div>
          <div className="detail__info__rating">
            <h3>{rate}</h3>
            <h3>{count}</h3>
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
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// }
export default Detail
