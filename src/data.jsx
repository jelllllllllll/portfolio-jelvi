import { Database, Code2, Globe } from "lucide-react";
import project1Img from "./assets/project1.png";
import project2Img from "./assets/project2.png";

export const profileData = {
  name: "Jelvinlon",
  status: "Available for Internship",
  bio: "A passionate developer and continuous learner, currently exploring the depths of modern web development. I love building practical solutions—from data automation to scalable web systems—and I'm always eager to master new technologies.",
  
  links: {
    github: "https://github.com/jelllllllllll", 
    linkedin: "https://www.linkedin.com/in/jelvinlon-brilliando/",
    email: "mailto:jelvinlonb@gmail.com",
    cvUrl: "/CV_Jelvi.pdf"
  }
};

export const projectsData = [
  {
    id: 1,
    title: "F1 Shop",
    description: "Developed a centralized marketplace for F1 enthusiasts, streamlining the shopping experience by aggregating official merchandise and unique creator goods into a single trusted destination. I was tasked with developing the backend of the project.",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js + Express API", "Railway", "Vercel"],
    icon: <Database size={22} />,
    accent: "#C9A96E",
    accentLight: "#FDF6EC",
    delay: 0, // Waktu delay animasi (biarkan 0 untuk proyek pertama)
    image: project1Img,
    link: "https://f1s-shop.vercel.app/",
  },
  {
    id: 2,
    title: "FinSight",
    description: "A personal web application developed to learn UI/UX, responsive design, and full stack development process. Implemented JWT Authentication and simple CRUD backend.",
    tags: ["React.js", "Node.js", "MongoDB Atlas", "Express", "JWT","Axios","Vercel"],
    icon: <Code2 size={22} />,
    accent: "#8E9E7E",
    accentLight: "#F2F5EF",
    delay: 120, // Animasi muncul lebih lambat 120ms
    image: project2Img,
    link: "https://finsight-jb.vercel.app/",
  },
];