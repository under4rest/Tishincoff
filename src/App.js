import React from 'react';
import './App.css';
import Screen from './Screens/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'


function App(props) {
  return (<>
    {/* <div className="invert"> */}
    <Screen className="overalContainer" data={props.state} />
    {/* </div> */}
  </>
  );
}

export default App;
