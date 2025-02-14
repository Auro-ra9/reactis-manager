import SortFilter from "./SortFilter";

export type NavbarProps = {
  toggleTheme: () => void;
  theme: "light" | "dark";
};

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <>
      <nav className="p-4 flex justify-between items-center shadow-md bg-sky-700 text-white">
        <h1 className="text-xl font-bold">Task Manager</h1>
        <SortFilter />
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 ${
            theme === "light"
              ? "bg-slate-200 text-black hover:bg-slate-300"
              : "bg-slate-600 hover:bg-slate-700"
          } rounded-full transition`}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
