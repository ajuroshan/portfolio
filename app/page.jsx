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
		{ src: blender, title: "Blender" },
		{ src: davinci, title: "DaVinci" },
		{ src: django, title: "Django" },
		{ src: figma, title: "Figma" },
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
							<span key={index} className="text-4xl mx-4 text-[150px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00] opacity-25">
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
							<span key={index} className="text-4xl mx-4 text-[150px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00] opacity-25">
								{text}
							</span>
						))}
				</div>
			</div>
			<div className="absolute left-0 top-[600px] -z-10">
				<div className="py-12 animate-marquee whitespace-nowrap opacity-10">
					{Array(4)
						.fill("Ajmal Roshan")
						.map((text, index) => (
							<span key={index} className="text-4xl mx-4 text-[150px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00] opacity-25">
								{text}
							</span>
						))}
				</div>
			</div>
			<section className="min-w-full z-10">
				<section className=" flex flex-col min-h-screen md:justify-center">
					<div className="flex flex-col justify-center text-center gap-3 items-center m-10 pb-36 p-4 flex-1">
						<Image src={profile} alt="Picture of the author" height={110} />
						<h1 className="text-2xl md:text-3xl font-bold mt-5">Hi, I &apos; m Ajmal Roshan 👋</h1>
						<p className="text-sm md:text-lg">&quot;Crafting digital experiences that leave a lasting impact.&quot;</p>
					</div>
				</section>
				{/* <section className="container flex flex-col gap-10 md:gap-32 p-10 md:p-32 bg-[#111111] min-h-screen min-w-full">
					<div className="text-xl md:text-2xl  font-semibold">These are some of the things i know.</div>
					<div className="flex flex-col md:flex-row gap-10 items-center">
						<ProjectsCard src={unsplash_1} title={"hello"} description={"this a project that is very important to me"} />
						<ProjectsCard src={unsplash_1} title={"hello"} description={"this a project that is very important to me"} />
						<ProjectsCard src={unsplash_1} title={"hello"} description={"this a project that is very important to me"} />
						<ProjectsCard src={unsplash_1} title={"hello"} description={"this a project that is very important to me"} />
					</div>
				</section> */}
				<section className="flex flex-col w-full justify-between">
					<div className="m-4 p-2 mt-10">
						<h1 className=" text-center mb-2 text-2xl font-bold tracking-tight">You can Reach out to me.</h1>
						<div className="flex flex-col md:justify-around  items-center gap-10 w-full justify-between my-10">
							<div className="flex flex-col md:flex-row gap-10">
								<ProjectsCard title="Github" description="Code with me on Github! Let's build awesome stuff together."  link={"https://github.com/ajuroshan"} link_text={"For Aliens"}/>
								<ProjectsCard title="Linkedin" description="Hit me up on LinkedIn for professional updates and virtual networking!" link={"https://www.linkedin.com/in/ajuroshan/"} link_text={"For Professionals"} />
								<ProjectsCard title="Instagram" description="Tech, travel, and occasional stories. Follow me on Insta!" link={"https://www.instagram.com/ajuroshan_/"} link_text={"For normal people"}  />
							</div>
							<div className="flex flex-col h-40 justify-evenly items-center">
								<h1 className="text-center">Download My Resume</h1>
								<button className="bg-transparent hover:bg-[#2e2d2d] font-normal py-2 px-4 border border-[#2e2d2d] hover:border-transparent hover:text-[#ffc83d] transition duration-200 rounded-sm">Resume</button>
							</div>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
}

{
	/* <h1 className="p-3 text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00]">These are some of my Projects.</h1> */
}
