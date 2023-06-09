import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import SearchBox from '../components/search/SearchBox';
import SearchContent from '../components/search/SearchContent';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBox />
        <SearchContent />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    marginTop: 50,
    marginLeft: 10,
  },
});

export default SearchScreen;
