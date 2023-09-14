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
      <div className="bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 antialiased bg-no-repeat text-white">
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
          <a href="/" className="font-bold text-white text-xl">
            Pipe
          </a>
          <button
            title="Toggle Menu"
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
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
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center font-semibold">
              {menuItems.map((item, index) => (
                <>
                  <li key={index} className="relative group px-3 py-2">
                    <button className="hover:opacity-50 cursor-default">
                      {item.title}
                    </button>
                    {item.items && (
                      <div className="absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                        <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                          <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-12rem duration-500 ease-in-out rounded-sm"></div>
                          <div className="relative z-10">
                            {item.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
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
                </>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Open / Close */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-0 right-0 h-screen w-64 bg-white">
              <ul className="py-6 px-4">
                {/* Render mobile menu items here */}
                {menuItems.map((item, index) => (
                  <>
                    <li key={index} className="relative group px-3 py-2">
                      <button className="hover:opacity-50 cursor-default">
                        {item.title}
                      </button>
                      {item.items && (
                        <div className="absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                          <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                            <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-12rem duration-500 ease-in-out rounded-sm"></div>
                            <div className="relative z-10">
                              {item.items.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
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
                  </>
                ))}
                <li className="relative bg-red-300 group px-3 py-2">
                  <button
                    onClick={toggleMobileMenu}
                    className="hover:opacity-50 cursor-default"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-left"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </>
  );
};
