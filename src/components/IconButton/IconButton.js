import React from 'react';
import './IconButton.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </button>
);
IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

export default IconButton;
