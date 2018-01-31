import React,{Component} from 'react';
import './Articles.css';
import Article from './Article/Article'
class Articles extends Component {
  state = {
    articles : [
      {
        name:'Using Self-Help Techniques for Dealing with Stress',
        aurthor:'Allen Elkin',
        content:"It may seem like theres nothing you can do about stress.The bills wont stop coming, there will never be more hours in the day,and your work and family responsibilities will always be demanding.But you have a lot more control than you might think",
        id:1
      },
      {
        name:'Stress Management for Dummies',
        aurthor:'Allen Elkin',
        id:2,
        content:'It may seem like theres nothing you can do about stress.The bills wont stop coming, there will never be more hours in the day,and your work and family responsibilities will always be demanding.But you have a lot more control than you might think',
      },
      {
        name:'Stress Management for Dummies',
        aurthor:'Allen Elkin',
        id:3,
        content:'It may seem like theres nothing you can do about stress.The bills wont stop coming, there will never be more hours in the day,and your work and family responsibilities will always be demanding.But you have a lot more control than you might think',

      },
      {
        name:'Stress Management for Dummies',
        aurthor:'Allen Elkin',
        id:4,
        content:'It may seem like theres nothing you can do about stress.The bills wont stop coming, there \
         will never be more hours in the day,and your work and family responsibilities will always be demanding.\
         But you have a lot more control than you might think\
         It may seem like theres nothing you can do about stress.The bills wont stop coming, ther',
      },


    ]
  }

  render(){

    const articles = this.state.articles.map(
  article=>{
    return <Article
      key={article.id}
      title={article.name}
      body={article.body}
      content={article.content}/>
    }

)
    return (
      <div className="Articles">

        {articles}
      </div>
    );
  }
}
export default Articles;
