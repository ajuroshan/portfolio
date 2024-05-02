import React from "react";
import Image from "next/image";

const ProjectsCard = ({ src, title, description }) => {
	return (
		<div className="max-w-sm border border-[#2e2d2d] bg-[#111111] rounded-lg shadow">
				<Image className="" src={src} alt="" />
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
				</a>
				<p className="mb-3 font-normal ">{description}</p>
				<a
					href="#"
					className="inline-flex items-center  text-sm font-medium text-center  rounded-lg hover:text-[#ffc83d] transition duration-200"
				>
					Read more
					<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
					</svg>
				</a>
			</div>
		</div>
	);
};

export default ProjectsCard;

