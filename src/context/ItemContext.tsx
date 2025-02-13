import React, { createContext, useContext, useEffect, useState } from "react";
import { Items as Item, ItemsInput } from "../types/items";
import { api } from "../config/axios";

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
    const fetchItems = () => {
      setIsLoading(true);
      api
        .get("/posts")
        .then((response) => {
          const transformedItems = response.data
            .slice(0, 10)
            .map((post: any) => ({
              id: post.id,
              title: post.title,
              description: post.body,
              status: "pending",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }));
          setItems(transformedItems);
        })
        .catch(() => setError("Failed to fetch items"))
        .finally(() => setIsLoading(false));
    };

    fetchItems();
  }, []);

  // add item
  const addItem = (newItem: ItemsInput) => {
    api
      .post("/posts", newItem)
      .then((response) => {
        const addedItem = {
          ...response.data,
          status: "pending",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        setItems((prev) => [...prev, addedItem]);
      })
      .catch(() => setError("Failed to add item"));
  };

  // delete item
  const deleteItem = (id: number) => {
    api
      .delete(`/posts/${id}`)
      .then(() => {
        setItems((prev) => prev.filter((item) => item.id !== id));
      })
      .catch(() => setError("Failed to delete item"));
  };

  // edit item
  const editItem = (updatedItem: Item) => {
    api
      .put(`/posts/${updatedItem.id}`, updatedItem)
      .then(() => {
        setItems((prev) =>
          prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
      })
      .catch(() => setError("Failed to update item"));
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
