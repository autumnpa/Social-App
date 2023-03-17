import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/home/AppHeader';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {posts} from '../data/posts';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Add header component here */}
      <AppHeader />
      <Stories />
      {/* Wrap in a loop so it can access array data and create posts */}
      <ScrollView>
        {/* - DONE!! TODO - Add unique key here to remove error */}
        {/* For each post from my data it is looped and then sent to my post component and manipulated further */}
        {posts.map((post, index) => (
          // Accesses the posts
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    flex: 1,
  },
});

export default HomeScreen;
