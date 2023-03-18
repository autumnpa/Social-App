import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import SearchBox from '../components/search/SearchBox';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBox />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});

export default SearchScreen;
