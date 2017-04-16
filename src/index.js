import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail'
const API_KEY = 'AIzaSyBI5w7aJpDPMUOR2h-edcQRlM9qawCuv44';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('reactjs');
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    const videoSearchDebounced = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (<div className='container'>
            <SearchBar
            onVideoSearch={videoSearchDebounced}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})}
              videos={this.state.videos} />
          </div>)
  }
};

ReactDOM.render(<App/>,
          document.getElementById('app'));
