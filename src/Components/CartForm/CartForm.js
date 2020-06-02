import React from 'react'
import './master.css'
import { Button, Alert } from 'react-bootstrap'

export default class CartForm extends React.Component{
  state = {
    delivery: 0,
  }
  render() {
    const { delivery } = this.state
    return(
      <div className="cart_form_holder">
        <div className="cart_form_input_holder">
          <div className="cart_form_input">
            <p>ИМЯ:</p>
            <input type="text" />
          </div>
          <div className="cart_form_input">
            <p>ФАМИЛИЯ:</p>
            <input type="text" />
          </div>
        </div>
        <div className="delivery_holder">
          <div className="delivery_item" onClick={()=> this.setState({delivery: 0})}>
            <p>САМОВЫВОЗ</p>
            {delivery === 0 ?<div className="delivery_item_active"/> : null}
          </div>
          <div className="delivery_item" onClick={()=> this.setState({delivery: 1})}>
            <p>САМОВЫПИЛ</p>
            {delivery === 1 ?<div className="delivery_item_active"/> : null}
          </div>
        </div>
        <Button variant="light" className="cart_form_submit" onClick={()=> alert('Отправлено!')} ><p>ОТПРАВИТЬ</p></Button>
      </div>
    )
  }
}