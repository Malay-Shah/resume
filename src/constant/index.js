import tinycolor from 'tinycolor2';

export const COLORS = {
  PRIMARY: () => tinycolor('rgb(5, 51, 102)'),
  SECONDARY: () => tinycolor('rgb(235, 238, 242)'),
};

export const DATA = {
  identity: {
    name: {
      first: 'Malay',
      last: 'Shah',
    },
    program: {
      term: '',
      nickname: 'Computer Science',
      name: 'Computer Science',
    },
  },
  sidebar: {
    interests: [
      'Using Photoshop to develop graphic designs.',
      'Passion for learning new programming languages and using them to produce a product.',
      'Dedication for new movies and songs',
      'Enjoy playing Ping Pong and Volleyball.',
    ],
    education: {
      programTitle: 'BSc in Computer Science',
      university: 'University of Toronto',
      duration: 'September 2016 - Current',
    },
    technicalSkills: {
      languages: {
        title: 'Languages',
        items: [
          'Python',
          'React',
          'JavaScript',
          'HTML/CSS',
          'PostgreSQL',
          'Java',
          'C#',
          'PowerShell',
          'LaTeX',
          'MySQL',
        ],
      },
      frameworks: {
        title: 'Frameworks',
        items: [
          'ASP.NET MVC',
          'Bootstrap',
          'Flask',
          'JUnit'
        ],
      },
      technologies: {
        title: 'Technologies',
        items: [
          'PyCharm',
          'WebStorm',
          'Docker',
          'Git',
          'Visual Studio',
          'Bash',
          'Eclipse',
          'Android Studio',
          'Adobe Suite',
        ],
      },
    },
    links: [{
      display: 'malay.s@outlook.com',
      link: 'mailto:malay.s@outlook.com',
      icon: 'envelope-o',
      className: 'email',
    }, {
      display: 'github.com/malay-shah',
      link: 'https://github.com/malay-shah',
      icon: 'github',
      className: 'github',
    }, {
      display: 'linkedin.com/in/ms-shah',
      link: 'http://ca.linkedin.com/in/ms-shah',
      icon: 'linkedin',
      className: 'site',
    }, {
      display: '1-647-886-5587',
      link: 'tel:+16478865587',
      icon: 'phone',
      className: 'phone-number',
    }],
  },
  main: {
    companies: [{
      name: 'Forma AI',
      title: 'Software Developer',
      range: 'May 2019 - Current',
      location: 'Toronto, Ontario',
      projects: [{
        name: 'Project One',
        tools: [
          'React',
          'Python',
          'PostgreSQL',
          'Node.js',
          'Docker',
        ],
        achievements: [
          'Led a team that refactored legacy code to be abstract and reusable by new clients',
          'Developed a dashboard used by over 200 people on a daily basis',
          'Co-authored Change Management: A system to manage new and updated entries to daily ingested files', 
          'Restructured bulk data download script and reduced execution time by 40 minutes',
        ]
      }],
    }, {
      name:'University Of Toronto',
      title: 'Teacher Assistant',
      range: 'Jan 2019 - Apr 2019',
      location: 'Mississauga, Ontario',
      projects: [{
        name: 'Projects',
        tools: [
          'Python',
          'Data Structures',
        ],
        achievements: [
          'Conducted lab support for CSC148, Introduction to Computer Science',
          'Assisted and mentored students in groups and on individual basis',
        ]
      }],
    }, {
      name: 'Avanade',
      title: 'Full Stack Developer Intern',
      range: 'Summer 2018',
      location: 'Toronto, Ontario',
      projects: [{
        name: 'Projects',
        tools: [
          'C#',
          'HTML/CSS',
          'JavaScript',
          'PowerShell',
          'Python',
          'SQL'
        ],
        achievements: [
          'Developed a user interface which allows employees to monitor their Skype for Business Recording Rights ',
          'Built a REST API that allows IT admins to create and maintain phone extension lines',
          'Revamped the Enterprise Voice Portal Database query which greatly improved the overall applications performance',
          'Created a PowerShell script that uses Microsoft Graph API to query and store the users mailbox permissions on SharePoint',
        ],
      }],
    }, {
      name: 'University of Toronto ',
      title: 'Research Lab Programmer',
      range: 'Jun 2018 - Aug 2018',
      location: 'Mississauga, Ontario',
      projects: [{
        name: 'Projects',
        tools: [
          'Python',
          'Bootstrap',
          'MS Suite',
        ],
        achievements: [
          'Developed a Python script to display a detailed summary of work done by lab members',
          'Aggregated large data and simplifying it using python scripts',
        ],
      }],
    },
  ],
    projects: [{
      name: 'Chequit',
      tools: ['Android', 'Java', 'SQL'],
      demos: [],
      achievements: [
        'Collaborated in a team of 6 people to develop an android application that tracks and manages monthly expenses',
        'Built an interactive and intuitive front-end interface for the app, backed by a SQL database',
        'Implemented multiple compact methods to enhance the run time of the program'
      ],
    }, {
      name: 'Paint Program',
      tools: ['Java', 'Agile', 'Design Pattern', 'Regex','JUnit', 'Git'],
      demos: [],
      github: 'https://github.com/Malay-Shah/PaintProgram',
      achievements: [
        'Developed a paint program that utilizes the Factory and Strategy design patterns',
        'Used Regex to save and load files',
        'Collaborated with other students in a team setting using Agile and Scrum methodologies ',
        'Implemented a UI which allows users to select shapes, colours, and elements inside the canvas'
      ],
    }],
  },
};
``