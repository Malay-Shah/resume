import React, { PropTypes } from 'react';
import ContactLink from './ContactLink';
import Heading from '../ui/Heading';
import Content from '../ui/Content';

const ContactLinks = ({ data: links }) => (
  <section className="card">
    <Heading title="Contact" />
    <Content>
      <div className="contact">
        {
          links.map((link, key) => (
            <ContactLink
              className={link.className}
              display={link.display}
              key={key}
              link={link.link}
              icon={link.icon}
            />
          ))
        }
      </div>
    </Content>
  </section>
);

ContactLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactLinks;
