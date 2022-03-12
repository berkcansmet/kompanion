import React from 'react';
import { SafeAreaView } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import { Carousel, Header } from '../../components';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} search/>
      <Carousel />
    </SafeAreaView>
  );
};

export default Home;
