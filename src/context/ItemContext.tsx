import React, { createContext, useContext, useEffect, useState } from "react";
import { Items as Item, ItemsInput } from "../types/items";
import { api } from "../config/axios";
import toast from "react-hot-toast";

type ItemContextType = {
  items: Item[]; // list of items
  isLoading: boolean;
  error: string | null;
  addItem: (item: ItemsInput) => void; // add function
  deleteItem: (id: number) => void; // delete ""
  editItem: (item: Item) => void; // edit ""
};

// create context
const ItemContext = createContext<ItemContextType | undefined>(undefined);

// provider
export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // fetch items
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await api.get("/posts");
        const transformedItems = response.data
          .slice(0, 10)
          .map((post: any) => ({
            id: post.id,
            title: post.title,
            description: post.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }));
        //save items we fetched
        setItems(transformedItems);

        toast.success("Items fetched successfully!");
      } catch (err) {
        setError("Failed to fetch items.");
        toast.error("Error: Failed to fetch items.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  // add item
  const addItem = async (newItem: ItemsInput) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post("/posts", newItem);
      const addedItem = {
        ...response.data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      // Add the new item and sort by updatedAt (most recent first)
      setItems((prev) => [addedItem,...prev].sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      ));
      toast.success("New item added successfully!");
    } catch (err) {
      setError("Failed to add item.");
      toast.error("Error: Failed to add item.");
    } finally {
      setIsLoading(false);
    }
  };

  // delete item
  const deleteItem = async (id: number) => {
    setIsLoading(true);
    setError(null);

    try {
      await api.delete(`/posts/${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
      toast.success("Item deleted successfully!");
    } catch (err) {
      setError("Failed to delete item.");
      toast.error("Error: Failed to delete item.");
    } finally {
      setIsLoading(false);
    }
  };

  // edit item
  const editItem = async (updatedItem: Item) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.put(`/posts/${updatedItem.id}`, updatedItem);
      setItems((prev) =>
        prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
      toast.success("Item updated successfully!");
    } catch (err) {
      setError("Failed to update item.");
      toast.error("Error: Failed to update item.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ItemContext.Provider
      value={{ items, isLoading, error, addItem, deleteItem, editItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};

// use context
export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemProvider");
  }
  return context;
};
