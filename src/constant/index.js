import tinycolor from 'tinycolor2';

export const COLORS = {
  PRIMARY: () => tinycolor('rgb(5, 51, 102)'),
  SECONDARY: () => tinycolor('rgb(235, 238, 242)'),
};

export const DATA = {
  identity: {
    name: {
      first: 'Mandish',
      last: 'Shah',
    },
    program: {
      term: '',
      nickname: 'Computer Engineering',
      name: 'Computer Engineering',
    },
  },
  sidebar: {
    interests: [
      'Cricket; Represented Toronto as the leader of its Cricket Team inside the United Kingdom, circa 2012.',
      'Enthusiastic League of Legend player; Ranked in the top 2% of NA.',
      // 'Love hiking and learning photography.',
      'Enjoy playing Ping Pong and Volleyball.',
    ],
    education: {
      programTitle: 'BASc in Computer Engineering',
      university: 'University of Waterloo',
      duration: 'September 2013 - 2018',
    },
    technicalSkills: {
      languages: {
        title: 'Languages',
        items: [
          'JavaScript',
          'HTML/CSS',
          'GraphQL',
          'Hack',
          'Java',
          'PHP',
          'C#',
          'C/C++',
          'BASH',
          'SQL',
        ],
      },
      frameworks: {
        title: 'Frameworks',
        items: [
          'Node.js',
          'Redux',
          'Express',
          'Koa.js',
          'Angular',
          'Bootstrap',
          'Relay',
          'Ruby on Rails',
          'Ember',
          // 'Sails',
          'Scrum',
          'Mocha',
        ],
      },
      libraries: {
        title: 'Libraries',
        items: [
          'React',
          'jQuery',
          'Ramda',
          'Immutable',
          'Chai',
          // 'Basscss',
          'Underscore',
        ],
      },
      technologies: {
        title: 'Technologies',
        items: [
          'UNIX',
          'Git',
          'Mercurial',
          'Jenkins',
          'Webpack',
          'Gulp',
          'MongoDB',
          'Redis',
        ],
      },
    },
    links: [{
      display: 'mandishshah@outlook.com',
      link: 'mailto:mandishshah@outlook.com',
      icon: 'envelope-o',
      className: 'email',
    }, {
      display: 'github.com/mandishshah',
      link: 'https://github.com/mandishshah',
      icon: 'github',
      className: 'github',
    }, {
      display: 'linkedin.com/in/mandishshah',
      link: 'http://ca.linkedin.com/in/mandishshah',
      icon: 'linkedin',
      className: 'site',
    }, {
      display: '1-650-505-4988',
      link: 'tel:+16505054988',
      icon: 'phone',
      className: 'phone-number',
    }],
  },
  main: {
    companies: [{
      name: 'Facebook',
      title: 'Front End Engineering Intern',
      range: 'Fall 2017',
      location: 'Menlo Park, California',
      projects: [{
        name: 'Projects',
        tools: [
          'ES2015',
          'React',
          'Redux',
          'GraphQL',
          'Relay',
          'XHP',
          'Hack',
          'EntQL',
        ],
        links: [
          'https://fburl.com/b2p0k8kb',
          '',
          'https://fburl.com/v4g4bbg1',
        ],
        achievements: [
          'Developed a feature that allowed Pixelcloud (PXC) users to browse individual artboards on their Sketch uploads',
          // 'Developed an artboard drawer for the Semaphore view',
          // 'Implemented a feature that allowed users to view PXC projects as a slideshow presentation',
          // 'Built a feature to view Pixelcloud Projects as slideshow presentations in full screen (https://fburl.com/v4g4bbg1)',
          'Implemented a full screen presentation feature for PXC photo and sketch posts',
          'Built a feature to view Pixelcloud Projects in a full-screen slideshow presentations mode',
        ],
      }],
    }, {
      name: 'FutureAdvisor ',
      title: 'Software Engineering',
      range: 'Winter 2017',
      location: 'San Francisco, California',
      projects: [{
        name: 'Projects',
        tools: [
          'ES2015',
          'React',
          'Redux',
          'Backbone',
          'Marionette',
          'Ruby on Rails',
        ],
        achievements: [
          'Implemented a roboust infrastructure to streamline the asset pipeline for multiple partners',
          'Refactored the existing dashboard to move towards a mobile first approach',
          'Migrated existing Backbone components to more test friendly React components',
          'Developed a referral feature that used incentives as a means to drive adoption',
        ],
      }],
    }, {
      name: 'Rangle.io',
      title: 'Full Stack JavaScript Developer',
      range: 'Summer 2016',
      location: 'Toronto, Ontario',
      projects: [{
        name: 'Atlas',
        tools: [
          'React',
          'Immutable',
          'Webpack',
          'Basscss',
          'Koa',
        ],
        achievements: [
          'Developed a platform (Atlas) to help Rangle.io managers staff project teams',
          'Refactored business logic on Atlas to reduce JavaScript execution time by 50%',
          'Migrated the build infrastructure of Rangle.io\'s official website from Gulp to Jekyll',
          'Implemented the TimeOff feature on Atlas to help Ranglers book vacations',
        ],
      }],
    }, {
      name: 'Genesys',
      title: 'Front End Development Intern',
      range: 'Fall 2015',
      location: 'Markham, Ontario',
      projects: [{
        name: 'Pulse Dashboard',
        tools: [
          'Angular',
          'Underscore',
          'Mercurial',
          'Jasmine',
          'Protractor',
        ],
        achievements: [
          'Developed Pulse Dashboard to expose a unified UI for Genesis products',
          'Introduced cache layer to the dashboard, reducing widget load times by over 2 seconds',
          'Created a proxy that bypassed CORS to streamline QA automated testing',
        ],
      }],
    }, {
      name: 'Ontario Teachers\' Pension Plan',
      title: 'Programmer Analyst',
      range: 'Winter 2015',
      location: 'Toronto, Ontario',
      projects: [{
        name: 'Projects',
        tools: ['C#', 'JavaScript', 'Angular', 'Jenkins', 'SharePoint', 'Gulp'],
        achievements: [
          'Built a user interface to display employee access rights to company products',
          'Wrote a .NET syncing service that uses diffing to intuitively update SharePoint data',
        ],
      }],
    },
    // {
    //   name: 'Toronto District School Board',
    //   title: 'Website Production Support',
    //   range: 'Summer 2014',
    //   location: 'Toronto, Ontario',
    //   projects: [{
    //     name: 'Projects',
    //     tools: ['ASP.NET', 'DNN', 'C#', 'MySQL'],
    //     achievements: [
    //       'Wrote a DotNetNuke (DNN) module to filter and display school summer camps',
    //       'Created an admin interface to modify, remove, and add summer camps',
    //       'Helped develop DNN templates that were made available to all TDSB schools',
    //     ],
    //   }],
    // }
  ],
    projects: [{
      name: 'LOLQueen - League of Legends',
      tools: ['React', 'Redux', 'Immutable', 'Ramda', 'Sinon', 'Enzyme'],
      demos: [],
      github: 'https://github.com/LOLQueen',
      achievements: [
        'Created a front-end to display recent Summoner match history',
        'Implemented back-end services to query and transform RIOT API data',
      ],
    }, {
      name: 'NitPik - Hack the North 2016',
      tools: ['ES2015', 'React', 'Redux', 'Redux-Saga', 'Reselect'],
      demos: [],
      github: 'https://github.com/whciboys',
      achievements: [
        'A social platform that lets facebook friends give each other anonymous feedback',
      ],
    }],
  },
};
