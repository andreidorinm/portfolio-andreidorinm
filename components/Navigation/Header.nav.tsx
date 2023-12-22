import type { NextComponentType } from "next";
import Link from "next/link";
import { VscGithubAlt } from "../Misc/Icons.collection";
import TextLink from "../Misc/TextLink.component";
import MobileNav from "./MobileNav.nav";

const Header: NextComponentType = () => {
  return (
    <header
      className={`font-jost py-8 sm:flex sm:flex-row sm:items-center sm:justify-between`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" url="#" />
        <TextLink text="Experience" url="#experience" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
      </p>

      <Link href="https://github.com/andreidorinm" passHref className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo">
          <VscGithubAlt />
      </Link>
    </header>
  );
};

export default Header;
