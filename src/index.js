/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import { Provider } from 'react-redux'
import { createStore, bindActionCreators } from 'redux';

const initState = {
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
          console.warn(exist, index);
        }
      })
      if (exist != null) { state.cart.splice(exist, 1) }
      console.warn('нажал на кнопку удаления из корзины', state.cart);
    },
    addToCart: (e) => {
      let exist = null
      let f = {
        good_id: e.good_id,
        good_name: e.good_name,
        good_count: 1,
      }
      state.cart.forEach((item, index) => {
        if (item.good_id === e.good_id) {
          exist = index
          console.warn(exist, index);
        }
      })
      if (exist != null) { state.cart[exist].good_count++ } else { state.cart.push(f) }
      console.warn('нажал на кнопку довления в корзину', state.cart);
    }
  }
}


const ACTION_ADD_TO_CART = 'ACTION_ADD_TO_CART'

const actionAddToCart = (e) => {
  return {
    type: ACTION_ADD_TO_CART,
    payload: e,
  }
}
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_ADD_TO_CART:
      return { ...state, cart: action.payload }
  }
  return state
}
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const mapDispatchToProps = {
  actionAddToCart
}

ReactDOM.render(
  <Provider store={store}>
    <App state={state} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
