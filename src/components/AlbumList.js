import React, { Component } from 'react';
import {
  Text,
  ScrollView
} from 'react-native';

import fetch from 'isomorphic-fetch';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    const API_URL = 'https://rallycoding.herokuapp.com/api/music_albums';
    fetch(API_URL)
      .then(response => response.json())
      .then((responseData) => {
        this.setState({ albums: responseData });
      })
      .catch((err) => console.log(err));
  }

  renderAlbums() {
    return this.state.albums.map((album, i) => (
      <AlbumDetail
        title={album.title}
        artist={album.artist}
        url={album.url}
        image={album.image}
        thumbImage={album.thumbnail_image}
        key={i}
      />
    ));
  }

  render() {
    if (!this.state.albums.length) {
      return <Text>Loading...</Text>;
    }

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
