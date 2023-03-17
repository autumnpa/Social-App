import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/home/AppHeader';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {posts} from '../data/posts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Add header component here */}
      <AppHeader />
      <Stories />
      {/* Wrap in a loop so it can access array data and create posts */}
      <ScrollView>
        {posts.map((post) => (
          <Post post={post} />
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
