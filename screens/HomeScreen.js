import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import AppHeader from '../components/home/AppHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      {/* Add header component here */}
      <AppHeader />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default HomeScreen;
