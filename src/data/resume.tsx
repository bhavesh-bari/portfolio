import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Bhavesh Bari",
  initials: "BB",
  url: "https://vercel.com/bhavsh-bari-projects",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Software Developer | Full Stack Engineer | Student ",
  summary:
    "I’m a second-year AI & DS Engineering student with hands-on experience in full-stack development. I’ve worked on multiple projects like SmartServe platforms using React, Next.js, Node.js, MongoDB, and MySQL. I’ve also solved over 100+ DSA problems and aim to crack a Google interview within a year. Apart from coding, I enjoy participating in hackathons and continuously learning new technologies like Artificial Intelligence & Data Science and system design.",
  avatarUrl: "https://i.ibb.co/hx9V2smY/profile.png",
  skills: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "Java",
    "C++",
    "Python",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "Postman",
    "Android",
  ],
  codingProfiles: [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/bhavesh-bari/",
      icon: Icons.globe,
      badges: [
        {
          title: "100+ problems solved",
          variant: "secondary",
        },
      ],
    },
    {
      name: "kaggle",
      url: "https://www.kaggle.com/bhavesh-bari",
      icon: Icons.globe,
      badges: [
        {
          title: "Participiate In No of Competitions",
          variant: "secondary",
        },
      ],
    },
    {
      name: "GitHub",
      url: "https://github.com/bhavesh-bari",
      icon: Icons.globe,
      badges: [
        {
          title: "Open Source Contributions",
          variant: "secondary",
        },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bhaveshbari0402@gmail.com",
    tel: "+91 7756856405",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bhavesh-bari",
        icon: Icons.github,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1Fatuv8uQtKIaY0te1lMc8ymLPxqx3MpW/view?usp=sharing",
        icon: Icons.googleDrive,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bhavesh-bari/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bhaveshbari1590",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bhaveshbari0402@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Passion Softwares",
      badges: [],
      href: "https://www.linkedin.com/company/passion-softwares/",
      location: "Remote",
      title: "Full Stack Java Trainee",
      logoUrl: "/passion.png",
      start: "Jan 2024",
      end: "Mar 2024",
      description:
        "Built full-stack web applications using Java, Java Server Page, Apache_Tomcat Server and MySQL. Gained experience in MVC architecture and RESTful API development. Worked on several hands-on assignments and completed final assessment with top feedback.",
    },
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "https://unipune.ac.in",
      degree: "B.E. in Artificial Intelligence & Data Science",
      logoUrl: "./sppu.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "MSBTE - Government Polytechnic Jalgaon",
      href: "https://msbte.org.in",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/diploma.jpg",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "consistency-tracker",
      href: "https://consistency-tracker-phi.vercel.app/",
      dates: "May 2025 - Present",
      active: true,
      description:
        "This is a productivity app designed to help users stay consistent with their personal goals by tracking their progress through daily check-ins, streaks, and rewards. It features a gamified system where users earn coins, unlock ranks, and receive daily motivational quotes to stay motivated and accountable.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Mongoose",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/bhavesh-bari/consistency-tracker",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://consistency-tracker-phi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/consist.png",
    },
    {
      title: "SmartServe (Clients)",
      href: "https://smart-serve-coral.vercel.app/client/explore",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "SmartServe helps clients find and book trusted service providers like electricians, plumbers, and painters. It offers real-time tracking, integrated chat, service history, ratings and feedback, secure online payments, and easy profile management to ensure a seamless and trustworthy service experience.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Mongoose",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/bhavesh-bari/SmartServe",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://smart-serve-coral.vercel.app/client/explore",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/client.png",
    },

    , {
      title: "SmartServe (ServiceProviders)",
      href: "https://smart-serve-coral.vercel.app/service/profile",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "SmartServe enables service providers to manage incoming requests, set up professional profiles, track earnings, and engage in real-time communication with clients. It also offers flexible membership plans, client feedback management, and a secure platform for completing transactions.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Razorpay",
        "Tailwind CSS",
        "Mongoose",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/bhavesh-bari/SmartServe",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://smart-serve-coral.vercel.app/service/profile",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/service.png",
      video: "",
    },
    {
      title: "Full Stack Gmail_Clone",
      href: "https://github.com/bhavesh-bari/Gmail_Clone",
      dates: "Feb 2025",
      active: false,
      description:
        "This Gmail Clone replicates core email functionalities like user authentication, inbox management, composing/sending emails, and features such as Archive, Starred, Snooze, and Search. It provides a responsive and user-friendly interface, delivering a seamless email experience similar to Gmail.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      links: [
        {
          type: "Github",
          href: "https://github.com/bhavesh-bari/Gmail_Clone",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://gmail-clone-sandy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/gmail.png",
      video: "",
    },
    {
      title: "Full Stack E-Banking",
      href: "https://github.com/bhavesh-bari/Ebanking",
      dates: "Jan 2024  - Feb 2024",
      active: false,
      description:
        "This Virtual Banking WebApp simulates real-world banking operations including account creation, balance check, money transfers, deposits, withdrawals, and PIN management. It features a secure login system and an Admin Panel for managing users and tracking transactions, all within a responsive and user-friendly interface.",
      technologies: ["Html", "Javascript", "Java", "MySql", "Bootstrap", "Tomcat Server"],
      links: [
        {
          type: "Github",
          href: "https://github.com/bhavesh-bari/Ebanking",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/Bank.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Intra-College Hackathon 2024",
      dates: "March 2024",
      location: "Pune, Maharashtra",
      description:
        "Built a utility app with my teammate as part of a 2-member team. I handled the complete backend and system design, including notifications and database integration.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
