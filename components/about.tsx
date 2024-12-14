"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working as a{" "}
        <span className="font-medium">robotics instructor</span>, I discovered
        my true passion for programming and decided to make a career shift. I
        enrolled in a coding bootcamp where I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming{" "}</span>
        is solving complex problems—the thrill of breaking down challenges and
        finding elegant solutions keeps me motivated. My core stack includes{" "}
        <span className="font-medium">React, Node.js, Express and MongoDB,{" "}</span>
        and I am also familiar with TypeScript and Next.js. I am always eager to
        learn new technologies and apply them to create impactful solutions. Currently, I am seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and reading. My curiosity extends beyond tech__{" "}
         I am currently exploring{" "}
        <span className="font-medium">history and philosophy</span>.
      </p>
    </motion.section>
  );
}
