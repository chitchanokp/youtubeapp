import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    const {videos, onVideoSelect} = props; //const use props class use this.props 
    // or const videos = props.videos

    const videoItems = videos.map( video => {
        return <VideoListItem 
                  onVideoSelect= {onVideoSelect}
                  video={video} 
                  key={video.etag}/>
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;