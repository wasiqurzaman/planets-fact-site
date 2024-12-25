import { Planet } from "@/app/layout";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";

interface Props {
  params: { planetName: string };
}

export default async function PlanetPage({ params }: Props) {
  const { planetName } = await params;
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const planets: Planet[] = JSON.parse(file);

  const planet = planets.find(
    planet => planet.name.toLowerCase() === planetName
  );

  // console.log(planet);

  redirect(`/planets/${planet?.name.toLowerCase()}/overview`);

  // return <div className="text-white font-spartan"></div>;
}
