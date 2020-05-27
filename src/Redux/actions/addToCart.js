const ACTION_ADD_TO_CART = 'ACTION_ADD_TO_CART'

const actionAddToCart = (e) => {
  console.warn('uses');

  return {
    type: ACTION_ADD_TO_CART,
    payload: e,
  }
}
export default actionAddToCart