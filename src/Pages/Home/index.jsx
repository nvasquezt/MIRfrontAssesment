import React, {useState, useEffect} from 'react';
import {getProducts} from 'src/services/product';
import ProductCard from 'src/Components/ProductCard';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  const showProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  }

  useEffect(() => {
    showProducts();
  }
  , []);

  return (
    <div className="total">
      <div className="title">
        <h1>Products</h1>
      </div>
      <div className='indexdiv'>
        {
          products.map(product => (
            <ProductCard
            key={product.id}
            image={product.image}
            title={product.title} />
          ))
        }
      </div>
    </div>

  )
}

export default Home
