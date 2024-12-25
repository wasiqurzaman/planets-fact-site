import React from "react";
import { promises as fs } from "fs";
import { Planet } from "@/app/layout";

interface Props {
  children: React.ReactNode;
  params: { planetName: string; info: string };
}

export default async function layout({ children, params }: Props) {
  const { planetName, info } = await params;
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const planets: Planet[] = JSON.parse(file);

  const planet = planets.find(
    planet => planet.name.toLowerCase() === planetName
  );

  // console.log(planetName);
  // console.log(info);

  return (
    <div>
      {children}
      <div className="flex text-white font-spartan gap-16 p-10">
        <div className="w-[255px] flex flex-col gap-1 border border-light-gray px-7 py-5">
          <span className="text-light-gray tracking-[1px] leading-[25px] font-semibold uppercase">
            Rotation Time
          </span>
          <span className="font-antonio tracking-[-1.5px] text-[40px]">
            {planet?.rotation}
          </span>
        </div>
        <div className="w-[255px] flex flex-col gap-1 border border-light-gray pt-5 pl-6 pb-7">
          <span className="text-light-gray tracking-[1px] leading-[25px] font-semibold uppercase">
            Revolution Time
          </span>
          <span className="font-antonio tracking-[-1.5px] text-[40px]">
            {planet?.revolution}
          </span>
        </div>
        <div className="w-[255px] flex flex-col gap-1 border border-light-gray pt-5 pl-6 pb-7">
          <span className="text-light-gray tracking-[1px] leading-[25px] font-semibold uppercase">
            Radius
          </span>
          <span className="font-antonio tracking-[-1.5px] text-[40px]">
            {planet?.radius}
          </span>
        </div>
        <div className="w-[255px] flex flex-col gap-1 border border-light-gray pt-5 pl-6 pb-7">
          <span className="text-light-gray tracking-[1px] leading-[25px] font-semibold uppercase">
            Average Temp.
          </span>
          <span className="font-antonio tracking-[-1.5px] text-[40px]">
            {planet?.temperature}
          </span>
        </div>
      </div>
    </div>
  );
}
