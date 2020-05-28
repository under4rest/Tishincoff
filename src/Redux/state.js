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
  cart: [],
  functions: {
    delToCart: (e) => {
      let exist = null
      state.cart.forEach((item, index) => {
        if (item.good_id === e.good_id) {
          exist = index
        }
      })
      if (exist != null) {state.cart.splice(exist,1) }
    },
    addToCart: (e) => {
      let exist = null
      let f ={
        good_id: e.good_id,
        good_name: e.good_name,
        good_count: 1,
      }
      state.cart.forEach((item, index) => {
        if (item.good_id === e.good_id) {
          exist = index
        }
      })
      if (exist != null) {state.cart[exist].good_count++ } else { state.cart.push(f) }
    }
  }

}

export default state