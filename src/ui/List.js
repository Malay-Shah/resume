import React, { PropTypes } from 'react';

const List = ({ items, links }) => (
  <ul className="list">
    {items.map((item, key) => (
      <li key={key}>
        {item} {links[key] && (
          <a href={links[key]} style={{fontWeight: 400}}>
            ({links[key]})
          </a>
        )}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  links: PropTypes.array,
};

export default List;
