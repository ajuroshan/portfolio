import Image from "next/image";
const Logos = ({ src }) => {
	return (
		<div>
			<Image src={src} />
		</div>
	);
};

export default Logos;
