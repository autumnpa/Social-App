import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import AppHeader from '../components/home/AppHeader';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Add header component here */}
      <AppHeader />
      <Stories />
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
