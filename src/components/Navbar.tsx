import React from "react";

export type NavbarProps = {
  toggleTheme: () => void;
  theme: "light" | "dark";
};

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <>
      <nav className="p-4 flex justify-between items-center shadow-md bg-sky-700 text-white">
        <h1 className="text-xl font-bold">Task Manager</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-cyan-600 rounded-full hover:bg-cyan-700 transition"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
