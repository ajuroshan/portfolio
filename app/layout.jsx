import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ajuroshan",
	description: "portfolio of Ajmal Roshan",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-[#0d0d0d] text-[#949494]">
				<Nav />
				{children}
			</body>
		</html>
	);
}
