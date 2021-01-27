import React, {useState} from 'react'
import './App.css';
import Conter from './component/Conter'
import {CounterContext, Namecontext} from "./counterContext";

function App() {

  let increment = useState(1)
  return (
    <div className="App">
      <CounterContext.Provider value={increment}>
      <Namecontext.Provider value='fawad'>
      <h1>Conter App</h1>
      <Conter />
      </Namecontext.Provider>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
