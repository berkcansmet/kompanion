import React from 'react';
import { View } from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';

const Bottom = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomWrapper}>
        <View style={styles.iconContainer}>
          <Feather name='heart' size={24} />
          <Feather name='message-circle' size={24} />
          <Ionic name='md-paper-plane-outline' size={24} />
        </View>
        <Feather name='bookmark' size={24} />
      </View>
    </View>
  );
};

export default Bottom;
