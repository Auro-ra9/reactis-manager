import React, { useState } from "react";
import { Items } from "../types/items";
import { useItems } from "../context/ItemContext";
import Spinner from "./Spinner";
//Item card props type
export type ItemCardProps = {
  item: Items;
};

const ItemCard = ({ item }: ItemCardProps) => {
  const { deleteItem, editItem, isLoading } = useItems();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`p-4 rounded shadow-md transition-all bg-gradient-to-r from-purple-600 to-blue-600 text-white `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2 className="font-bold text-lg text-black">{item.title}</h2>
      <p className={`mt-2 ${isExpanded ? "whitespace-normal" : "truncate"}`}>
        {item.description}
      </p>{" "}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            editItem(item);
          }}
          className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
        >
          {isLoading ? <Spinner /> : "Edit"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteItem(item.id);
          }}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          {isLoading ? <Spinner /> : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
