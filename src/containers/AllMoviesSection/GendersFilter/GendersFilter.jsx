import React from 'react';
import PropTypes from 'prop-types';

export default function GendersFilter({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

GendersFilter.propTypes = {
  children: PropTypes.node.isRequired,
};
