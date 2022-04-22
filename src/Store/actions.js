import { getProducts, getAProduct } from '../services/product';



export const getProductsAction = (product) => ({
  type: 'GET_PRODUCTS',
  payload: product
});


export const getAProductAction = (id) => ({
  type: 'GET_A_PRODUCT',
  payload: id
});

export const expiredTime = (payload) => ({
  type: 'EXPIRED_TIME',
  payload: payload});


export const getProductsThunk = () => async(dispatch) => {
  try {
    const product = await getProducts()
    dispatch(getProductsAction(product))
  } catch (error) {
    console.log(error)
  }
}

export const getAProductThunk = (id) => async (dispatch) => {
  try {
    const product = await getAProduct(id)
    dispatch(getAProductAction(product))
  } catch (error) {
    console.log(error)
  }
}
