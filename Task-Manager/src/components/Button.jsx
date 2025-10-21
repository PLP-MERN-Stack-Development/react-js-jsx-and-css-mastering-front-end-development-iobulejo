import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, children, onClick }) => {
  const className = `btn ${variant}`;
  return <button className={className} onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
