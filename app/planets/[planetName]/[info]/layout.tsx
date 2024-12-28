import React from "react";
import { promises as fs } from "fs";
import { Planet } from "@/app/layout";

export async function generateStaticParams() {
  const infos = [
    { info: "overview" },
    { info: "structure" },
    { info: "geology" },
  ];

  return infos;
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ planetName: string; info: string }>;
}

export default async function layout({ children, params }: Props) {
  const { planetName } = await params;
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const planets: Planet[] = JSON.parse(file);

  const planet = planets.find(
    planet => planet.name.toLowerCase() === planetName
  );

  return (
    <div className="max-w-[1440px] mx-auto pt-28 laptop-sm:pt-10 large-desktop:pt-24 flex flex-col justify-center gap-8 tablet:gap-7 laptop-sm:gap-20  large-desktop:gap-40">
      {children}
      <div className="flex flex-col tablet:flex-row gap-2 tablet:gap-[10px] tablet:justify-between  laptop-sm:gap-[30px] px-8 large-desktop:px-0 text-white font-spartan pb-12">
        <div className="flex-1 flex flex-row items-center tablet:items-start justify-between tablet:justify-normal tablet:flex-col gap-1 border border-light-gray px-4 laptop-sm:px-6 py-3 laptop-sm:py-4">
          <span className="text-light-gray tracking-[1px] text-sm laptop-sm:text-base leading-[25px] font-semibold uppercase">
            Rotation Time
          </span>
          <span className="font-antonio font-medium tracking-[-1.5px] text-[24px] tablet:text-[24px] laptop-sm:text-[40px]">
            {planet?.rotation}
          </span>
        </div>

        <div className="flex-1 flex flex-row items-center tablet:items-start justify-between tablet:justify-normal tablet:flex-col gap-1 border border-light-gray px-4 laptop-sm:px-6 py-3 laptop-sm:py-4">
          <span className="text-light-gray tracking-[1px] text-sm laptop-sm:text-base leading-[25px] font-semibold uppercase">
            Revolution Time
          </span>
          <span className="font-antonio font-medium tracking-[-1.5px] text-[24px] tablet:text-[24px] laptop-sm:text-[40px]">
            {planet?.revolution}
          </span>
        </div>

        <div className="flex-1 flex flex-row items-center tablet:items-start justify-between tablet:justify-normal tablet:flex-col gap-1 border border-light-gray px-4 laptop-sm:px-6 py-3 laptop-sm:py-4">
          <span className="text-light-gray tracking-[1px] text-sm laptop-sm:text-base leading-[25px] font-semibold uppercase">
            Radius
          </span>
          <span className="font-antonio font-medium tracking-[-1.5px] text-[24px] tablet:text-[24px] laptop-sm:text-[40px]">
            {planet?.radius}
          </span>
        </div>

        <div className="flex-1 flex flex-row items-center tablet:items-start justify-between tablet:justify-normal tablet:flex-col gap-1 border border-light-gray px-4 laptop-sm:px-6 py-3 laptop-sm:py-4">
          <span className="text-light-gray tracking-[1px] text-sm laptop-sm:text-base leading-[25px] font-semibold uppercase">
            Average Temp.
          </span>
          <span className="font-antonio font-medium tracking-[-1.5px] text-[24px] tablet:text-[24px] laptop-sm:text-[40px]">
            {planet?.temperature}
          </span>
        </div>
      </div>
    </div>
  );
}
