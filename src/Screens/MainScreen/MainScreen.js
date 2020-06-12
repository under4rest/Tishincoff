import React from "react";
import './master.css'
import BG from './ColorGradient.png';
import cup from '../UnderConstruct/img/black_pink.png'
import vk from '../../img/vk.svg'
import insta from '../../img/instagram.svg'

class MainScreen extends React.Component {
  render() {
    return (
      <>
        <div className="holder-main">
          <div className="column-right">
            <img src={cup} className="cup_main" alt="cup" />
            <div className="butn_holder">
              <div className="main-button">хочу попробовать</div>
              <div className="brand_holder">
                <img src={vk} alt="vk" className="brand_logo vk" />
                <img src={insta} alt="inst" className="brand_logo" />
              </div>
            </div>
          </div>
          <div className="column-left">
            <p>Угадай новый рецепт</p>
            <h1 className="main-text">Готовим<br />Блокбастер</h1>
          </div>
        </div>
      </>
    )
  };
}

export default MainScreen