import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import NewPostStack from '../components/newPost/NewPostStack';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NewPostStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewPostScreen;
