"use client";
import React, { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    {
      title: "Products",
      items: ["Course Editor", "Accept payments", "Closed Captioning"],
    },
    {
      title: "Solutions",
      items: ["Creators", "Streamers", "Influence", "Programming", "Design"],
    },
    {
      title: "Developers",
      items: [
        "Documentation",
        "Libraries and SDKs",
        "Plugins",
        "Code samples",
        "Tutorials",
      ],
    },
    {
      title: "Resources",
      items: ["Get Support", "Blog", "Case Studies", "Guides", "News & Events"],
    },
    { title: "Pricing" },
  ];

  return (
    <>
      {/* Apply background color and shadow */}
      <div className="bg-white shadow-md text-black">
        <header className="flex flex-col md:flex-row container mx-auto px-4 md:px-8 py-6 items-center justify-between">
          <div className="w-full font-bold text-xl flex flex-row items-center justify-between gap-2">
            Pipe
            <button
              title="Toggle Menu"
              onClick={toggleMobileMenu}
              className="md:hidden text-black hover:text-slate-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
          {/*  */}
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center font-semibold">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group px-3 py-2">
                  <button
                    title="Toggle Menu"
                    className="hover:opacity-50 cursor-default"
                  >
                    {item.title}
                  </button>
                  {item.items && (
                    <div className="absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible ease-in-out group-hover:transform z-50 md:min-w-[210px] transform">
                      <div className="mt-8 relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-12rem ease-in-out rounded-sm"></div>
                        <div className="relative z-10">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              {subItem}
                              <p className="text-gray-500 font-normal">
                                Placeholder text
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Open / Close */}
          {mobileMenuOpen && (
            <div className="block md:block md:items-center w-full md:w-auto">
              <ul className="py-6 px-4">
                {/* Render mobile menu items here */}
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group px-3 py-2">
                    <button
                      title="Toggle Menu"
                      className="hover:opacity-50 cursor-default"
                    >
                      {item.title}
                    </button>
                    {item.items && (
                      <div className="min-w-[200px] absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible ease-in-out group-hover:transform z-50  md:min-w-[210px] transform">
                        <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                          <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-12rem ease-in-out rounded-sm"></div>
                          <div className="relative z-10">
                            {item.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                {subItem}
                                <p className="text-gray-500 font-normal">
                                  Placeholder text
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>
      </div>
    </>
  );
};
