import React from 'react';
import { CachedImage } from '@georstat/react-native-image-cache';
const CacheImage = ({ uri, style }) => {
  return (
    <>
      <CachedImage
        source={uri}
        style={style}
        resizeMode='cover'
        thumbnailSource='https://via.placeholder.com/350x150'
      />
    </>
  );
};
export default CacheImage;
