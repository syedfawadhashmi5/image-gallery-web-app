import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import AlbumList from './component/Album/AlbumList'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AlbumList />
      </div>
    </div>
  );
}

export default App;
