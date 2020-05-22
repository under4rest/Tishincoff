import React from "react";
import './master.css'
import Cup from './img/black_pink.png';

class UnderConstruct extends React.Component {
  render() {

    return (
      <>
        <div className="holder">
          <h6 className="under_construction_h6">Угадай новый рецепт</h6>
          <h1 className="under_construction">Готовим блокбастер</h1>
          <img src={Cup} alt='website logo' className="cup" />
        </div>
      </>
    )
  };
}

export default UnderConstruct