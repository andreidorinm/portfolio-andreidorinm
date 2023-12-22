import { NextComponentType, NextPageContext } from "next";
import { linkProps } from "../../@types/prop.types";
import Link from "next/link";

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({
  text,
  url,
}) => {
  return (
    <Link
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </Link>
  );
};

export default TextLink
