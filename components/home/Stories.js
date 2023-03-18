import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {users} from '../../data/users';

const Stories = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginBottom: 13}}>
      {/* Scrollview horizontal?? The pics currently stack in a column */}
      <ScrollView horizontal>
        {/* Names that corrospond with images from data need to be looped and displayed as well */}
        {/* TODO - Add more styling - check documentation for options */}
        {/* Index unique key error is popping up on this line */}
        {users.map((story, index) => (
          <View key={index}>
            <Image source={{uri: story.image}} style={styles.story} />
            <Text>{story.user}</Text>
          </View>
        ))}
      </ScrollView>
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
    borderColor: 'pink',
  },
});

export default Stories;
