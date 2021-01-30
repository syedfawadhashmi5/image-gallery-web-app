import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Gallary.css";

export default function Gallary() {
  const [Img, setimg] = useState([{}]);
  const [selectedImg, setSelectedImg] = useState('https://via.placeholder.com/450x300/0000FF/808080 ?Text=Digital.com');

  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/photos");

    const data = result.data.slice(0, 8);


    setimg(data);
  }, []);

  return (
    <div className="Gallary">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
        <div className="imgContainer">
          {Img.map((iamge, index) => (
            <img
              style={{
                border: iamge === selectedImg ? "4px solid purple" : "",
              }}
              key={index}
              src={iamge.thumbnailUrl}
              alt="sad"
              onClick={() => setSelectedImg(iamge.thumbnailUrl)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
