"use client";

import hamburger from "../../public/images/icon-hamburger.svg";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { Planet } from "../layout";
import { useState } from "react";

interface Props {
  data: Planet[];
}

export default function Navbar({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[1600px] mx-auto flex flex-col items-start tablet:flex-col tablet:items-center laptop-sm:flex-row  md:items-center md:justify-between text-white laptop-sm:py-3 pt-4 px-10">
      <div className="flex items-center justify-between self-stretch tablet:self-center border-b-2 tablet:border-b-0 border-b-dark-gray pb-4 tablet:pb-0">
        <span className="font-antonio text-3xl uppercase tracking-[-1.05px]">
          The Planets
        </span>
        <Image
          src={hamburger}
          alt="hamburger menu icon for mobile navigation"
          className="text-light-gray stroke-dark-gray tablet:hidden"
          onClick={() => setIsOpen(isOpen => !isOpen)}
        />
      </div>

      <NavLinks planets={data} isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
