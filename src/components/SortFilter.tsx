import { useState } from "react";
import { useItems } from "../context/ItemContext";

const SortFilter = () => {
  const { sortItems, filterItems } = useItems();
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = () => {
    filterItems(searchTerm);
    setSearchTerm("")// clear input after search
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title..."
        className="flex-1 min-w-[150px] p-2 rounded-3xl border border-white/20 placeholder-gray-300 bg-transparent outline-none "
      />
      <button onClick={handleFilter} className="p-2 ">
        Filter
      </button>
      <select
        onChange={(e) => sortItems(e.target.value as "title" | "updatedAt")}
        className="p-2 rounded-2xl bg-cyan-600 text-white cursor-pointer hover:bg-cyan-800"
      >
        <option value="updatedAt">Sort by Date</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};

export default SortFilter;
