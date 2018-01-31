import React from 'react';
import './Music.css';
const music = (props) => {
  return (

    <article className="Music">
     <h3>{props.title}</h3>
    <div className="Info">
          <img src ={props.image}  className="img-responsive"/>

     </div>
    </article>

  )

}

export default music;
