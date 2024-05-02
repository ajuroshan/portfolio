import "./globals.css";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import Mousefollow from "./components/Mousefollow";
import "./globals.css";



const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "100", "700"] });

import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata = {
	title: "ajuroshan",
	description: "portfolio of Ajmal Roshan",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			
			<body className={clsx("bg-[#0d0d0d] text-[#949494] ", montserrat.className)}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}