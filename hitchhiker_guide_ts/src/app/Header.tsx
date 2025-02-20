import React from "react";

interface HeaderProps {
  sectionTitle: string;
  itemTitle: string;
}

const Header: React.FC<HeaderProps> = ({ sectionTitle, itemTitle }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">{sectionTitle}</h1>
        <h2 className="text-xl">{itemTitle}</h2>
      </div>
    </header>
  );
};

export default Header;
