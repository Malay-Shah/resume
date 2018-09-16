import React, { PropTypes } from 'react';
import Heading from '../ui/Heading';
import Content from '../ui/Content';

const Education = ({ data }) => {
  const { programTitle, university, duration } = data;
  return (
    <section className="card">
      <Heading title="Education" />
      <Content id="education">
        <div className="education">
          <div className="education-info">
            <div className="title">
              {`${programTitle} @ ${university}`}
            </div>
          </div>
        </div>
        <div className="duration">
          {duration}
        </div>
      </Content>
    </section>
  );
};

Education.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Education;
