/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import initState from './initialState'

const ACTION_ADD_TO_CART = 'ACTION_ADD_TO_CART'
const ACTION_DEL_FROM_CART = 'ACTION_DEL_FROM_CART'
const ACTION_INC_CART_GOOD = 'ACTION_INC_CART_GOOD'
const ACTION_DEC_CART_GOOD = 'ACTION_DEC_CART_GOOD'

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    case ACTION_DEL_FROM_CART:
      return { ...state, cart: state.cart.filter(x => x.good_id !== action.payload) }
    case ACTION_INC_CART_GOOD:
      return {
        ...state,
        cart: state.cart.map(x => {
          if (x.good_id === action.payload) {
            return { ...x, good_count: x.good_count + 1 }
          } else {
            return x
          }
        })
      }
    case ACTION_DEC_CART_GOOD:
      return {
        ...state,
        cart: state.cart.map(x => {
          if (x.good_id === action.payload) {
            return { ...x, good_count: x.good_count - 1 }
          } else {
            return x
          }
        })
      }
  }
  return state
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
