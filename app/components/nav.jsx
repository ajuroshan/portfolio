import React from "react";
import Link from "next/link";

const Nav = () => {
	return (
		<nav className="flex items-center justify-between border-b border-[#282828] p-3 mx-10 mb-10 mt-3 text-xs md:text-base md:mx-40 ">
			<Link className="hover:text-[#ffc83d]  transition duration-200" href={"/"}>
				/ajuroshan
			</Link>
			<div className="flex  gap-3 ">
				<Link className="hover:text-[#ffc83d]  transition duration-200" href={"https://github.com/ajuroshan"} rel="noopener noreferrer" target="_blank">
					Github
				</Link>
				<Link className="hover:text-[#ffc83d]  transition duration-200" href={"https://www.linkedin.com/in/ajuroshan/"} rel="noopener noreferrer" target="_blank">
					Linkedin{" "}
				</Link>
				<Link className="hover:text-[#ffc83d]  transition duration-200" href={"https://www.instagram.com/ajuroshan_/"} rel="noopener noreferrer" target="_blank">
					Instagram
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
