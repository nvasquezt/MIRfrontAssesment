import React from 'react';
import PropTypes from 'prop-types';

const ProducCard = (props) => {
  const { image, title } = props;
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

ProducCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ProducCard
