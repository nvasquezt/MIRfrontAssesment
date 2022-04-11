const ALL_PRODUCTS = () => {
  return {
    type: 'GET_PRODUCTS'
  }
}
const GET_PRODUCT = (payload) => {
  return {
    type: 'GET_PRODUCT',
    payload
  }
}
