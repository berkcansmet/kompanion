import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Header, SearchContent, SearchBox } from '../../components';
const Search = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  };

  return (
    <SafeAreaView>
      <Header />
      <SearchBox />
      <SearchContent data={getData} />
    </SafeAreaView>
  );
};

export default Search;
