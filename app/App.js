
import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchResults: [{name: 'name1', artist: 'artist1', album: 'album1',id: 1},
      {name: 'name2', artist: 'artist2', album: 'album2',id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3',id: 3},
      {name: 'name4', artist: 'artist4', album: 'album4',id: 4},
      {name: 'name5', artist: 'artist5', album: 'album5',id: 5}],
      playlistName: 'My Playlist',
      playlistTracks: [
      {name: 'plname1', artist: 'plartist1', album: 'plalbum1',id: 6},
      {name: 'plname2', artist: 'plartist2', album: 'plalbum2',id: 7},
      {name: 'plname3', artist: 'plartist3', album: 'plalbum3',id: 8},
      {name: 'plname4', artist: 'plartist4', album: 'plalbum4',id: 9},
      {name: 'plname5', artist: 'plartist5', album: 'plalbum5',id:
       10}]           
    }
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
  }
addTrack(track){
  let tracks=this.state.playlistTracks; /*refers to the current state of the above array*/
  if (tracks.find(savedTrack =>savedTrack.id===track)){
return;
  }  
  /* if it's anew track, add it to the array*/
  tracks.push(track);
  /*update teh state of playlistTracks to the new tracks array defined above*/
this.setState({playlistTracks: tracks});

}

removeTrack(track){
  let tracks=this.state.playlistTracks;
  tracks=tracks.filter(currentTrack=>currentTrack.id!==track.id);
  this.setState ({playlistTracks: tracks});


}
  
  render(){
  
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar/>
    <div className="App-PlayList">
    <SearchResults searchResults={this.state.searchResults}
    onAdd= {this.addTrack}/>
   <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
   onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    
   );
  }
}


export default App;
