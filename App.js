import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import SearchScreen from './screens/SearchScreen';
import NewPostStack from './components/newPost/NewPostStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="New Post" component={NewPostStack} />
        <Tab.Screen name="Reels" component={HomeScreen} />
        <Tab.Screen name="My Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
