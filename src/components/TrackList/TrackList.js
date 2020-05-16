import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks &&
                    this.props.tracks.map(track => 
                        <Track key={track.id}
                        track={track}
                        isRemoval={this.props.isRemoval}
                        />
                    )
                }
            </div>
        )
    }
}

export default TrackList
