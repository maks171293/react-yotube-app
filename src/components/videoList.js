import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (<VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag} 
      video={video}/>)
  })
  return (
    <div>
      <ul className='col-md-4'>
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
