const initialState = {
  products: [],
  eachProduct: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    description: '',
    image: '',
    rating:{
      rate: 0,
      count: 0
    }
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'GET_PRODUCT':
      return {
        ...state,
        eachProduct: action.payload
      }
    default:
      return state;
  }
}