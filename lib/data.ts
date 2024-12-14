import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Web Developer Bootcamp",
    location: " Stack Up Learning Hub, Trivandrum, India",
    description:
      "During this intensive 8-month program, I gained in-depth knowledge of full-stack web development. The curriculum emphasized practical, hands-on learning, covering core technologies like React for building interactive UIs, Node.js and Express for server-side development, and MongoDB for managing databases.",
    icon: React.createElement(FaLaptopCode),
    date: "2023 - 2024",
  },
  {
    title: "Robotics Instructor",
    location: "Tiswara Learn Tech Pvt Ltd, Kollam, India",
    description:
      "Worked as a robotics instructor, teaching students about robotics, programming, and problem-solving. This role deepened my interest in technology and programming, leading to my transition into full-stack web development.",

    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { name: "HTML", img: "/skills/html.svg" },
  { name: "CSS", img: "/skills/css.svg" },
  { name: "JavaScript", img: "/skills/js.svg" },
  { name: "TypeScript", img: "/skills/ts.svg" },
  { name: "React", img: "/skills/react.svg" },
  { name: "Next.js", img: "/skills/Next-icon.svg" },
  { name: "Node.js", img: "/skills/nodejs.svg" },
  { name: "Tailwind", img: "/skills/Tailwind-icon.svg" },
  { name: "Redux", img: "/skills/redux.svg" },
  { name: "Express", img: "/skills/express.svg" },
  { name: "MongoDB", img: "/skills/mongodb.svg" },
  { name: "My Sql", img: "/skills/mysql.svg" },
  { name: "Git", img: "/skills/github.svg" },
] as const;


