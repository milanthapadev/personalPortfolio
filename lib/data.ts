import React from "react";
import { FaReact } from "react-icons/fa";
import dimawebsite from "@/public/dimaacademy.png";
import maddatiwebsite from "@/public/maddati.png";
import gitfinder from "@/public/gitfinder.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Blog",
    hash: "/posts",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Developer (Real TIme Solutions Pvt. Ltd.)",
    location: "Lalitpur, Nepal",
    description:
      "I worked as a Junior Software Developer in this company. I also upskilled to the full stack.",
    icon: React.createElement(FaReact),
    date: "11/2020 - 12/2021",
  },
  {
    title: "Full-Stack Developer (Maddati Tech Pvt. Ltd.)",
    location: "Kathmandu, Nepal",
    description:
      "I'm now a full-stack developer working as a full-time. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "12/2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "DIMA Academy Website",
    description:
      "I designed and built the website for DIMA Academy, seamlessly highlighting their courses and academic prowess.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Custom CMS"],
    imageUrl: dimawebsite,
  },
  {
    title: "Maddati Tech Website",
    description:
      "I developed the website for Maddati Tech Pvt Ltd, showcasing their tech expertise and services.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: maddatiwebsite,
  },
  {
    title: "Git Repo Finder",
    description:
      "I created a user-friendly Git Repo Finder website using React, Git API, Redux, and enhanced it with sorting and filtering capabilities",
    tags: ["React", "Git Api", "Tailwind", "Redux"],
    imageUrl: gitfinder,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
