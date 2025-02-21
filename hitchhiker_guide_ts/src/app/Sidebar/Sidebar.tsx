import React from "react";

const CustomSidebar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full bg-gray-800 p-4">
      <ul className="space-y-4">
        <li>
          <a href="#intro" className="text-white">
            Intro
          </a>
        </li>
        <li>
          <a href="#install" className="text-white">
            Install
          </a>
        </li>
        <li>
          <a href="#generics" className="text-white">
            Generics
          </a>
        </li>
        <li>
          <a href="#advantages" className="text-white">
            Advantages
          </a>
        </li>
        <li>
          <a href="#example" className="text-white">
            Example
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default CustomSidebar;
