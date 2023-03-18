import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SearchBox = () => {
  return (
    <View styles={styles.container}>
      <TextInput
        placeholder="Search here..."
        placeholderTextColor="#909090"
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
  },
  searchInput: {
    width: '94%',
    backgroundColor: '#ebebeb',
  },
});

export default SearchBox;
