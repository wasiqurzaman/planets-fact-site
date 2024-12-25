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
    <nav className="flex flex-col items-start tablet:flex-col tablet:items-center laptop-sm:flex-row  md:items-center md:justify-between text-white py-4 md:py-6">
      <div className="flex items-center justify-between px-10 self-stretch tablet:self-center">
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
