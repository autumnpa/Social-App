import React from 'react';
import {Text, View, Image} from 'react-native';
import {users} from '../../userdata/users';

const Stories = () => {
  return (
    <View>
      {users.map((story, index) => (
        <Image source={{uri: story.image}} />
      ))}
      <Text>Stories</Text>
    </View>
  );
};

export default Stories;
