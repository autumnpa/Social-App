import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AddNewPost from '../newPost/AddNewPost';
import ConfirmPost from './ConfirmPost';

const Stack = createStackNavigator();

const NewPostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddNewPost"
        component={AddNewPost}
        options={{title: 'Add New Post'}}
      />
      <Stack.Screen
        name="ConfirmPost"
        component={ConfirmPost}
        options={{title: 'Confirm Post'}}
      />
    </Stack.Navigator>
  );
};

export default NewPostStack;
