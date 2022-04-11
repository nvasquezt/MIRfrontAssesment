import React, {useState, useEffect} from 'react';
import {getProducts} from 'src/services/product';
import ProductCard from 'src/Components/ProductCard';
import './index.css';

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
    <div>
      {
        products.map(product => (
          <ProductCard
          key={product.id}
          image={product.image}
          title={product.title} />
        ))
      }
    </div>
  )
}

export default Home
