import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';
import NewPostStack from '../components/newPost/NewPostStack';

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Next" onPress={() => navigation.navigate('AddNewPost')} />
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
