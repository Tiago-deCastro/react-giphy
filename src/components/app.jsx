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
      selectedGifId: 'xT9IgDEI1iZyb2wqo8',
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
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

  selectGif(id) {
    this.setState({
      selectedGifId: id
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
          selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
