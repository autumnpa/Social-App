import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

// Header needs to be a container with 2 views (divs) inside it to hold the logo and the icons
const AppHeader = () => {
  return (
    // Logo container (left div)
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      {/* Icon container (right div) */}
      <View style={styles.iconContainer}>
        {/* Add icons here - use source uri */}
        {/* TODO - touchable opacity */}
        {/* TODO - fix icon display issues */}
        <Image
          source={{
            uri: 'https://www.flaticon.com/free-icon-font/heart_3916579?related_id=3916579',
          }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    // Spaces out the items
    justifyContent: 'space-between',
    alignItems: 'center',
    // Column is default so need to specify row so thigns align properly
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
export default AppHeader;
