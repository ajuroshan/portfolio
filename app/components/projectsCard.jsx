import React from "react";
import Image from "next/image";

const ProjectsCard = ({ src, title, description,link,link_text }) => {
	return (
		<div className="max-w-sm border border-[#2e2d2d] bg-[#111111] rounded-md shadow">
				<Image className="" src={src} alt="" />
			<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
				<p className="mb-3 font-normal ">{description}</p>
				<a
					href={link}
					className="inline-flex items-center  text-sm font-medium text-center  rounded-sm hover:text-[#ffc83d] transition duration-200"
				>
					{link_text}
					<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
					</svg>
				</a>
			</div>
		</div>
	);
};

export default ProjectsCard;

