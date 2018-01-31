import React ,{Component} from 'react';
import Profilehead from '../../components/ProfileHead/ProfileHead';
import Books from '../../components/Books/Books';
import Articles from '../../components/Articles/Articles';
import MusicList from '../../components/MusicList/MusicList';

class Profile extends Component {
    render(){

      return (
        <div>
          <Profilehead />
          <h1 style={{color:'red'}}>Suggested Books</h1>
          <Books />
          <hr />

          <h1 style={{color:'red'}}>Suggested Music </h1>

          <MusicList />
          <h1 style={{color:'red'}}>Articles Suggestion For Stress Releif</h1>

          <Articles />



        </div>
      );
    }
}

export default Profile;
