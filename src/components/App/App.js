import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  state = {
    searchResults: [
      {
        name: "name1",
        artist: "artist1",
        album: "album1",
        id: 11,
      },
      {
        name: "name2",
        artist: "artist2",
        album: "album2",
        id: 22,
      },
      {
        name: "name3",
        artist: "artist3",
        album: "album3",
        id: 33,
      },
    ],
    playlistName: "My Playlist",
    playlistTracks: [
      {
        name: "playlistname1",
        artist: "playlistartist1",
        album: "playlistalbum1",
        id: 1,
      },
      {
        name: "playlistname2",
        artist: "playlistartist2",
        album: "playlistalbum2",
        id: 2,
      },
      {
        name: "playlistname3",
        artist: "playlistartist3",
        album: "playlistalbum3",
        id: 3,
      },
    ],
  };

  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };

  addTrack = (track) => {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  };

  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  };

  savePlaylist = () => {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
  };

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
