import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import Button from "./Button";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let navLinks = document.querySelectorAll("#navLink");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", () => {
        setIsVisible(false);
      });
    }
  }, []);

  return (
    <header className="padding-x absolute py-2.5 max-[667px]:py-4 z-20 w-full">
      <nav className="relative flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16
            max-lg:absolute max-lg:top-10 max-lg:right-1 max-lg:flex-col max-lg:gap-4
            max-lg:items-start max-lg:py-6 max-lg:px-4 max-lg:rounded-sm max-lg:w-48
            max-lg:bg-white max-lg:shadow-3xl
        ${isVisible ? `max-lg:flex` : `max-lg:hidden`}`}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.label}
              className="relative max-lg:w-full max-lg:px-2.5 max-lg:py-2
               before:absolute before:w-full before:h-[2px] before:top-[100%]
               before:left-0 max-lg:before:bg-pale-blue"
            >
              <a
                id="navLink"
                className="font-montserrant leading-normal text-lg text-slate-gray"
                href={navLink.href}
              >
                {navLink.label}
              </a>
            </li>
          ))}
          <div>
            <Button label="Sign in" />
          </div>
        </ul>
        <div className="hidden max-lg:block">
          <img
            onClick={() => setIsVisible(!isVisible)}
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
