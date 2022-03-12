import React from 'react';
import VideoPlayer from 'react-native-video-player';

const VideoPlayers = ({ uri, videoWidth, videoHeight }) => {
  return (
    <VideoPlayer
      muted
      loop
      disableFullscreen
      hideControlsOnStart={true}
      showDuration={false}
      autoplay={true}
      video={uri}
      videoWidth={videoWidth}
      videoHeight={videoHeight?.height}
      resizeMode='cover'
    />
  );
};

export default VideoPlayers;
