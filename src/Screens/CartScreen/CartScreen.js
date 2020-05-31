import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import ProductCart from './../../Components/ProductCart/ProductCart'
import actionAddToCart, { actionDelFromCart } from './../../Redux/actions/addToCart';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


class CartScreen extends React.Component {
  render() {
    const { cart } = this.props
    return (
      <div className="holder">
        <ScrollToTopOnMount />
        <Container>
          <h1 className="under_construction">Корзина</h1>
          <h6 className="under_construction_h6">Это не просто переключатель кнопок, а хранилище состояние корзины которе можно достать из любого места</h6>
          {cart.map((item, i) => {
            return <ProductCart item={item} key={i} />
          })}
        </Container>
      </div>
    )
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
export default connect(mapStateToPorps, mapDispatchToProps)(CartScreen)