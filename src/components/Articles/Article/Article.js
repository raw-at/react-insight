import React from 'react';
import './Article.css';
const article = (props) => {
  return (

    <article className="Article">
     <h3>{props.title}</h3>
     <p>{props.content}</p>
    <div className="Info">
          <div className="Author">
            {props.author}
          </div>
     </div>
    </article>

  )

}

export default article;
