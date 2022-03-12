import React from 'react';
import { View, ScrollView } from 'react-native';
import CacheImage from '../cacheImage';
import Header from './header';
import Bottom from './bottom';
import styles from './style';
import VideoPlayers from '../videoPlayer';
import { Metrics } from '../../themes';
import images from '../../assets/data/homePost';
const Carousel = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      {images?.map((item, index) => (
        <View key={index} style={styles.container}>
          <Header userPic={item.userPic} userName={item.userName} />
          <View>
            {item?.videos ? (
              <VideoPlayers
                uri={item?.videos}
                videoHeight={styles.imageHeight}
                videoWidth={Metrics.screenWidth}
              />
            ) : (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.imageWrapper}
              >
                {item?.images?.map((item, index) => (
                  <CacheImage uri={item} style={styles.image} key={index} />
                ))}
              </ScrollView>
            )}
          </View>
          <Bottom />
        </View>
      ))}
    </ScrollView>
  );
};

export default Carousel;
