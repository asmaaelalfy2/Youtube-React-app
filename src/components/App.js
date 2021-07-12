import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount(){
    this.onFormSubmit('cars')
  }
  onFormSubmit = async (term) => {
    const res = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyBE7TLbsa_VYfMuybTbmZcSU1U7ZrdS2QU',
          q: term,
        },
      }
    );
    this.setState({ videos: res.data.items ,selectedVideo:res.data.items[0]});
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetails video={this.state.selectedVideo} />

            </div>
            <div className="five wide column">
            <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
            </div>
       
          </div>
        </div>
      </div>
    );
  }
}

export default App;
