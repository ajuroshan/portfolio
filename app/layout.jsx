import "./globals.css";
import { Montserrat } from "next/font/google";
import clsx from "clsx";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","100","700"] });


import Nav from "./components/nav";

export const metadata = {
	title: "ajuroshan",
	description: "portfolio of Ajmal Roshan",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={clsx("bg-[#0d0d0d] text-[#949494] h-screen font-",montserrat.className)} >
				<Nav />
				{children}
			</body>
		</html>
	);
}
