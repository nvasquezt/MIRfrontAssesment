import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { name, type, handleClick, ...rest}= props
  return (
    <button type={type} onClick={handleClick} {...rest}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func
}
export default Button;
