import React, { PropTypes } from 'react';
import radium from 'radium';

const Container = ({ children }) => (
  <div>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default radium(Container);
