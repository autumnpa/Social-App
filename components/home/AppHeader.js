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
            // TODO - FIX THIS IMAGE
            uri: 'data:image/png;base64,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',
          }}
          style={styles.icon}
        />
        <Image
          source={{
            uri: 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png',
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
