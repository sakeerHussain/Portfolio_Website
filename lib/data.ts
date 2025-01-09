import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";

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
    title: "Task Management App",
    description:
      "A full-stack task management application built to streamline project planning and team collaboration. Users can create, assign, and track tasks in real-time. The app also allows teams to manage deadlines, progress, and subtasks efficiently.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Node.js", "Express"],
    imageUrl: corpcommentImg,
  },
  {
    title: "StoreIt",
    description:
    "A full-stack storage management application designed to help users manage their files and folders efficiently. It supports features like file uploads, real-time synchronization, and easy categorization, ensuring seamless access and organization of stored data.",
  tags: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Node.js", "Express"],
    imageUrl: rmtdevImg,
  },

  {
    title: "Employee Management App",
    description:
      "A full-stack web application for managing employees in an organization. The app allows HR teams to add, edit, and remove employee details, track their performance, and manage attendance. It features role-based access, employee search, and reporting functionalities.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Node.js", "Express"],
    imageUrl: wordanalyticsImg,
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


