import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
// import AlbumList from './component/Album/AlbumList'
import Gallary from './component/Album Gallary/Gallary'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        {/* <AlbumList /> */}
        <Gallary />
      </div>
    </div>
  );
}

export default App;
