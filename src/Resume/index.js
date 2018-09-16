import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Identity from './Identity';
import { DATA } from '../constant';

class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <Identity
          name={DATA.identity.name}
          program={DATA.identity.program}
        />
        <div className="left-content">
          <Sidebar data={DATA.sidebar} />
        </div>
        <div className="right-content">
          <Main {...DATA.main} />
        </div>
      </div>
    );
  }
}

export default Resume;
