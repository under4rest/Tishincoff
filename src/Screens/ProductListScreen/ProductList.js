import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ProductCard from './../../Components/ProductCard/ProductCard'
import Slider from "react-slick";
import actionAddToCart, { actionDelFromCart } from './../../Redux/actions/addToCart'

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ProductList extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0
  };

  wheel(e) {
    const delta = e.deltaY || e.detail || e.wheelDelta
    if (delta > 0) {
      this.slider.slickPrev()
    }
    else {
      this.slider.slickNext()
    }
  }

  render() {
    const { coffee, cart, addToCart, delFromCart } = this.props
    return (
      <div className="holder menu_holder" onWheel={(e) => this.wheel(e)}>
        <ScrollToTopOnMount />
        <Container>
          {/* <h1 className="under_construction">Товары</h1>
          <h6 className="under_construction_h6">Весь список товаров хранится на сервере и генерируется автоматически</h6> */}
          <Slider
            ref={slider => (this.slider = slider)}
            className="product_slider"
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            dots={false}
            arrows={false}
            draggable
            vertical
            verticalSwiping
          >
            {coffee.map((element, i) => {
              return <div key={i}><ProductCard cart={cart} element={element} addToCart={addToCart} delFromCart={delFromCart} /></div>
            })
            }
          </Slider>
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