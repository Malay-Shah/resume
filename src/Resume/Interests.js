import React, { PropTypes } from 'react';
import Heading from '../ui/Heading';
import Content from '../ui/Content';

const Interests = ({ data }) => {
  return (
    <section className="card">
      <Heading title="Interests" />
      <Content id="interests">
        <div className="interests">
          <div className="interests-info">
              {
                data.map((interest, i) => (
                  <div key={i} style={style.interest}>
                    {interest}
                  </div>
                ))
              }
          </div>
        </div>
      </Content>
    </section>
  );
};

const style = {
  interest: {
    marginTop: '0.8rem',
  },
};

Interests.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Interests;
