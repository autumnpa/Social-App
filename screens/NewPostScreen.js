import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewPostScreen;
