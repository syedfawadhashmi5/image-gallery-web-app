import React, { useEffect, useState } from "react";
import axios from "axios";
import Albumfliter from './Albumfliter'
import './AlbumList.css'

function AlbumList() {
  const [img, setimg] = useState([{}]);

  useEffect(async () => {
    const result = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );

    const { data } = result;

    setimg(data);
  }, []);

  console.log( 'img' ,img.id);

  return (
    <div className='container'>
      <div>
      {
        img.map(data => 
          <div  className='wrapper' key={data.id} id={data.id}>
            <img src='https://via.placeholder.com/450x300/0000FF/808080 ?Text=Digital.com'  alt={data.url}/>
            <div className='wrapper_contain'>
              <h1>{data.name}</h1>
              <h3>{data.username}</h3>
              <span>{data.email}</span>
              <p>{data.website}</p>
              <button>view Album</button>
            </div>
          </div>
        )
      }
      </div>
      <Albumfliter />
    </div>
  );
}

export default AlbumList;
