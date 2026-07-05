export interface ResumeItem {
  text: string;
}

export interface ResumeEntry {
  title: string;
  date: string;
  subtitle?: string;
  location?: string;
  items?: ResumeItem[];
  notes?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string;
}

export interface ResumeData {
  name: string;
  phone: string;
  email: string;
  emailHref: string;
  linkedin: string;
  linkedinHref: string;
  github: string;
  githubHref: string;
  experience: ResumeEntry[];
  skills: SkillCategory[];
  education: ResumeEntry[];
  projects: ResumeEntry[];
}

export const resume: ResumeData = {
  name: 'Yash Aggarwal',
  phone: '+91 70180-25565',
  email: 'aggarwalyash22623@gmail.com',
  emailHref: 'mailto:aggarwalyash22623@gmail.com',
  linkedin: 'LinkedIn',
  linkedinHref: 'https://www.linkedin.com/in/yash-aggarwal-76a2851ba/',
  github: 'Github',
  githubHref: 'https://www.github.com/Ya-s-h',
  experience: [
    {
      title: 'Analyst',
      date: 'Dec 2025 -- Present',
      subtitle: 'Ernst and Young LLP',
      location: 'Gurugram, Haryana',
      items: [
        { text: 'Automated end-to-end tax compliance workflows by engineering Python pipelines (Polars, FastExcel), reducing manual data preparation time by <strong>300+ hours</strong> annually.' },
        { text: 'Architected high-speed data transformation engines to process large-scale datasets (<strong>50K+ rows/file</strong>), ensuring 100% accuracy in compliance-ready Excel outputs.' },
        { text: 'Developed <strong>intelligent rule-based logic</strong> for automated tax categorization and conditional remark generation, eliminating human error in sensitive compliance reporting.' },
        { text: 'Optimized data integrity by building robust reconciliation modules and exception-handling checks to flag mismatches across disparate tax datasets.' },
        { text: 'Engineered resilient automation scripts capable of <strong>parsing irregular "real-world" Excel structures</strong>, including merged cells and inconsistent formatting.' },
        { text: 'Streamlined <strong>multi-source consolidation</strong> by implementing automated lookups and merging workflows, minimizing manual intervention in final report generation.' },
      ],
    },
    {
      title: 'Software Developer',
      date: 'Jan 2024 -- Dec 2025',
      subtitle: 'Lyxel labs private limited',
      location: 'Gurugram, Haryana',
      items: [
        { text: 'Developed and revamped Weavr Sense by integrating <strong>cross-server databases</strong> via custom REST APIs, improving <strong>data retrieval speed by 25%</strong> through MongoDB query optimization.' },
        { text: 'Led development of MongoDB models and scrapers in the automation pipeline.' },
        { text: 'Developed scalable serverless features and automated data handling tasks in a Linux environment using Redis and Celery using managed API endpoints.' },
        { text: 'Streamlined scraping pipelines using Celery and Python, <strong>reducing manual effort by 40%</strong> while ensuring robust version control via Git.' },
        { text: 'Designed secure registration/login APIs with security and data protection best practices, ensuring normalized data storage (1NF/2NF).' },
        { text: 'Mentored 3 interns and assisted in knowledge transfer for backend architecture and CI/CD practices.' },
      ],
    },
    {
      title: 'Backend Developer',
      date: 'Mar 2023 -- Aug 2023',
      subtitle: 'Freelancer',
      location: 'Remote',
      items: [
        { text: 'Developed a scalable Inventory Management System using NodeJS, MongoDB, and ExpressJS.' },
        { text: 'Ensured optimized CRUD operations, contributing to 35% faster inventory updates.' },
        { text: 'Implemented <strong>role-based access control</strong>.' },
        { text: 'Integrated NodeMailer for automated notifications added full user-action logging.' },
        { text: 'Delivered end-to-end development of features and integrated NoSQL storage solutions efficiently.' },
      ],
    },
  ],
  skills: [
    { category: 'Languages', skills: 'Python (Expert), JavaScript, Shell Scripting, SQL, MongoDB' },
    { category: 'Frameworks', skills: 'FastAPI, Flask, Falcon, NodeJS, ExpressJS' },
    { category: 'Data Engineering', skills: 'Polars, pandas, NumPy, FastExcel, PyExcelerate' },
    { category: 'Cloud/DevOps', skills: 'Git, Linux' },
    { category: 'Tools', skills: 'VSCode, PyCharm, GitHub CoPilot' },
  ],
  education: [
    {
      title: 'Bennett University',
      date: 'Sep. 2020 -- Jun 2024',
      subtitle: 'Bachelor of technology in Computer Science and Engineering',
      location: 'Greater Noida, Uttar Pradesh',
      notes: ['Content Writer IEEE BU, 2020 to 2021', '8.9 CGPA'],
    },
  ],
  projects: [
    {
      title: 'SMTP Honeypot',
      date: 'Mar 2023',
      subtitle: 'Python, smtpd, Async',
      items: [
        { text: 'Developed a honeypot server using Python and the smptd library.' },
      ],
    },
    {
      title: 'Twitch Watcher Discord Bot',
      date: 'Jan 2023 -- Feb 2023',
      subtitle: 'Docker, Python, Discord, Requests',
      items: [
        { text: 'Built a bot to streamline server interactions and RLCS loot acquisition.' },
        { text: 'Deployed using Docker for isolated, consistent performance.' },
      ],
    },
    {
      title: 'Remote Intensive Care Application',
      date: 'Oct 2021 -- Dec 2021',
      subtitle: 'Python, Flask, SQLite, Pytest',
      items: [
        { text: 'Built a web-based ICU system using agile methods, boosting efficiency by 30%.' },
        { text: 'Optimized database queries and schema to improved data retrieval speed by 40%, enhancing overall performance of the web application.' },
        { text: 'Used Pytest to develop and execute comprehensive test suites for API testing, ensuring functionality, reliability, and performance of RESTful services' },
      ],
    },
  ],
};
