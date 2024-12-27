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
      } tablet:flex flex-col tablet:flex-row self-stretch tablet:self-auto md:items-center justify-between tablet:gap-6 laptop-sm:gap-[30px] font-bold font-spartan text-base tablet:text-sm uppercase tracking-[1px] absolute tablet:relative top-0 left-0  w-full tablet:w-auto px-[40px] tablet:px-0 translate-y-20 tablet:translate-y-0 bg-black-100 tablet:bg-none z-10`}
    >
      {planets.map(planet => (
        <li
          key={planet.name}
          className="transition-color flex items-center gap-[25px] border-b-2 border-b-dark-gray py-6 tablet:border-b-0"
        >
          <div
            className={`w-5 h-5 rounded-full tablet:hidden`}
            style={{
              backgroundColor: `var(--color-${planet.name.toLowerCase()})`,
            }}
          ></div>
          <Link
            href={`/planets/${planet.name.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="hover:text-light-gray"
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
