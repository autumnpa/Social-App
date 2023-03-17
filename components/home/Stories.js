import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {users} from '../../userdata/users';

const Stories = () => {
  return (
    <View>
      {/* Scrollview horizontal?? The pics currently stack in a column */}
      <ScrollView horizontal>
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
    width: 80,
    height: 80,
  },
});

export default Stories;
