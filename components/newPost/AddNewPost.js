import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AddNewPost = ({navigation}) => {
  return (
    <View>
      <Text>Add New Post</Text>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('ConfirmPost');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AddNewPost;
