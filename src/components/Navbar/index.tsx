import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around items-center h-16 border-b border-navborder sticky top-0 mb-40">
      <div className="h-full w-1/2 flex justify-center items-center">
        <h1 className="font-bold text-3xl mb-2">ignite lab</h1>
        <div className="bg-greendiv w-1 h-1/2 mx-2"></div>
        <span className="tracking-widest">REACTJS</span>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center">
        <a href="https://github.com/isneru" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="text-4xl" />
        </a>
      </div>
    </nav>
  );
};
