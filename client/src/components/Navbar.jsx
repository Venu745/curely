import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <nav className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">

          {/*  LOGO  */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-lg font-bold text-white">
              C
            </div>

            <span className="text-2xl font-bold tracking-tight text-[#0F172A]">
              Care<span className="text-[#0F766E]">ly</span>
            </span>
          </NavLink>

          {/* DESKTOP MENU  */}
          <div className="hidden items-center md:flex">

            <ul className="flex items-center gap-1 lg:gap-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative flex items-center px-3 py-2 text-sm font-semibold transition-colors lg:px-4 ${
                        isActive
                          ? "text-[#0F766E]"
                          : "text-[#64748B] hover:text-[#0F766E]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}

                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#0F766E]" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Login Button */}
            <NavLink
              
              className="ml-4 rounded-lg bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0c625b] hover:shadow-md active:scale-95 lg:ml-6"
            >
              Login
            </NavLink>
          </div>

          {/*  MOBILE BUTTON  */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0F172A] transition hover:bg-[#F8FAFC] hover:text-[#0F766E] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU  */}
        <div
          className={`grid transition-all duration-300 md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-slate-100 pt-3">

              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "bg-[#0F766E] text-white"
                            : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F766E]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Mobile Login */}
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-3 block rounded-lg bg-[#2563EB] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

