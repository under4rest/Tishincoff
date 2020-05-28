import React from "react";
import './master.css'
import Cup from './img/black_pink.png';
import { connect } from 'react-redux';
import actionAddToCart, { actionDelFromCart } from './../../Redux/actions/addToCart'

class UnderConstruct extends React.Component {
  render() {
    // const { coffee, addToCart, delFromCart } = this.props
    return (
      <>
        <div className="holder">
          <h6 className="under_construction_h6">Угадай новый рецепт</h6>
          <h1 className="under_construction">Готовим блокбастер</h1>
          <img src={Cup} alt='website logo' className="cup" />
          {/* <div className="main-button" onClick={() => addToCart(coffee[0])}>хочу добавить первый товар</div>
          <div className="main-button" onClick={() => addToCart(coffee[1])}>хочу добавить второй товар</div>
          <div className="main-button" onClick={() => delFromCart(0)}>хочу добавить первый товар</div>
          <div className="main-button" onClick={() => delFromCart(1)}>хочу уменьшить второй товар</div> */}
        </div>
      </>
    )
  };
}
const mapStateToPorps = (state) => {
  return {
    coffee: state.coffee,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (e) => dispatch(actionAddToCart(e)),
    delFromCart: (e) => dispatch(actionDelFromCart(e))
  }
}
export default connect(mapStateToPorps, mapDispatchToProps)(UnderConstruct)