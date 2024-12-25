import Link from "next/link";
import Image from "next/image";
import chevron from "../../public/images/icon-chevron.svg";
import { Planet } from "../layout";
import { Dispatch, SetStateAction } from "react";

interface Props {
  planets: Planet[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavLinks({ planets, isOpen, setIsOpen }: Props) {
  return (
    <ul
      className={`${
        isOpen ? "flex" : "hidden"
      } tablet:flex flex-col tablet:flex-row md:items-center tablet:gap-[33px] font-bold font-spartan text-base  tablet:text-sm uppercase tracking-[1px] py-4 px-10 `}
    >
      {planets.map(planet => (
        <li
          key={planet.name}
          className="hover:text-light-gray transition-color flex items-center gap-[25px] border-b-2 border-b-dark-gray py-6 tablet:border-b-0"
        >
          <div
            className={`w-5 h-5 rounded-full tablet:hidden`}
            style={{
              backgroundColor: `var(--color-${planet.name.toLowerCase()})`,
            }}
          ></div>
          <Link
            href={`/planets/${planet.name.toLowerCase()}`}
            className=""
            onClick={() => setIsOpen(false)}
          >
            {planet.name}
          </Link>
          <Image
            src={chevron}
            alt="right arrow"
            className="tablet:hidden ml-auto"
          />
        </li>
      ))}
    </ul>
  );
}
