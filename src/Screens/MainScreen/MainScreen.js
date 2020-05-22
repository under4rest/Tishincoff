import React from "react";
import './master.css'
import BG from './ColorGradient.png';

class MainScreen extends React.Component {
  render() {
    return (
      <>
        <div className="holder-main">
          <div className="column-left">
            <h1 className="main-text">варим самый<br /> самый вкусный<br /> кофе в городе</h1>
          </div>
          <div className="column-right">
            <div className="main-button">хочу попробовать</div>
          </div>
        </div>
      </>
    )
  };
}

export default MainScreen