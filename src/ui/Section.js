import React, { PropTypes } from 'react';

const Section = ({
  color,
  heading,
  subheading,
  children,
}) => {
  const display = heading && subheading ? 'block' : 'none';
  return (
    <div>
      <div style={{ display }}>
        <div style={{
          ...defaultStyles.main,
          backgroundColor: color,
        }}>
          <div style={defaultStyles.heading}>
            {heading}
          </div>
          <div style={defaultStyles.subheading}>
            {subheading}
          </div>
        </div>
      </div>
      <div style={{
        padding: '0.025rem 1.2rem',
      }}>
        {children}
      </div>
    </div>
  );
};

const defaultStyles = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '0.75rem',
    paddingLeft: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
  heading: {
    fontSize: '1.1em',
    fontWeight: '400',
    color: 'white',
  },
  subheading: {
    fontSize: '0.85em',
    color: 'rgba(255,255,255,0.85)',
  },
};

Section.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export default Section;
