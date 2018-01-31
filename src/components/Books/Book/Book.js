import React from 'react';
import './Book.css';
const book = (props) => {
  return (

    <article className="Book">
     <h1 style={{color:"black"}}>{props.title}</h1>
     <img src={props.image} className="img-responsive"/>
     <div className="Info">
          <div className="Author">{props.author}</div>
     </div>
    </article>

  )

}

export default book;
