import React, { useState } from "react";
import { useItems } from "../context/ItemContext";

const SortFilter = () => {
  const { sortItems, filterItems } = useItems();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key: "title" | "updatedAt") => {
    sortItems(key);
  };

  const handleFilter = () => {
    filterItems(searchTerm);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title..."
        className="p-2 border border-gray-300 rounded-lg"
      />
      <button
        onClick={handleFilter}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Filter
      </button>
      <button
        onClick={() => handleSort("title")}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Sort by Title
      </button>
      <button
        onClick={() => handleSort("updatedAt")}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Sort by Date
      </button>
    </div>
  );
};

export default SortFilter;
