import React from "react";
import Link from "next/link";

const Nav = () => {
	return (
		<div className="flex items-center justify-between border-b border-[#282828] p-3 mx-40 mb-10 mt-3">
			<Link href={"/"}>/ajuroshan</Link>
			<div className="flex  gap-3 ">
				<Link href={"https://github.com/ajuroshan"} rel="noopener noreferrer" target="_blank">
					Github
				</Link>
				<Link href={"https://www.linkedin.com/in/ajuroshan/"} rel="noopener noreferrer" target="_blank">
					Linkedin{" "}
				</Link>
				<Link href={"https://www.instagram.com/ajuroshan_/"} rel="noopener noreferrer" target="_blank">
					Instagram
				</Link>
			</div>
		</div>
	);
};

export default Nav;
