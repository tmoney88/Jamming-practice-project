import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends Component {
  state = {
    searchResults: [],
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

  search = (term) => {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  };

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
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
