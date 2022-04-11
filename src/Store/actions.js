const ALL_PRODUCTS = () => {
  return {
    type: 'GET_PRODUCTS'
  }
}
const GET_ONE_PRODUCT = (payload) => {
  return {
    type: 'GET_A_PRODUCT',
    payload
  }
}
