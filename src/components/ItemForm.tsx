import React, { useState } from "react";
import toast from "react-hot-toast";
import { useItems } from "../context/ItemContext";
import Spinner from "./Spinner";

const ItemForm = () => {
  const { addItem, isLoading } = useItems();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("complete both fields");
    }
    //pass necessary feilds to context
    addItem({ title, description });

    //reset the fields after each successful item add
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-sky-700">Add New Item </h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
          />
          <textarea
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-4 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors duration-200 disabled:opacity-50"
        >
          {isLoading ? <Spinner /> : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
