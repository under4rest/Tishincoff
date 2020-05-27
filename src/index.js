/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import { Provider } from 'react-redux'
import { createStore, bindActionCreators } from 'redux';
import initState from './initialState'

const ACTION_ADD_TO_CART = 'ACTION_ADD_TO_CART'

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
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
