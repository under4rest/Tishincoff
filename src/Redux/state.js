let state ={
  coffee: [
  {
    good_id: 0,
    good_name: 'Тестовый кофе',
    good_description: 'Тестовое описание кофе'
  },
  {
    good_id: 1,
    good_name: 'Тестовый кофе',
    good_description: 'Тестовое описание кофе'
  },
  {
    good_id: 2,
    good_name: 'Тестовый кофе',
    good_description: 'Тестовое описание кофе'
  },
  ],
  cart: []

}

export const addToCart = (e) => {
  
  let f ={
    good_id: e.good_id,
    good_name: e.good_name,
    good_count: !state.cart[e.good_id] ?  1 : state.cart[e.good_id].good_count++,   
  }
  state.cart.push(f)
  console.warn('нажал на кнопку довления в корзину', state.cart);
}
export default state