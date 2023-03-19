import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddNewPost from '../components/newPost/AddNewPost';

const Stack = createStackNavigator();

const NewPostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddNewPost" component={AddNewPost} />
      <Stack.Screen name="ConfirmPost" component={ConfirmPost} />
    </Stack.Navigator>
  );
};


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
