import React from 'react';
import actionAddToCart, { actionDelFromCart } from './../../Redux/actions/addToCart';
import { connect } from 'react-redux';
import Cup from './../../img/coffe_type.png';
import { Button } from 'react-bootstrap';
import './master.css'

class PorductCart extends React.Component {
  render() {
    const { item, addToCart, delFromCart } = this.props
    return (<>
      <div className="cart_item">
        <img src={Cup} className="cart_img" />
        <div>
          <h4>TISHINKOFF SPECIALITY COFFEE ROASTERS: {item.good_name}</h4>
          <p>{item.good_param} | {item.good_second_param}</p>
        </div>
        <Button variant="light" className="cart_button" onClick={() => delFromCart(item.good_id)}>удалить</Button>
      </div>
    </>)
  }
}

const mapStateToPorps = (state) => {
  return {
    coffee: state.coffee,
    cart: state.cart,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (e) => dispatch(actionAddToCart(e)),
    delFromCart: (e) => dispatch(actionDelFromCart(e))
  }
}
export default connect(mapStateToPorps, mapDispatchToProps)(PorductCart)