import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const Screen = lazy(() => import('./Screens/index.js'))

function Preloader() {
  return (
    <div style={{backgoundColor: "black"}}/>
  )
}


function App(props) {
  return (<>
    <Suspense fallback={<Preloader />}>
      <Screen className="overalContainer" data={props.state} />
      <Preloader />
    </Suspense>
    {/* <div className="invert"> */}
    {/* </div> */}
  </>
  );
}

export default App;
