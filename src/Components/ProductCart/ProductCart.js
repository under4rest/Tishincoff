import React from 'react';
import actionAddToCart, { actionDelFromCart, actionIncCartGood, actionDecCartGood } from './../../Redux/actions/addToCart';
import { connect } from 'react-redux';
import Cup from './../../img/coffe_type.png';
import { Button } from 'react-bootstrap';
import './master.css'

class PorductCart extends React.Component {
  render() {
    const { item, incCartGood, delFromCart, decCartGood } = this.props
    return (<>
      <div className="cart_item">
        <img src={Cup} className="cart_img" alt="coffee type" />
        <div>
          <h4>TISHINKOFF SPECIALITY COFFEE ROASTERS: {item.good_name}</h4>
          <p>{item.good_param} | {item.good_second_param}</p>
        </div>
        <div className="price_holder">
          <p>{item.good_count * item.good_price} P</p>
        </div>
        <div className="cart_button_holder">
          <div className="cart_button_holder_inc_dec">
            <Button variant="light" className="cart_button" onClick={() => item.good_count > 0 ? decCartGood(item.good_id) : null}> - </Button>
            <p>{item.good_count}</p>
            <Button variant="light" className="cart_button" onClick={() => incCartGood(item.good_id)}> + </Button>
          </div>
          <Button variant="light" className="cart_button" onClick={() => delFromCart(item.good_id)}>удалить</Button>
        </div>
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
    delFromCart: (e) => dispatch(actionDelFromCart(e)),
    incCartGood: (e) => dispatch(actionIncCartGood(e)),
    decCartGood: (e) => dispatch(actionDecCartGood(e)),
  }
}
export default connect(mapStateToPorps, mapDispatchToProps)(PorductCart)