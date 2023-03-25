import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="icon-button" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
    // обязательный атрибут доступности aria-label для IconButton, без него в консоли выдает ошибку,
    // те когда есть когда есть кнопка на которой ничего не написано
    // далее обязательно распыляем через {...allyProps}
};

export default IconButton;