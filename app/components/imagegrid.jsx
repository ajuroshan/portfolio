import { useEffect, useRef } from "react";
import Image from "next/image";

const ImageGrid = ({ images }) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		const scrollHandler = () => {
			if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
				container.scrollLeft = 0; // Reset scroll position when reaching the end
			}
		};

		container.addEventListener("scroll", scrollHandler);

		return () => {
			container.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<div ref={containerRef} className="flex flex-wrap overflow-x-auto">
			{images.map((image, index) => (
				<div key={index} className="w-1/4 h-64 md:w-1/5 md:h-80 p-2">
					<Image src={image.src} alt={image.alt} className="object-cover w-full h-full" />
				</div>
			))}
		</div>
	);
};

export default ImageGrid;
