import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Components/Cart';
import Product from './Components/Product';
import productData from './product.json'
function App() {
  return (
    <>
      <Cart />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {productData.map((item) => (
          <Product {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
