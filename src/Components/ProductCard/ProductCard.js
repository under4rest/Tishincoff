import React from 'react'
import Cup from './../../img/Product.png';
import { Button } from 'react-bootstrap'


export default class ProductCard extends React.Component {
  state = {
    upd: 0
  };
  exist(element) {
    const { cart } = this.props
    let a = false
    cart.forEach(item => {
      if (item.good_id === element.good_id) { a = true }
    })
    return a
  }
  del(id) {
    const { delFromCart } = this.props
    delFromCart(id);
    this.setState({ exist: false })
  }
  componentDidMount() {
    this.exist(this.props.element)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart || prevProps.element.category_id !== this.props.element.category_id) {
      this.exist(this.props.element)
    }
  }

  render() {
    const { element, addToCart } = this.props
    return (
      <div className="product_item">
        <div className="product_img_holder">
          <img src={Cup} alt='website logo' className="product_img" />
        </div>
        <div className="product_description">
          <div className="product_text">
            <h3>{element.good_name}</h3>
            <p>{element.good_param}</p>
            <p>{element.good_second_param}</p>
            <p>{element.good_description}</p>
          </div>
          <div className="product_button_holder">
            {!this.exist(element) ? <Button variant="light" className="product_button" onClick={() => { console.log({ element }); addToCart(element) }}>хочу добавить</Button> : <Button variant="light" className="product_button" onClick={() => this.del(element.good_id)}>хочу удалить</Button>}
          </div>
        </div>
      </div>
    )
  }
}