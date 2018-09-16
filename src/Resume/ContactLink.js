import React, { PropTypes } from 'react';
import Link from '../ui/Link';
import { Icon } from 'react-fa';

const ContactLink = ({
  className,
  display,
  link,
  icon,
}) => (
  <div className={className} style={style.main}>
    <Icon name={icon} style={style.icon} />
    <Link to={link}>
      {display}
    </Link>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: '0.6em',
    width: '1em',
    color: '#053366',
  },
};


ContactLink.propTypes = {
  className: PropTypes.string,
  display: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ContactLink;
