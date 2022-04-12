import React, {useState, useEffect} from 'react';
import {getProducts} from 'src/services/product';
import ProductCard from 'src/Components/ProductCard';
import './Home.scss';

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
    <div className="homeProducts">
      <div className="homeProducts__title">
        <h1>Products</h1>
      </div>
      <div className="homeProducts__container">
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
