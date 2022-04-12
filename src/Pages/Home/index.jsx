import React, { useEffect } from 'react';
import ProductCard from 'src/Components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk } from '../../Store/actions';
import './Home.scss';

const Home = () => {
  const reduxProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }
  , []);

  return (
    <div className="homeProducts">
      <div className="homeProducts__title">
        <h1>Products</h1>
      </div>
      <div className="homeProducts__container">
        {
          reduxProducts.map(product => (
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
