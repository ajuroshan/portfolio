"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Mousefollow = () => {
	const [point, setPoint] = useState({ x: 0, y: 0 });
	const { x, y } = point;
	const ref = useRef();

	useEffect(() => {
		if (!ref.current) return;

		const handlePointerMove = ({ clientX, clientY }) => {
			const element = ref.current;

			const x = clientX - element.offsetLeft - element.offsetWidth / 2;
			const y = clientY - element.offsetTop - element.offsetHeight / 2;
			setPoint({ x, y });
			console.log(x, y);
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
		};
	}, []);

	return (
		<motion.div
			ref={ref}
			className="mousefollow"
			animate={{ x, y }}
			transition={{
				type: "spring",
				damping: 3,
				stiffness: 50,
				restDelta: 0.001,
			}}
		></motion.div>
	);
};

export default Mousefollow;
