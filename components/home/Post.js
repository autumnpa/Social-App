import React from 'react';
import {Text, View, Image} from 'react-native';

// Initialize Post
// Takes in a post so we can use it within the return
const Post = ({post}) => {
  return (
    <View styles={{marginBottom: 30}}>
      <Text>Post</Text>
      {/* Post header goes here */}
      <PostHeader post={post} />
    </View>
  );
};

// Create post header component
// Take in {post} to access info in my array
const PostHeader = ({post}) => {
  <View>
    <View>
        {/* User image */}
      <Image />
      {/* User name */}
      <Text />
    </View>
  </View>;
};

export default Post;
