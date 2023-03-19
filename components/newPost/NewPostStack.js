import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddNewPost from '../newPost/AddNewPost';
import ConfirmPost from './ConfirmPost';

const Stack = createStackNavigator();

const NewPostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddNewPost" component={AddNewPost} />
      <Stack.Screen name="ConfirmPost" component={ConfirmPost} />
    </Stack.Navigator>
  );
};

export default NewPostStack;
