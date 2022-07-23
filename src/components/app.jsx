import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null,
      clicked: false
    };
  }

  handleClick = (selectedGifId) => {
    console.log(selectedGifId);
    this.setState({
      selectedGifId: selectedGifId,
      clicked: true
    });
  }

  search = (query) => {
    giphy('xEG8Vn6530oxP6IXnH3D2XOmWgbrAS5F').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      { id: '5zu5JovduWFBS'},
      { id:'xTiN0B9b79GgjT8o3m'}
    ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}
          onGifSelect={selectedGif => this.handleClick(selectedGifId)} />
        </div>
      </div>
    );
  }
}

export default App;
