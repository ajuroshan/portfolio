import React from "react";
import Image from "next/image";

const ProjectsCard = ({ src, title, description }) => {
	return (
		<div className="h-80 w-72 border border-[#2e2d2d] bg-[#111111]">
			<div className="m-4 mx-8 flex flex-col items-center">
				<Image src={src} alt={title} className="mt-4 grayscale hover:grayscale-0 transition duration-500 ease-in-out" />
				<div className="mt-3">
					<h1 className="text-left py-2 font-bold text-lg">{title}</h1>
					<p className="text-left text-sm">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;
