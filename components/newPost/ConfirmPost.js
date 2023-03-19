import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ConfirmPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Confirm Post</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default ConfirmPost;
