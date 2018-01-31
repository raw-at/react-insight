import React,{Component} from 'react';
import './Books.css';
import Book from './Book/Book'
class Books extends Component {
  state = {
    books : [
      {
        name:'Stress Management for Dummies',
        image:'http://t1.gstatic.com/images?q=tbn:ANd9GcTrlyotEEWlfd0bJK1U_lM-jJaHIt8zenZDGKqfPYQ6hxbM2fPt',
        aurthor:'Allen Elkin',
        id:1
      },
      {
        name:'Stress Management for Dummies',
        image:'http://t1.gstatic.com/images?q=tbn:ANd9GcTrlyotEEWlfd0bJK1U_lM-jJaHIt8zenZDGKqfPYQ6hxbM2fPt',
        aurthor:'Allen Elkin',
        id:2
      },
      {
        name:'Stress Management for Dummies',
        image:'http://t1.gstatic.com/images?q=tbn:ANd9GcTrlyotEEWlfd0bJK1U_lM-jJaHIt8zenZDGKqfPYQ6hxbM2fPt',
        aurthor:'Allen Elkin',
        id:3
      },
      {
        name:'Stress Management for Dummies',
        image:'http://t1.gstatic.com/images?q=tbn:ANd9GcTrlyotEEWlfd0bJK1U_lM-jJaHIt8zenZDGKqfPYQ6hxbM2fPt',
        aurthor:'Allen Elkin',
        id:4
      },


    ]
  }

  render(){

    const books = this.state.books.map(
  book=>{
    return <Book
     key={book.id}
    title={book.name}
    image={book.image}
    author={book.author} />
    }

)
    return (
      <div className="Books">
        {books}
      </div>
    );
  }
}
export default Books;
