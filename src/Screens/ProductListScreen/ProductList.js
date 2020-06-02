import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ProductCard from './../../Components/ProductCard/ProductCard'
import actionAddToCart, { actionDelFromCart } from './../../Redux/actions/addToCart'

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ProductList extends React.Component {

  render() {
    const { coffee, cart, addToCart, delFromCart } = this.props
    return (
      <div className="holder">
        <ScrollToTopOnMount />
        <Container>
          <h1 className="under_construction">Товары</h1>
          <h6 className="under_construction_h6">Весь список товаров хранится на сервере и генерируется автоматически</h6>
          {coffee.map((element, i) => {
            return <ProductCard cart={cart} key={i} element={element} addToCart={addToCart} delFromCart={delFromCart} />
          })
          }
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
export default connect(mapStateToPorps, mapDispatchToProps)(ProductList)