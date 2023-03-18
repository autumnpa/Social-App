import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const navigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Create screen stack */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigationStack;
