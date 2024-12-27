import { Planet } from "@/app/layout";
import Image from "next/image";
import { promises as fs } from "fs";
import iconSource from "../../../../public/images/icon-source.svg";
import Link from "next/link";

interface Props {
  params: Promise<{ planetName: string; info: string }>;
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

  function genBgStyle(color: string) {
    switch (color) {
      case "mercury":
        return `tablet:bg-mercury tablet:border-mercury border-b-2 border-b-mercury`;
      case "venus":
        return `tablet:bg-venus tablet:border-venus border-b-2 border-b-venus`;
      case "earth":
        return `tablet:bg-earth tablet:border-earth border-b-2 border-b-earth`;
      case "mars":
        return `tablet:bg-mars tablet:border-mars border-b-2 border-b-mars`;
      case "jupiter":
        return `tablet:bg-jupiter tablet:border-jupiter border-b-2 border-b-jupiter`;
      case "saturn":
        return `tablet:bg-saturn tablet:border-saturn border-b-2 border-b-saturn`;
      case "uranus":
        return `tablet:bg-uranus tablet:border-uranus border-b-2 border-b-uranus`;
      case "neptune":
        return `tablet:bg-neptune tablet:border-neptune border-b-2 border-b-neptune`;
      default:
        return "";
    }
  }

  function getPlanetSize(planet: string) {
    switch (planet) {
      case "mercury":
        return { width: "23%", height: "auto" };
      case "venus":
        return { width: "30%", height: "auto" };
      case "earth":
        return { width: "30%", height: "auto" };
      case "mars":
        return { width: "28%", height: "auto" };
      case "jupiter":
        return { width: "60%", height: "auto" };
      case "saturn":
        return { width: "65%", height: "auto" };
      case "uranus":
        return { width: "35%", height: "auto" };
      case "neptune":
        return { width: "32%", height: "auto" };
      default:
        return { width: "50%", height: "auto" };
    }
  }

  return (
    <div className="text-white flex flex-col laptop-sm:flex-row  gap-10 laptop-sm:gap-0 tablet:px-10 large-desktop:px-0">
      <div className="flex items-center justify-center laptop-sm:flex-1 laptop-sm:basis-[70%] relative">
        <Image
          src={src!}
          width={0}
          height={0}
          style={getPlanetSize(planetName)}
          alt="image"
        />
        {info === "geology" && (
          <Image
            src={planet?.images?.geology ?? ""}
            width={150}
            height={150}
            alt="surface geology"
            style={{ width: "15%" }}
            className="absolute bottom-0 translate-y-[-10%]"
          />
        )}
      </div>

      <div className="flex flex-col tablet:flex-row tablet:items-center laptop-sm:items-start laptop-sm:flex-col laptop-sm:justify-between px-8 tablet:px-0 gap-6 w-full laptop-sm:flex-1 laptop-sm:basis-[30%]">
        <div className="flex flex-col gap-6 w-full tablet:w-1/2 laptop-sm:w-full text-center tablet:text-start">
          <h1 className="font-antonio text-[40px] tablet:text-[48px] laptop-sm:text-[80px]">
            {planet?.name}
          </h1>
          <p className="font-spartan text-sm laptop-sm:text-base">{content}</p>
          <div className="flex items-center gap-2 text-light-gray font-spartan self-center tablet:self-start">
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

        <div className="flex tablet:flex-col gap-2 tablet:gap-4 absolute tablet:relative top-0 left-0 justify-between px-10 tablet:px-0 flex-row w-full tablet:w-1/2 laptop-sm:w-full border-b-2 tablet:border-b-0 border-b-dark-gray">
          <Link
            href="overview"
            className={`${
              info === "overview"
                ? genBgStyle(planetName)
                : "hover:bg-dark-gray"
            } flex items-center gap-4 font-spartan font-bold uppercase tablet:border-2 border-dark-gray  transition-colors duration-300 py-5 tablet:py-3 tablet:px-6 tracking-[1.93px] tablet:tracking-[2.57px] leading-[25px] tablet:w-full`}
          >
            <span className="text-light-gray hidden tablet:block">01</span>
            <span className="text-xs tablet:text-sm lg:text-base">
              Overview
            </span>
          </Link>
          <Link
            href="structure"
            className={`${
              info === "structure"
                ? genBgStyle(planetName)
                : "hover:bg-dark-gray"
            } flex items-center gap-4 font-spartan font-bold uppercase tablet:border-2 border-dark-gray  transition-colors duration-300 py-5 tablet:py-3 tablet:px-6 tracking-[1.93px] tablet:tracking-[2.57px] leading-[25px] tablet:w-full`}
          >
            <span className="text-light-gray hidden tablet:block">02</span>
            <span className="hidden tablet:block tablet:text-sm lg:text-base">
              Internal Structure
            </span>
            <span className="tablet:hidden text-xs tablet:text-base">
              Structure
            </span>
          </Link>
          <Link
            href="geology"
            className={`${
              info === "geology" ? genBgStyle(planetName) : "hover:bg-dark-gray"
            } flex items-center gap-4 font-spartan font-bold uppercase tablet:border-2 border-dark-gray  transition-colors duration-300 py-5 tablet:py-3 tablet:px-6 tracking-[1.93px] tablet:tracking-[2.57px] leading-[25px] tablet:w-full`}
          >
            <span className="text-light-gray hidden tablet:block">03</span>
            <span className="hidden tablet:block tablet:text-sm lg:text-base">
              Surface Geology
            </span>
            <span className="tablet:hidden text-xs tablet:text-base">
              Surface
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
