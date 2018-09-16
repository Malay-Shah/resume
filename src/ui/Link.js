import React, { PropTypes } from 'react';

const Link = ({ to, children, style }) => {
  return (
    <a href={to} style={{
      ...style,
    }}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Link;
