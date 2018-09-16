import React, { PropTypes } from 'react';
import Skills from './Skills';
import Heading from '../../ui/Heading';
import Content from '../../ui/Content';

const TechnicalSkills = ({ data }) => (
  <section className="card">
    <Heading title="Technical Skills" />
    <Content id="technical-skills">
      <div id="skills-container">
        {
          Object.keys(data).map((id, key) => (
            <div className="skills" key={key}>
              <Skills data={data[id]} key={key} />
            </div>
          ))
        }
      </div>
    </Content>
  </section>
);

TechnicalSkills.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TechnicalSkills;
