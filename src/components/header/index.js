import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';

const Header = ({ navigation, search }) => {
  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.text}>Instagram</Text>
      {search ? (
        <Feather onPress={() => navigation.navigate('Search')} name='search' style={styles.icon} />
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;
