import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {users} from '../../userdata/users';

const Stories = () => {
  return (
    <View>
      {/* Scrollview horizontal?? The pics currently stack in a column */}
      <ScrollView horizontal>
        {/* TODO - Add more styling - check documentation for options */}
        {users.map((story, index) => (
          <Image source={{uri: story.image}} style={styles.story} />
        ))}
      </ScrollView>
      <Text>Stories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
  },
});

export default Stories;
