import { Planet } from "@/app/layout";
import Image from "next/image";
import { promises as fs } from "fs";
import iconSource from "../../../../public/images/icon-source.svg";
import Link from "next/link";

interface Props {
  params: { planetName: string; info: string };
}

export default async function page({ params }: Props) {
  const { planetName, info } = await params;
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const planets: Planet[] = JSON.parse(file);

  const planet = planets.find(
    planet => planet.name.toLowerCase() === planetName
  );

  const src =
    info === "overview" || info === "geology"
      ? planet?.images.planet
      : planet?.images.internal;

  const content =
    info === "overview"
      ? planet?.overview.content
      : info === "structure"
      ? planet?.structure.content
      : planet?.geology.content;

  const source =
    info === "overview"
      ? planet?.overview.source
      : info === "structure"
      ? planet?.structure.source
      : planet?.geology.source;

  return (
    <div className="text-white flex ">
      <div className="flex items-center justify-center flex-1">
        <Image src={src} width={200} height={200} alt="image" />
        {info === "geology" && (
          <Image
            src={planet?.images.geology}
            width={100}
            height={100}
            alt="surface geology"
          />
        )}
      </div>

      <div className="flex flex-col flex-1 px-8">
        <div>
          <h1 className="font-antonio text-[80px]">{planet?.name}</h1>
          <p className="font-spartan text-sm">{content}</p>
          <div className="flex items-center gap-2 text-light-gray font-spartan">
            <span>Source:</span>
            <a
              href={source}
              target="_blank"
              className="underline text-light-gray font-bold"
            >
              Wikipedia
            </a>
            <Image src={iconSource} alt="icon source" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="overview"
            className={`${
              info === "overview"
                ? "bg-mercury border-mercury"
                : "hover:bg-dark-gray"
            } flex items-center gap-4 font-spartan font-bold uppercase border-2 border-dark-gray  transition-colors duration-300 py-3 px-7 tracking-[2.57px] leading-[25px] w-[350px]`}
          >
            <span className="text-light-gray">01</span>
            <span className="">Overview</span>
          </Link>
          <Link
            href="structure"
            className={`${
              info === "structure"
                ? "bg-mercury border-mercury"
                : "hover:bg-dark-gray"
            } flex items-center gap-4 font-spartan font-bold uppercase border-2 border-dark-gray  transition-colors duration-300 py-3 px-7 tracking-[2.57px] leading-[25px] w-[350px]`}
          >
            <span className="text-light-gray">02</span>
            <span>Internal Structure</span>
          </Link>
          <Link
            href="geology"
            className={`${
              info === "geology"
                ? "bg-mercury border-mercury"
                : "hover:bg-dark-gray"
            } flex items-center gap-4 font-spartan font-bold uppercase border-2 border-dark-gray  transition-colors duration-300 py-3 px-7 tracking-[2.57px] leading-[25px] w-[350px]`}
          >
            <span className="text-light-gray">03</span>
            <span>Surface Geology</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
