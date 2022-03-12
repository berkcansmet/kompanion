import React from 'react';
import { View, Text } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import { CacheImage } from '..';
import styles from './style';
const Header = ({ userPic, userName }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerWrapper}>
        <CacheImage uri={userPic} style={styles.headerProfileImage} />
        <View style={styles.headerTextContainer}>
          <Text>{userName}</Text>
        </View>
      </View>
      <Entypo name='dots-three-horizontal' style={styles.headerIcon} />
    </View>
  );
};

export default Header;
