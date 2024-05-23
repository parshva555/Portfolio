import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import yelpcampImg from '@/public/yelpcamp.png'
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ACM Cloud Computing Co-head",
    location: "Symbiosis Institute of Technology, Pune",
    description:
      "Fostered collaboration with industry experts and professionals in the cloud computing domain to bring real-world insights and perspectives to ACM members.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 - Present",
  },
  {
    title: "Acmegrade Machine Learning Intern",
    location: "Remote Mode",
    description:
      " Interned at Acemgrade, gaining practical AI experience in data analysis, machine learning, and neural networks,contributing to real-world AI solutions and honing problem-solving skills.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - April 2023",
  },
] as const;

export const projectsData = [
  {
    title: "SignArity",
    description:
      "SignArity is an immersive platform for learning sign language that makes use of AR and AI recognition modules. ",
    tags: ["React", "Machine Learning", "SQL", "Bootstrap", "Augmented Reality"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "QuickPick",
    description:
      "QuickPick is an Online Retail Management System to facilitate smooth and user-friendly online retail operations.",
    tags: ["React", "Bootstrap", "Nodejs", "SQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Yelp-Camp",
    description:
      "YelpCamp is essentially a web application that allows users to view, create, and review campgrounds.",
    tags: ["HTML", "Express", "MongoDB", "CSS", "Passport.js"],
    imageUrl:yelpcampImg,
  },
  {
    title: "Photo-Pulse",
    description:
      " A sleek social media platform enabling seamless photo sharing and having functionalities such as user following, and search for posts for a rich, engaging experience. ",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C++",
  "MongoDB",
  "Redux",
  "php",
  "AWS",
  "Express",
  "SQL",
  "Java",
  "Bootstrap",
  "Framer Motion",
  "Docker"
] as const;