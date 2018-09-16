import React, { PropTypes } from 'react';

const Content = ({ children, className = '', id }) => (
  <div className={`section-content ${className}`} id={id}>
      {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Content;
