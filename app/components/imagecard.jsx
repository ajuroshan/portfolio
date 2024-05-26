import React from "react";
import Image from "next/image";

const ImageCard = ({ src, title, description, link, link_text, tech, order }) => {
	const renderImage = (
		<div className="lg:mb-0 lg:w-full lg:max-w-xl">
			<Image className="rounded object-cover object-center" alt="image" src={src} />
		</div>
	);

	const renderText = (
		<div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-48 lg:text-left">
			<h2 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h2>
			<h2 className="mb-4 text-lg font-bold sm:text-lg">{tech}</h2>
			<h2 className="mb-2 text-lg leading-tight sm:text-lg">{description}</h2>
			<a href={link} className="inline-flex items-center text-sm font-bold leading-relaxed hover:text-[#ffc83d] transition duration-200 cursor-pointer">
				{link_text}
				<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
				</svg>
			</a>
		</div>
	);

	return (
		<div>
			<div className="max-w-7xl mx-auto flex flex-col px-5 py-10 md:py-28 lg:flex-row">
				{renderImage}
				{renderText}
			</div>
		</div>
	);
};

export default ImageCard;
