import Image from "next/image";

export default function Home() {
	return (
		<main className="relative">
			<div className=" h-full w-full absolute top-0 left-0 -z-10 opacity-10">
				<div class="marquee absolute top-0 left-0">
					<div class="track absolute top-0 left-0">
						<div class="content text-9xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#ffffff00]">&nbsp;hello hello hello hello &nbsp;hello hello hello hello</div>
					</div>
				</div>
			</div>
			<div className=" h-full w-full absolute top-96 left-0 -z-10 opacity-10">
				<div class="marquee absolute top-0 left-0">
					<div class="track absolute top-0 left-0">
						<div class="content text-9xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#6a6a6a] to-[#ffffff00]">&nbsp;ajmal roshan &nbsp; ajmal roshan &nbsp;ajmal roshan &nbsp; ajmal roshan</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between items-center z-10">
				<div className="flex flex-col justify-center text-center gap-10 items-center m-10 p-4">
					<Image src="/profile_pic.png" width={206} height={206} alt="Picture of the author" />
					<h1 className="text-4xl">
						Hi, <br /> I'm Ajmal Roshan 👋
					</h1>
					<p className="text-lg">"Crafting digital experiences that leave a lasting impact."</p>
				</div>
				<div className="flex w-full h-52 mt-20 bg-[#111111]"></div>
				<div className="flex w-full justify-between">
					<h1 className="p-3 text-xl">These are some of the things i know.</h1>
					<div className="h-[800px] w-96 bg-[#111111] "></div>
				</div>
			</div>
		</main>
	);
}
