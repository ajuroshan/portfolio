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
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Ajmal Roshan - Portfolio</title>
				<meta name="description" content="Ajmal Roshan - Freelance software engineer based in Kochi, Kerala. Skilled in Python, JavaScript, Django, HTML, CSS, and web development." />
				<meta
					name="keywords"
					content="Ajmal Roshan,ajuroshan,roshan,cusat,cusat passouts,cusat alumini,cochin university of science and technology, freelance, software engineer, Kochi, Kerala, Python, JavaScript, Django, HTML, CSS, web development, Malayalam"
				/>
				<meta name="author" content="Ajmal Roshan" />
				<link rel="canonical" href="https://www.ajuroshan.me" />
				<meta property="og:title" content="Ajmal Roshan - Freelance Software Engineer | Kochi, Kerala" />
				<meta property="og:description" content="Ajmal Roshan - Freelance software engineer based in Kochi, Kerala. Skilled in Python, JavaScript, Django, HTML, CSS, and web development." />
				<meta property="og:image" content={"https://media.licdn.com/dms/image/D5603AQGodpLwpImpaw/profile-displayphoto-shrink_400_400/0/1686926281346?e=1720051200&v=beta&t=zVIwXRDLY-ExgQEOdwChHb79y8lhywc1us4zFl33bJc"} />
				<meta property="og:url" content="https://www.ajuroshan.me" />
				<link rel="icon" type="image/svg+xml" sizes="any" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤗</text></svg>" />
				
			</head>

			<body className={clsx("bg-[#0d0d0d] text-[#949494] ", montserrat.className)}>
				<Nav />
				{children}
				{/* <Mousefollow/> */}
				<Footer />
			</body>
		</html>
	);
}
