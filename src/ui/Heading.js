import React, { PropTypes } from 'react';

const Heading = ({ title = '' }) => (
  <div className="section-header">
      {title.toUpperCase()}
  </div>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
