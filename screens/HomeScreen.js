import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Header from '../components/home/header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Add header component here */}
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
});

export default HomeScreen;
