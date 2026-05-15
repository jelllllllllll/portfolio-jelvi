import { Database, Code2, Globe } from "lucide-react";
import project1Img from "./assets/project1.png";
import project2Img from "./assets/project2.png";
// 1. DATA PROFIL KAMU
export const profileData = {
  name: "Jelvinlon",
  status: "Available for Internship",
  bio: "A passionate developer and continuous learner, currently exploring the depths of modern web development. I love building practical solutions—from data automation to scalable web systems—and I'm always eager to master new technologies.",
  
  // Masukkan link asli kamu di sini:
  links: {
    github: "https://github.com/jelllllllllll", 
    linkedin: "https://www.linkedin.com/in/jelvinlon-brilliando/",
    email: "mailto:jelvinlonb@gmail.com",
    cvUrl: "https://drive.google.com/file/d/10x8cVSpmhAGmo6LMAqH_5lUdJzzGlXuX/view?usp=drive_link" // Masukkan link Google Drive CV kamu di sini
  }
};

// 2. DATA PROYEK KAMU
// Kalau mau tambah proyek baru, cukup copy-paste salah satu blok di bawah ini
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
  {
    id: 3,
    title: "ERP Management System",
    description: "A full-featured enterprise resource planning deployment with custom Frappe apps, tailored roles, and deep workflow automation.",
    tags: ["ERPNext", "Frappe", "Web"],
    icon: <Globe size={22} />,
    accent: "#9E8E7E",
    accentLight: "#F5F1EE",
    delay: 240,
  },
];