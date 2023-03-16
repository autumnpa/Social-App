import React from 'react';
import {View, Text, Image} from 'react-native';

const AppHeader = () => {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} />
    </View>
  );
};

export default AppHeader;
