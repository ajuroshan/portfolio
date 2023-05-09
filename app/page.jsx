import Image from "next/image";
import Logos from "./components/logos";
import profile from "../public/profile_pic.png";
import arduino from "../public/arduino-seeklogo.com 1.png";
import blender from "../public/blender_icon_128x128 1.png";
import davinci from "../public/DaVinci_Resolve_17_logo 1.png";
import django from "../public/django-logo-negative 1.png";
import python from "../public/Python-logo-notext 1.png";
import figma from "../public/figma_logo.png";
import ProjectsCard from "./components/projectsCard";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","100","700"] });

export default function Home() {
	return (
		<main className="relative h-full">
			<div className=" h-full w-full absolute top-0 left-0 -z-10 opacity-10">
				<div class="marquee absolute top-0 left-0">
					<div class="track absolute top-0 left-0">
						<div class="content text-[150px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00]">&nbsp;hello hello hello hello &nbsp;hello hello hello hello</div>
					</div>
				</div>
			</div>
			<div className=" h-full w-full absolute top-72 left-0 -z-10 opacity-10">
				<div class="marquee absolute top-0 left-0">
					<div class="track absolute top-0 left-0">
						<div class="content text-[150px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#6a6a6a] to-[#ffffff00]">&nbsp;ajmal roshan &nbsp; ajmal roshan &nbsp;ajmal roshan &nbsp; ajmal roshan</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between items-center z-10">
				<div className="flex flex-col justify-center text-center gap-10 items-center m-10 p-4">
					<Image src={profile} alt="Picture of the author" />
					<h1 className={clsx(" text-3xl font-bold" , montserrat.className)}>
						Hi, <br /> I'm Ajmal Roshan 👋
					</h1>
					<p className="text-lg">"Crafting digital experiences that leave a lasting impact."</p>
				</div>
				<div className="flex w-full h-52 mt-20 bg-[#111111]"></div>
				<div className="flex h-screen flex-col w-full  items-center justify-evenly">
					<div className="flex flex-col text-center gap-10">
						<h1 className="p-3 text-xl">These are some of the things i know.</h1>
						<h1 className="text-3xl ">Python</h1>
						<p className="max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
					</div>
					<div className="flex w-full h-40 border border-[#2e2d2d] bg-[#111111]">
						<div className="flex justify-evenly w-full self-center items-center">
							<Logos src={arduino} />
							<Logos src={python} />
							<Logos src={blender} />
							<Logos src={davinci} />
							<Logos src={django} />
							<Logos src={figma} />
						</div>
					</div>
				</div>
				<div className="h-screen flex flex-col w-full justify-between flex-wrap text-center">
					<h1 className="p-3 text-xl">These are some of my Projects.</h1>
					<div className="flex w-full justify-evenly">
						<ProjectsCard />
						<ProjectsCard />
						<ProjectsCard />
						<ProjectsCard />
					</div>
				</div>
			</div>
		</main>
	);
}
