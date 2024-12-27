import React from "react";
import { promises as fs } from "fs";
import { Planet } from "@/app/layout";

export async function generateStaticParams() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const planets: Planet[] = JSON.parse(file);

  const planetNames = planets.map(planet => ({
    planetName: planet.name.toLowerCase(),
  }));

  return planetNames;
}

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return <div>{children}</div>;
}
