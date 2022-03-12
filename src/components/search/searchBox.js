import React from 'react';
import { View, TextInput } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import styles from './style';

const SearchBox = () => {
  return (
    <View style={styles.searchBoxContainer}>
      <Ionic name='search' style={styles.searchBoxIcon} />
      <TextInput
        placeholder='Search'
        placeholderTextColor='#909090'
        style={styles.searchBoxInput}
      />
    </View>
  );
};

export default SearchBox;
