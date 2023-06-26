"use client";
import Image from "next/image";
import Logos from "./components/logos";
import profile from "../public/profile_pic.png";
import arduino from "../public/arduino-seeklogo.com 1.png";
import blender from "../public/blender_icon_128x128 1.png";
import davinci from "../public/DaVinci_Resolve_17_logo 1.png";
import django from "../public/django-logo-negative 1.png";
import python from "../public/Python-logo-notext 1.png";
import figma from "../public/figma_logo.png";
import unsplash_1 from "../public/unsplash_1.png";
import ProjectsCard from "./components/projectsCard";

import React, { useState } from "react";

const skills = [
	{ src: arduino, title: "Arduino" },
	{ src: python, title: "Python" },
	{ src: blender, title: "Blender" },
	{ src: davinci, title: "DaVinci" },
	{ src: django, title: "Django" },
	{ src: figma, title: "Figma" },
];

const projects = [
	{
		src: unsplash_1,
		title: "Python Project",
		description: "Lorem Ipsum is simply dummy text of the printing.",
	},
	{
		src: unsplash_1,
		title: "Python Project",
		description: "Lorem Ipsum is simply dummy text of the printing.",
	},
	{
		src: unsplash_1,
		title: "Python Project",
		description: "Lorem Ipsum is simply dummy text of the printing.",
	},
];

export default function Home() {
	const [selectedSkill, setSelectedSkill] = useState(null);

	const skills = [
		{ src: arduino, title: "Arduino" },
		{ src: python, title: "Python" },
		{ src: blender, title: "Blender" },
		{ src: davinci, title: "DaVinci" },
		{ src: django, title: "Django" },
		{ src: figma, title: "Figma" },
	];

	return (
		<div className="relative overflow-hidden">
			<div className="absolute left-0 top-0">
				<div className="py-12 animate-marquee whitespace-nowrap opacity-10">
					{Array(4)
						.fill("HELLO")
						.map((text, index) => (
							<span key={index} className="text-4xl mx-4 text-[150px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00]">
								{text}
							</span>
						))}
				</div>
			</div>
			<div className="absolute left-0 top-72 -z-10">
				<div className="py-12 animate-marquee whitespace-nowrap opacity-10">
					{Array(6)
						.fill("ajmal roshan")
						.map((text, index) => (
							<span key={index} className="text-4xl mx-4 text-[150px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00]">
								{text}
							</span>
						))}
				</div>
			</div>
			<main className="flex flex-col justify-between items-center z-10">
				<section className="w-full min-h-screen flex flex-col md:justify-between">
					<div className="flex flex-col justify-center text-center gap-10 items-center m-10 p-4 flex-1">
						<Image src={profile} alt="Picture of the author" height={110} />
						<h1 className="text-3xl font-bold">Hi, I &apos; m Ajmal Roshan 👋</h1>
						<p className="text-lg">&quot;Crafting digital experiences that leave a lasting impact.&quot;</p>
					</div>
					<div className="flex w-full h-52 bg-[#111111] items-center justify-center"></div>
				</section>
				<section className="flex min-h-screen flex-col w-full items-center justify-around">
					<div className="flex flex-col text-center m-10">
						<h1 className="p-3 my-10 text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00]">These are some of the things I know.</h1>
						<h1 className="text-3xl mb-10">{selectedSkill ? selectedSkill.title : "Python"}</h1>
						<p className="max-w-2xl text-sm">
							{selectedSkill ? `Description of ${selectedSkill.title}` : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
						</p>
					</div>
					<div className="flex w-full h-40 border border-[#2e2d2d] bg-[#111111]">
						<div className="flex justify-evenly w-full self-center items-center">
							{skills.map((skill, index) => (
								<Logos key={index} src={skill.src} title={skill.title} onMouseEnter={() => setSelectedSkill(skill)} onMouseLeave={() => setSelectedSkill(null)} />
							))}
						</div>
					</div>
				</section>
				<section className="min-h-screen flex flex-col w-full justify-between flex-wrap text-center">
					<h1 className="p-3 text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00]">These are some of my Projects.</h1>

					<div className="flex flex-col md:flex-row w-full justify-around items-center gap-10 mt-10">
						{projects.map((project, index) => (
							<ProjectsCard key={index} src={project.src} title={project.title} description={project.description} />
						))}
					</div>
					<div className="hidden md:flex flex-col m-10">
						<h1 className="text-left py-2 font-bold text-lg">Python</h1>
						<p className="text-left text-sm md:text-md">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, commodi eos illo, facere dolorem tempore excepturi reprehenderit voluptates odio, blanditiis voluptate magnam optio? Excepturi nulla sit ad dolorem est nostrum.
						</p>
					</div>
				</section>
				<section className="min-h-screen flex flex-col w-full justify-between">
					<div className="m-4 p-2 mt-10">
						<h1 className="text-xl text-center">You can Reach out to me.</h1>
						<div className="flex flex-col md:justify-around md:flex-row items-center gap-10 w-full justify-between mt-10">
							<div className="flex flex-col md:flex-row gap-10">
								<ProjectsCard src={python} Title="Python" description="Lorem Ipsum is simply dummy text of the printing." />
								<ProjectsCard src={django} Title="Python" description="Lorem Ipsum is simply dummy text of the printing." />
							</div>
							<div className="flex flex-col h-40 justify-evenly items-center">
								<h1 className="text-center">Download My Resume</h1>
								<button className="bg-transparent hover:bg-[#2e2d2d] font-normal hover:text-white py-2 px-4 border border-[#2e2d2d] hover:border-transparent">Resume</button>
							</div>
						</div>
					</div>
					<div className="flex w-full h-40 bg-[#111111] items-center justify-center">
						<p className="text-[#7d7d7d]">Made with ❤️ by Ajmal Roshan</p>
					</div>
				</section>
			</main>
		</div>
	);
}
