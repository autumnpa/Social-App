import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const AppHeader = () => {
  return (
    <View>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});
export default AppHeader;
