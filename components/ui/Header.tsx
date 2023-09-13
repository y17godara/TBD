"use client";
import React, { useState } from "react";
import Image from "next/image";
import { routes } from "@/constant";
import { NavLink, NavLinkDropdown } from "./Components.Header";

export function Header() {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="border-gray-200 dark:border-gray-600  bg-gray-100 dark:bg-gray-700 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center">
            <Image
              src="https://i.imgur.com/n05Wr0e.png"
              className="mr-3"
              alt="Logo"
              width={42}
              height={42}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LOGO
            </span>
          </a>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block md:items-center w-full md:w-auto`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <NavLink text="Home" href="#" />
              {/* DropDown */}
              <li>
                <button
                  id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium gap-2 text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={toggleCompanyDropdown}
                >
                  Company{" "}
                  <svg
                    className={`w-2.5 h-2.5 ${
                      isCompanyDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              {/* DropDown */}
              <NavLink text="Marketplace" href="#" />
              <NavLink text="Resources" href="#" />
              <NavLink text="Contact" href="#" />
            </ul>
          </div>
        </div>
        {/* DropDown */}
        {isCompanyDropdownOpen && (
          <>
            <div
              id="mega-menu-full-image-dropdown"
              className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
            >
              <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                <ul
                  className="block mb-4 space-y-4 md:mb-0"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <NavLinkDropdown text="Online Stores" href="#" />
                  <NavLinkDropdown text="Segmentation" href="#" />
                  <NavLinkDropdown text="Marketing CRM" href="#" />
                </ul>
                <ul className="mb-4 space-y-4 md:mb-0">
                  <NavLinkDropdown text="Our Blog" href="#" />
                  <NavLinkDropdown text="Terms & Conditions" href="#" />
                  <NavLinkDropdown text="License" href="#" />
                  <NavLinkDropdown text="Resources" href="#" />
                </ul>
                <a
                  href="#"
                  className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                >
                  <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
                    Preview the new Flowbite dashboard navigation.
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                  >
                    Get started
                    <svg
                      className="w-3 h-3 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
