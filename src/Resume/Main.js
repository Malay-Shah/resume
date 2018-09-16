import React, { PropTypes } from 'react';
import Heading from '../ui/Heading';
import Project from './Project';
import Section from '../ui/Section';
import Content from '../ui/Content';
import * as Constant from '../constant';

// http://paletton.com/#uid=13C0u0k6bKi00++12WefxtSqTml

const Main = ({ companies, projects, volunteeringExperience }) => (
  <div>
    <section className="card">
      <Heading title="Employment" />
      <Content id="employment">
          {
            companies.map((company, i) => {
              return (
                <div className="employment" key={i}>
                  <Section
                    heading={`${company.name}`}
                    subheading={`${company.location} | ${company.range}`}
                    color={Constant.COLORS.PRIMARY().toString()}
                  >
                    {
                      (company.projects || []).map((project, j) => {
                        return (
                          <Project
                            className="employment-info"
                            name={company.title}
                            links={project.links || []}
                            tools={project.tools}
                            achievements={project.achievements}
                            demos={project.demos}
                            github={project.github}
                            key={j}
                          />
                        );
                      })
                    }
                  </Section>
                </div>
              );
            })
          }
      </Content>
    </section>
    <section className="card">
      <Heading title="Projects" />
      <Content id="projects">
        {
          projects.map((project, i) => (
            <div className="project" key={i}>
              <Section
                color={Constant.COLORS.PRIMARY().toString()}
              >
                <Project
                  className="project-info"
                  name={project.name}
                  tools={project.tools}
                  achievements={project.achievements}
                  demos={project.demos}
                  github={project.github}
                  />
              </Section>
            </div>
          ))
        }
      </Content>
    </section>
  </div>
);

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
