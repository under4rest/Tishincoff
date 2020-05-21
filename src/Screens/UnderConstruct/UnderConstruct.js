import React from "react";
import './master.css'
import Logo from '../../LOGO_tis.png';

class UnderConstruct extends React.Component {
  render() {
    console.warn(`${window.location.origin}${Logo}`);
    
    return (
      <>
      <div className="holder">
        <h1 className="under_construction">UNDER CONSTRUCTION</h1>
        <img scr={`${Logo}`} alt="logo"/>
      </div>
      </>
    )
  };
}

export default UnderConstruct