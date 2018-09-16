import React, { PropTypes } from 'react';

const Identity = ({ name, program }) => {
  const { nickname, term } = program;
  return (
    <div className="header card">
      <h1 id="name">
        {name.first}
        <span id="last-name">{name.last}</span>
      </h1>
      <span className="term">{term} {nickname}</span>
    </div>
  );
};

Identity.propTypes = {
  name: PropTypes.object.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;
