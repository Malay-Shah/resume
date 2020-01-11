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
      'Passion for learning new programming languages and using them to create products.',
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
          'PHP',
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
      range: 'May \'19 - Current',
      location: 'Toronto, Canada',
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
          'Led a team wide initiative which refactored our sales compensation product\'s legacy code to be abstract and scalable for new and existing clients',
          'Enhanced bulk data download script and reduced execution time by 90% (~ 40 minutes)',
          'Developed a React statistical sales dashboard used by over 200 people on a daily basis', 
          'Established a change management system to manage new and updated daily ingested excel data by building a structured workflow process',
        ]
      }],
    }, {
      name: 'Avanade',
      title: 'Full Stack Developer Intern',
      range: 'Jun \'18 - Aug \'18',
      location: 'Toronto, Canada',
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
          'Developed an in-house user interface which allows employees to manage and modify their Skype for Business recording rights and privileges',
          'Built a REST API that allows IT admins to create and maintain phone extension lines',
          'Made an API endpoint more efficient and scalable by refactoring legacy queries',
          'Created a PowerShell script that uses Microsoft Graph API to query and store the user’s mailbox permissions on SharePoint',
        ],
      }],
    }, {
      name:'University Of Toronto',
      title: 'CS Teacher Assistant',
      range: 'Jan \'19 - Apr \'19',
      location: 'Mississauga, Canada',
      projects: [{
        name: 'Projects',
        tools: [
          'Python',
          'Data Structures',
          'Git',
        ],
        achievements: [
          'Conducted lab support for CSC148, Introduction to Computer Science',
          'Assisted and mentored students in groups and on individual basis to learn fundamental computer science concepts such as OO programming, data structures, and algorithms',
        ]
      }],
    }, {
      name: 'University of Toronto ',
      title: 'Research Lab Programmer',
      range: 'Jun \'18 - Aug \'18',
      location: 'Mississauga, Canada',
      projects: [{
        name: 'Projects',
        tools: [
          'Python',
          'Bootstrap',
          'MS Suite',
        ],
        achievements: [
          'Automated the viewing of detailed lab work summaries for students and professors by creating a daily python script',
          'Aggregated large excel data sets and performed data analysis to gather valuable user insights',
        ],
      }],
    },
  ],
    projects: [{
      name: 'Chequit',
      tools: ['Android', 'Java', 'SQL', 'Agile', 'Git'],
      demos: [],
      github: {
        icon: 'credit-card',
      },
      achievements: [
        'Collaborated in a team of 6 to develop an android app to track and manage monthly expenses',
        'Built an interactive and intuitive front-end interface for the app, backed by a SQL database',
        'Implemented multiple compact methods to enhance the run time of the program'
      ],
    }, {
      name: 'Paint Program',
      tools: ['Java', 'Agile', 'Design Pattern', 'Regex','JUnit', 'Git'],
      demos: [],
      github: {
        icon: 'github',
        link: 'https://github.com/Malay-Shah/PaintProgram'
      },
      achievements: [
        'Developed a paint program that utilized the Factory and Strategy design patterns',
        'Implemented a UI which allows user to select shapes, colours, and elements inside the canvas',
        'Collaborated with other students in a team setting using Agile and Scrum methodologies '
      ],
    }],
  },
};
``