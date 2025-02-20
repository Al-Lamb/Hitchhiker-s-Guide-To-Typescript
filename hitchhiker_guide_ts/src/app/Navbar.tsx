import React from "react";
import Link from "next/link";

const Navbar = ({ navigation }: { navigation: any[] }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {navigation.map((section) => (
            <div key={section.title} className="relative group">
              <button className="text-white font-semibold">
                {section.title}
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="py-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
