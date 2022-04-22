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
  },
  expiredTime: false,
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'GET_A_PRODUCT':
      return {
        ...state,
        eachProduct: action.payload
      }
    case 'EXPIRED_TIME':
      return {
        ...state,
        expiredTime: action.payload
      }
    default:
      return state;
  }
}
