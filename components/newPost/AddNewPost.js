import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NewPostScreen = () => {
  return (
    <View>
      <Text>Add New Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default NewPostScreen;
