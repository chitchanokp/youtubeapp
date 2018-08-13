import React, { Component } from 'react';
 // eslint-disable-next-line
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyDBs-frnAV9bVZJv443QN0mxoaTx9hINB0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('kodaline mv');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });

  };


  render() {
    const {videos, selectedVideo} = this.state;
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 600);
    // debounce ใช้เพื่อบังคับให้เรียกฟังชันในนั้นได้ทุกๆ 300 ms

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} //parameter not props
          videos={videos} />
      </div>
    );

  }
}

export default App;


