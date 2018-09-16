import React, { PropTypes } from 'react';
import List from '../../ui/List';
import ProjectDemos from './ProjectDemos';
import ProjectHeading from './ProjectHeading';

const Project = ({
  className = '',
  name = '',
  tools = [],
  demos = [],
  links = [],
  github,
  achievements,
}) => {
  const items = isEmpty(demos) ? achievements : [
    ...achievements, <ProjectDemos data={demos} />,
  ];
  return (
    <div className={className}>
      <ProjectHeading name={name} tools={tools} github={github}/>
      <div className="info">
        <List items={items} links={links}/>
      </div>
    </div>
  );
};

function isEmpty(array) {
  return array.length === 0;
}

Project.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  github: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string),
  tools: PropTypes.arrayOf(PropTypes.string),
  achievements: PropTypes.array.isRequired,
  demos: PropTypes.arrayOf(PropTypes.string),
};

export default Project;
