import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {users} from '../../userdata/users';

const Stories = () => {
  return (
    <View>
      {users.map((story, index) => (
        <Image source={{uri: story.image}} style={styles.story} />
      ))}
      <Text>Stories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
  },
});

export default Stories;
