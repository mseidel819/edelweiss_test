import "./App.css";
import ProductCard from "./components/product-card.component";
import Data from "../data.json";

function App() {
  const { products } = Data;

  return (
    <>
      <h1 className="title">{Data.name}</h1>
      <div className="container">
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            name={product.name}
            author={product.author}
            img={
              product.images
                ? product.images[0].uri
                : "/book-cover-placeholder.png"
            }
          />
        ))}
      </div>
    </>
  );
}

export default App;
