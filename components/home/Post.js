import React from 'react';
import {Text, View} from 'react-native';

// Takes in a post so we can use it within the return
const Post = ({post}) => {
  return (
    <View styles={{marginBottom: 30}}>
      <Text>Post</Text>
    </View>
  );
};

export default Post;
