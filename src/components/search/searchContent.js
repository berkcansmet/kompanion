import React from 'react';
import { View, ScrollView } from 'react-native';
import { CacheImage } from '..';
import { Metrics } from '../../themes';
import VideoPlayers from '../videoPlayer';
import styles from './style';
import data from '../../assets/data/searchPost';
const SearchContent = props => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.searchContentScroll}
        showsVerticalScrollIndicator={false}
      >
        {data.map((data, index) => {
          return (
            <View key={index}>
              {index % 2 ? (
                <View style={styles.searchContentContainer}>
                  {data.images.map((imageData, imgIndex) => {
                    return (
                      <View key={imgIndex} style={styles.imageViewContainer}>
                        <CacheImage uri={imageData} style={styles.image} />
                      </View>
                    );
                  })}
                </View>
              ) : (
                <View style={styles.videoContainer}>
                  <View style={styles.videoPlayerWrapper}>
                    <VideoPlayers uri={data.images[2]} videoWidth={Metrics.screenWidth / 0.65} />
                  </View>
                  <View style={styles.evenImageContainer}>
                    {data.images.slice(0, 2).map((imageData, imgIndex) => {
                      return (
                        <View key={imgIndex} style={styles.evenImageWrapper}>
                          <CacheImage uri={imageData} style={styles.evenImage} />
                        </View>
                      );
                    })}
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchContent;
