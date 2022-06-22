import React from "react";
import { Logo } from "./Logo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <header className="w-full py-5 flex items-center justify-evenly bg-gray-700 border-b border-gray-600">
      <Logo />
      <a href="https://github.com/isneru" target="_blank" className="text-2xl">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </header>
  );
};
