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
      className={`relative p-4 rounded shadow-md transition-all duration-200 bg-gradient-to-r from-blue-700 to-blue-950 text-white min-h-[200px] overflow-hidden ${
        isExpanded ? "h-auto" : "h-[200px]"
      } `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 min-h-0">
          <h2 className={`font-bold text-lg text-white ${!isExpanded && 'line-clamp-1'}`}>{item.title}</h2>
          <p
            className={`mt-2 ${
              !isExpanded && "line-clamp-3"
            }`}
          >
            {item.description}
          </p>{" "}
          <div className="flex justify-end  pt-2 mt-auto border-t border-blue-600">
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("Edit functionality will be added soon!"); // edit functionality for future implementation
                // editItem(item);
              }}
              className="px-4 py-1.5 m-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
            >
              {isLoading ? <Spinner /> : "Edit"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item.id);
              }}
              className="px-4 py-1.5 m-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
              {isLoading ? <Spinner /> : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
