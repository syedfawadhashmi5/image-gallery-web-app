import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './Albumfliter.css'

function Albumfliter() {
  const [data, setdata] = useState([{}]);

  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/albums");

    const { data } = result;


    console.log("album ", data.slice(0, 10));
    setdata(data.slice(0, 8))
  }, []);

  return (
    <div className='filter_container'>
      <h1>Filter Album</h1>
      <div className='filter_menu'>
          {
              data.map(obj =>
                <ul key={obj.id}>
                    <Router>
                    <li><Link to='/data.id' >{obj.title}</Link ></li>
                    </Router>
                </ul> 
                )
          }
      </div>
    </div>
  );
}

export default Albumfliter;
