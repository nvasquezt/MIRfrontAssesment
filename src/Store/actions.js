import { getProducts, getAProduct } from '../services/product';



export const getProductsAction = (product) => ({
  type: 'GET_PRODUCTS',
  payload: product
});


export const getAProductAction = (id) => ({
  type: 'GET_A_PRODUCT',
  payload: id
});


export const fetchProducts = () => async(dispatch) => {
  try {
    const product = await getProducts()
    dispatch(getProductsAction(product))
  } catch (error) {
    console.log(error)
  }
}

export const fetchAProduct = (id) => async (dispatch) => {
  try {
    const product = await getAProduct(id)
    dispatch(getAProductAction(product))
  } catch (error) {
    console.log(error)
  }
}
