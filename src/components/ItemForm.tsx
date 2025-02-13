import React, { useState } from "react";
import toast from "react-hot-toast";
import { useItems } from "../context/ItemContext";

const ItemForm = () => {
  const { addItem } = useItems();
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
    toast.success("New Item added successfully")
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <h2 className="text-xl font-bold mb-2">Add New Item </h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default ItemForm;
