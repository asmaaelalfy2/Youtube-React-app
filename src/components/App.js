import React, { useState,useEffect } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit('cars');
  }, []);

  const onFormSubmit = async (term) => {
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
    setVideos(res.data.items);
    setselectedVideo(res.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setselectedVideo(video);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetails video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
