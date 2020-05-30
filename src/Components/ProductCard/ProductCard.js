import React from 'react'
import Cup from './../../Screens/UnderConstruct/img/black_pink.png';
import { Button } from 'react-bootstrap'


export default class ProductCard extends React.Component {
  state = {
    exist: false,
  };

  exist(element) {
    const { cart } = this.props
    cart.forEach(item => {
      if (item.good_id === element.good_id) { this.setState({ exist: true }) }
    })
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
    if (prevProps.cart !== this.props.cart) {
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

            {!this.state.exist ? <Button variant="light" className="product_button" onClick={() => addToCart(element)}>хочу добавить</Button> : <Button variant="light" className="product_button" onClick={() => this.del(element.good_id)}>хочу удалить</Button>}

          </div>
        </div>
      </div>
    )
  }
}