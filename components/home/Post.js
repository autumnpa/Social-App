import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

// Initialize Post
// Takes in a post so we can use it within the return
const Post = ({post}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View styles={{marginBottom: 30}}>
      {/* Post header goes here */}
      <PostHeader post={post} />
    </View>
  );
};

// Create post header component
// Take in {post} to access info in my array
const PostHeader = ({post}) => {
  return (
    <View style={styles.postHeadContain}>
      <View style={styles.postHeadUser}>
        {/* User image */}
        <Image source={{uri: post.profile}} style={styles.postHeadProfile} />
        {/* User name */}
        <Text style={styles.userName}>{post.user}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeadContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  postHeadProfile: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1,
    borderColor: 'black',
  },
  postHeadUser: {
    // Changes the default lay out to render under the profile pic and render beside it
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 5,
  },
});

export default Post;
