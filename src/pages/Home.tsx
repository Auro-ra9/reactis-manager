import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <ItemForm/> 
      {/* if gets time sortfilter */}
      <ItemList/>
    </div>
  );
};

export default Home;
