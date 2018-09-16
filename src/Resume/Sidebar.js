import React, { PropTypes } from 'react';
import TechnicalSkills from './TechnicalSkills';
import ContactLinks from './ContactLinks';
import Education from './Education';
import Interests from './Interests';

const Sidebar = ({ data }) => (
  <section>
      <div>
        <ContactLinks data={data.links} />
        <TechnicalSkills data={data.technicalSkills} />
      </div>
      <div>
        <Interests data={data.interests} />
      </div>
      <div>
        <Education data={data.education} />
      </div>
  </section>
);

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;
