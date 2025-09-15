"use client";

import { menus } from "@/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/images/logo-with-remove-bg.png";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <nav className="fixed top-0 left-0 w-full z-25 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10 lg:px-32">
        <Image alt="Logo Image" src={logo} width={120} height={120} />

        <ul className="hidden md:flex gap-7 text-white">
          {menus.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`cursor-pointer pb-1 border-b-2  hover:border-[var(--main-color)] transition-all duration-200
                    ${
                      pathname.includes(link.href)
                        ? "border-[var(--main-color)]"
                        : "border-transparent"
                    }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden z-50 relative">
          <Image
            src={
              showMobileMenu
                ? "/assets/icons/close.png"
                : "/assets/icons/menu-white.png"
            }
            alt="menu"
            width={showMobileMenu ? 16 : 24}
            height={showMobileMenu ? 16 : 24}
            className={`cursor-pointer transform transition-transform duration-300 ${
              showMobileMenu ? "rotate-180 scale-110" : "rotate-0"
            }`}
            onClick={() => setShowMobileMenu((prev) => !prev)}
          />
        </div>
      </div>
      <div
        className={`md:hidden fixed right-0 top-0 bottom-0 bg-white h-[100vh] transition-all duration-500 ease-in-out
          ${showMobileMenu ? "w-full opacity-100" : "w-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center gap-4 mt-20 text-lg font-medium">
            {menus.map((link) => (
              <a
                className="px-4 py-2 rounded-full inline-block text-black font-medium hover:bg-gray-100 transition"
                key={link.label}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="w-full">
            <a
              href="#contactUs"
              className="flex items-center justify-center gap-1.5 py-3.5 bg-[var(--main-color)] w-full"
              onClick={() => setShowMobileMenu(false)}
            >
              <Image
                src={"/assets/images/logo-with-remove-bg.png"}
                alt="contact-us"
                width={100}
                height={100}
              />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
