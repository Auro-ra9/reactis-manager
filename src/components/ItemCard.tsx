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
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(item.description);

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    editItem(item.id, { title: newTitle, description: newDescription });
    setIsEditing(false);
  };
  const handleCancelEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(false);
    setNewTitle(item.title);
    setNewDescription(item.description);
  };

  return (
    <div
      className={`relative p-4 rounded shadow-md transition-all duration-200 bg-gradient-to-r from-blue-700 to-blue-950 text-white min-h-[200px] overflow-hidden ${
        isExpanded ? "h-auto" : "h-[200px]"
      } `}
      onClick={() => !isEditing && setIsExpanded(!isExpanded)}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 rounded mb-2 text-black"
            placeholder="Edit Title"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full p-2 rounded mb-2 text-black"
            placeholder="Edit description"
          />
          <div className="flex justify-end">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="px-4 py-2 bg-gray-600 rounded ml-2 hover:bg-gray-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-1 min-h-0">
            <h2
              className={`font-bold text-lg text-white ${
                !isExpanded && "line-clamp-1"
              }`}
            >
              {item.title}
            </h2>
            <p className={`mt-2 ${!isExpanded && "line-clamp-3"}`}>
              {item.description}
            </p>{" "}
            <div className="flex justify-end  pt-2 mt-auto border-t border-blue-600">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
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
      )}
    </div>
  );
};

export default ItemCard;
