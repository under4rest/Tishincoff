import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import ProductCard from './../../Components/ProductCard/ProductCard'
import Slider from "react-slick";
import actionAddToCart, { actionDelFromCart } from './../../Redux/actions/addToCart'
import BG from './BG.png'
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ProductList extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
    category: 0,
  };

  wheel(e) {
    if (window.innerWidth > 1200) {
      const delta = e.deltaY || e.detail || e.wheelDelta
      if (delta < 0) {
        this.slider.slickPrev()
      }
      else {
        this.slider.slickNext()
      }
    }
  }
  setCategory(id) {
    this.setState({ category: id });
    this.slider.slickGoTo(0)
  }
  render() {
    const { products, cart, addToCart, delFromCart } = this.props
    const { category } = this.state

    return (
      <div className="holder menu_holder" onWheel={(e) => this.wheel(e)}>
        <ScrollToTopOnMount />
        <div className="absolute_bg">
          <img src={BG} alt="BG" />
        </div>
        <Container style={{ zIndex: 1 }}>
          {window.innerWidth > 1200 ? <Slider
            ref={slider => (this.slider = slider)}
            className="product_slider"
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            dots
            arrows={false}
            vertical
            dotsClass='button_slider'
          >
            {products[category].list.map((element, i) => {
              return <div key={i}><ProductCard cart={cart} key={category} element={element} addToCart={addToCart} delFromCart={delFromCart} /></div>
            })
            }
          </Slider> : products.map((element, index) => {
            return element.list.map((element, i) => {
              return <div key={i}><ProductCard cart={cart} key={category} element={element} addToCart={addToCart} delFromCart={delFromCart} /></div>
            }
            )
          })
          }
        </Container>
        {window.innerWidth > 1200 ? <div className="category_container">
          {products.map((item, index) => {
            return <p onClick={() => this.setCategory(index)} className={'categoryItem', category === item.category_id ? ' active' : null
            } key={item.category_id} > {item.category_name}</p>
          })
          }
        </div> : null
        }
      </div>
    )
  }
}
const mapStateToPorps = (state) => {
  return {
    products: state.products,
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