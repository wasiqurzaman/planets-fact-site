import { Planet } from "@/app/layout";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const planets: Planet[] = JSON.parse(file);

  return (
    <div className="max-w-[1440px] mx-auto py-10 large-desktop:py-20  text-white grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-4 gap-8 px-10 large-desktop:px-0">
      {planets.map(planet => (
        <Link
          href={`/planets/${planet.name.toLowerCase()}`}
          key={planet.name}
          className="bg-slate-200/15 rounded-lg flex flex-col items-center py-4 laptop-sm:py-8 gap-6 hover:bg-slate-300/15 hover:scale-105 transition-all duration-300"
        >
          <Image
            src={planet.images.planet}
            alt={`Image of ${planet.name}`}
            width={0}
            height={0}
            style={{ width: "70%", height: "auto" }}
          />

          <h1 className="font-antonio text-[40px]">{planet.name}</h1>
        </Link>
      ))}
    </div>
  );
}
