import Image from "next/image";
const Logos = ({ src }) => {
	return (
		<div>
			<Image src={src} height={30} />
		</div>
	);
};

export default Logos;
