import React, { useState } from "react";
import toast from "react-hot-toast";
import { useItems } from "../context/ItemContext";
import Spinner from "./Spinner";
import { validateForm } from "../utils/validators";

const ItemForm = () => {
  const { addItem, isLoading } = useItems();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //clrea previous errors
    setTitleError(null);
    setDescriptionError(null);
    const { isValid, message } = validateForm({ title, description });
    if (!isValid) {
      // specific error messages based on validation
      if (message.includes("Title")) setTitleError(message);
      if (message.includes("Description")) setDescriptionError(message);
      return;
    }
    //pass necessary fields to context
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
            className={`w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none ${
              titleError ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />
          {/* replacing title input with validation error  if invalid */}
          {titleError && (
            <p className="text-red-500 text-sm mt-1">{titleError}</p>
          )}
          <textarea
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none ${
              descriptionError ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />
          {/* replacing description input with validation error  if invalid */}
          {descriptionError && (
            <p className="text-red-500 text-sm mt-1">{descriptionError}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full md:w-auto px-6 py-4 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? <Spinner /> : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
