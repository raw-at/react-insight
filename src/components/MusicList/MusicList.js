import React,{Component} from 'react';
import './MusicList.css';
import Music from './Music/Music'
class MusicList extends Component {
  state = {
    musics : [
      {
        artist:'Blizzard',
        image:"https://spark.adobe.com/images/landing/examples/blizzard-album-cover.jpg",
        id:1
      },
      {
        artist:'Coldplay',
        image:"https://creators-images.vice.com/content-images/contentimage/no-slug/32b467be1ad9b7c6db2671bc3ffd69ab.jpg",
        id:2,

      },
      {
        artist:'Havana',
        image:"https://upload.wikimedia.org/wikipedia/en/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png",
        id:3,

      },
      {
        artist:'Pink Floyd',
        image:"https://imgix.ranker.com/node_img/41/816069/original/dark-side-of-the-moon-albums-photo-1?w=650&q=50&fm=jpg&fit=crop&crop=faces",
        id:4,
      },


    ]
  }

  render(){

    const musics = this.state.musics.map(
    music=>{
    return <Music
      key={music.id}
      title={music.artist}
      image={music.image}
      />
    }

)
    return (
      <div className="Articles">
        {musics}
      </div>
    );
  }
}
export default MusicList;
