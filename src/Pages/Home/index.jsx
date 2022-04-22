import React, { useState, useEffect } from 'react';
import ProductCard from 'src/Components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk } from '../../Store/actions';
import './Home.scss';
import Loading from '../Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const reduxProducts = useSelector(state => state.products);
  const dispatch = useDispatch();
  const expiredTime = useSelector(state => state.expiredTime);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(getProductsThunk());
  }
  , []);

  return (
    <div className="homeProducts">
      {loading ? (
        <Loading />
      ) : (
        <div className="homeProducts__container">
        <div className="homeProducts__title">
            <h1>Products</h1>
          </div>
          <div className="homeProducts__container">
              {reduxProducts.map(product => (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  expiredTime={expiredTime} />
              ))}
            </div>
        </div>
      )}
    </div>

  )
}

export default Home
