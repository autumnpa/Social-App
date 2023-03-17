import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
