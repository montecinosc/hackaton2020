import React from 'react';
import Video from '../img/VideoHome.mp4'
import ReactPlayer from 'react-player'
import '../styles/VideoHeader.css'

const VideoHeader = () => {
    return (
        <div> 
            <ReactPlayer
                className='react-player'
                url={Video}
                width='100%'
                height='100%'
                controls={false}
                playing={true}
                muted={true}
                loop={true}
            />
        </div>
    );
}
 
export default VideoHeader;