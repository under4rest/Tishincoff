import React from "react";
import './master.css'
import Cup from './img/black_pink.png';
import { connect, bindActionCreators } from 'react-redux'

class UnderConstruct extends React.Component {
  render() {
    const { coffee, addToCart } = this.props
    return (
      <>
        <div className="holder">
          <h6 className="under_construction_h6">Угадай новый рецепт</h6>
          <h1 className="under_construction">Готовим блокбастер</h1>
          <img src={Cup} alt='website logo' className="cup" />
          <div className="main-b÷utton" onClick={() => addToCart(coffee[0])}>хочу добавить первый товар</div>
          <div className="main-button" onClick={() => this.props.data.functions.addToCart(this.props.data.coffee[1])}>хочу добавить второй товар</div>
          <div className="main-button" onClick={() => this.props.data.functions.delToCart(this.props.data.coffee[0])}>хочу удалить первый товар</div>
          <div className="main-button" onClick={() => this.props.data.functions.delToCart(this.props.data.coffee[1])}>хочу удалить второй товар</div>
        </div>
      </>
    )
  };
}
const mapStateToPorps = (state) => {
  console.warn(state)
  return {
    coffee: state.coffee,
  }
};
const increment = () => ({ type: 'ACTION_ADD_TO_CART'})

const mapDispatchToProps = (dispatch) => {
  console.warn(dispatch);
  return {
    addToCart: (e) => dispatch(increment(e))
  }
}
export default connect(mapStateToPorps, mapDispatchToProps)(UnderConstruct)