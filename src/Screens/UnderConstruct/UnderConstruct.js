import React from "react";
import './master.css'
import Cup from './img/black_pink.png';

class UnderConstruct extends React.Component {
  render() {
    console.warn(this.props);
    
    return (
      <>
        <div className="holder">
          <h6 className="under_construction_h6">Угадай новый рецепт</h6>
          <h1 className="under_construction">Готовим блокбастер</h1>
          <img src={Cup} alt='website logo' className="cup" />
          <div className="main-button" onClick={() => this.props.addToCart(this.props.data.coffee[0])}>хочу попробовать</div>
          <div className="main-button" onClick={() => this.props.addToCart(this.props.data.coffee[1])}>хочу попробовать</div>
        </div>
      </>
    )
  };
}

export default UnderConstruct