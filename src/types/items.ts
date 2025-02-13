//type definition for an item

export type Items = {
  id: number; //unique identifier
  title: string;
  description: string;
  status: "pending" | "completed"; //status of the item
  createdAt: string; // creation of the item
  updatedAt: string;
};


// Input type for creating/updating an item (excludes auto-generated fields)
export type ItemsInput = Omit<Items, "id" | "createdAt" | "updatedAt">;
