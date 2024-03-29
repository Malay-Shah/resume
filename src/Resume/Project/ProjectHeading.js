import React, { PropTypes } from 'react';
import { Icon } from 'react-fa';
import Radium from 'radium';
import * as Constant from '../../constant';
import * as Bass from 'basscss-radium';

const ProjectHeading = ({
  name,
  tools,
  github,
}) => {
  return (
    <div style={style.main}>
      <ProjectName github={github} name={name} />
      <div style={style.tools}>
        {
          tools.map((tool, i) => (
            <Tool name={tool} key={i}/>
          ))
        }
      </div>
    </div>
  );
};

const Tool = ({ name }) => {
  return (
    <div style={{
      backgroundColor: Constant.COLORS.SECONDARY(),
      marginLeft: '0.25rem',
      padding: '0.1rem 0.5rem',
      ...Bass.rounded,
    }}>
      { name }
    </div>
  );
};

const ProjectName = ({ github, name }) => {
  if (github) {
    if (github.link){
      return (
        <a href={github.link} style={style.name}>
          <Icon name={github.icon} style={{
            color: '#053366',
            paddingRight: '0.5rem',
          }}/>
          {name}
        </a>
      );
    } else {
      return (
        <div style={style.name}>
          <Icon name={github.icon} style={{
              color: '#053366',
              paddingRight: '0.5rem',
            }}/>
            {name}
        </div>
      );
    }
    
  }

  return (
    <div style={style.name}>
      {name}
    </div>
  );
};

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '0.8rem',
  },
  name: {
    fontSize: '1.1em',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: Constant.COLORS.PRIMARY().darken(15),
  },
  tools: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: Constant.COLORS.PRIMARY().lighten(15),
    display: 'flex',
  },
};

ProjectHeading.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Radium(ProjectHeading);
