// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Priyanshu2425', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Sniffit',
          description:
            'Sniffit is a Tinder-like application designed specifically for dogs owners. The app aims to help pet owners find suitable breeding partners for their dogs and connect with others who might be interested in adopting puppies.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://sniffit-frontend.vercel.app/',
        },
        {
          title: 'Konnect Kitchen',
          description:
            "Konnect Kitchen is an eCommerce store specializing in crockery, which I developed as a freelance project. The store's primary focus is on selling various types of crockery items, catering to customers looking for quality kitchenware and dining accessories.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.konnectkitchen.com/',
        },
        {
          title: 'The Funky Verse',
          description:
            'The Funky Verse is a modern-age clothing eCommerce startup that I worked on as a freelance project. This project involved developing an online platform where users can browse and purchase trendy and fashionable clothing items.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.thefunkyverse.com/',
        },
        // {
        //   title: 'DAASH',
        //   description:
        //     'It is platform designed to facilitate the seamless integration, collection, processing, and visualization of data from various IoT devices. It serves as a unified system that helps organizations leverage IoT data for actionable insights and improved decision-making.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://daash-frontend.vercel.app/',
        // }
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of Priyanshu Semwal',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/semwalpriyanshu/',
    phone: '9315776817',
    email: 'priyanshu24nov@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1IpMO_MpiN9H8fM6_C3KnXxy0g4gCBA8e/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "HTML", "CSS", "Javascript", "Typescript", "React", "Tailwind", "Responsive Web Design", "Node.js",
    "Express.js", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Elastic Search", "Nginx", "AWS S3", "Prisma",
    "Auth", "API Security Practices(MD5, SHA, scrypt, bcrypt)", "Sockets", "Microservices", "System Design"
  ],
  experiences: [
    {
      company: 'ICRISAT',
      position: 'Project Intern',
      from: '1 August, 2023',
      to: '31 August, 2023',
      companyLink: 'https://www.icrisat.org/',
    }
  ],
  
  educations: [
    {
      institution: 'Guru Gobind Singh Indraprastha University',
      degree: 'Bachelor of Technology',
      from: '2020',
      to: '2024',
    }
  ],
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
