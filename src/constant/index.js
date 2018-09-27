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
          'Java',
          'C#',
          'C/C++',
          'Python',
          'PowerShell',
          'LaTeX',
          'HTML/CSS',
          'Haskell',
          'Racket',
          'JavaScript',
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
          'Git',
          'Visual Studio',
          'Bash',
          'Eclipse',
          'Android Studio',
          'Adobe Suite',
          'MS Suite',
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
          'Powershell Scripting',
          'Python',
          'SQL'
        ],
        achievements: [
          'Developed a web app to assist Avanade IT support team reduce number of tickets',
          'Built a REST API that can be easily implemented into other applications',
          'Updated an outdated Phone Number Portal to use modern technologies and increase run time by over 50%',
          'Created PowerShell script that uses Microsoft Graph API to update workflow on Sharepoint'
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
          'Aggregating large data and simplifying it using python scripts',
        ],
      }],
    }, {
      name: 'West Humber Collegiate Institute',
      title: 'Yearbook Volunteer',
      range: 'Sept 2015 - Mar 2016',
      location: 'Toronto, Ontario',
      projects: [{
        name: 'Projects',
        tools: [
          'Adobe Suite'
        ],
        achievements: [
          'Worked in a team to produce the 2015-2016 West Humber CI yearbook used by over 500 Students',
          'Performed well under pressure and was able to multi-task',
        ],
      }],
    }
  ],
    projects: [{
      name: 'Xpenses',
      tools: ['Android API', 'Java', 'Sql'],
      demos: [],
      github: 'https://github.com/Malay-Shah/Expense_Tracker',
      achievements: [
        'Developed an Android application that tracks and sorts the monthly expenses according to various categories',
        'Built an interactive and intuitive front-end interface for the app, backed by a SQL database',
        'Implemented multiple compact methods to enhance the run time of the program'
      ],
    }, {
      name: 'Paint Program',
      tools: ['Java', 'Agile', 'Design Pattern', 'Regex','JUnit', 'Git'],
      demos: [],
      github: 'https://github.com/Malay-Shah/PaintProgram',
      achievements: [
        'Developed a working paint Java program that used the Factory and Strategy design patterns',
        'Used Regex to save and load a file',
        'Collaborated with other students in a team setting using Agile and Scrum methodologies ',
        'Implemented an UI which allows users to select shapes, colours and elements inside the canvas'
      ],
    },
    {
      name: 'Jug Puzzle',
      tools: ['Java', 'Agile', 'JUnit', 'Swing', 'Git'],
      demos: [],
      github: 'https://github.com/Malay-Shah',
      achievements: [
        'Developed a Java application that allows a user to solve the water pouring puzzle',
        'Implemented a UI using Swing that visually represents the quantity of water in each jug',
        'Thoroughly tested the app using the JUnit test framework'
      ],
    },
    {
      name: 'Compression Program',
      tools: ['Python'],
      demos: [],
      github: 'https://github.com/Malay-Shah',
      achievements: [
        'A compression program made using Python, that utilizes the Huffman algorithm',
        'Able to reduce size of text files by over 50%'
      ],
    }],
  },
};
