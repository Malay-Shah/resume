import React, { PropTypes } from 'react';

const Skills = ({ data }) => {
  const { title, items } = data;

  return (
    <section>
      <div className="skill">
        {title}
      </div>
      <div className="skill-items" style={style.main}>
        {items.map((item, key) => (
          <div key={key} style={style.skill}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  skill: {
    flexBasis: '50%',
    marginTop: '0.2em',
  },
};

Skills.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Skills;
