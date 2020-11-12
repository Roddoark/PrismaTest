import React from 'react';
import PropTypes from 'prop-types';

import './Label.css';

export default function Label({ children, Cfor }) {
  return (
    <label className="label mr-10" htmlFor={Cfor}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  Cfor: PropTypes.string.isRequired,
};
