import { useItems } from "../context/ItemContext";
import ItemCard from "./ItemCard";
import Spinner from "./Spinner";

const ItemList = () => {
  const { items, isLoading, error } = useItems();
  
  //replace with Loading Spinner Component Later
  if (isLoading) return <p className="text-center"><Spinner/></p>;

  //throw error message
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
  </div>;
};

export default ItemList;
