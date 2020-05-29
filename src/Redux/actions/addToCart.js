const ACTION_ADD_TO_CART = 'ACTION_ADD_TO_CART'
const ACTION_DEL_FROM_CART = 'ACTION_DEL_FROM_CART'

const actionAddToCart = (e) => {
  e.good_count = 1
  return {
    type: ACTION_ADD_TO_CART,
    payload: e,
  }
}

export const actionDelFromCart = (e, f) => {
  return {
    type: ACTION_DEL_FROM_CART,
    payload: e,
  }
}
export default actionAddToCart