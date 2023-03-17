import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

// Create Array of icons to use in the footer - like, comment, share, and save
const postFooterIcons = [
  {
    // Like
    // Have a version that shows liked and unliked icons
    iconName: 'Like',
    imageURL: 'https://img.icons8.com/ios-glyphs/2x/hearts.png',
    likedImageURL: 'https://img.icons8.com/ios-glyphs/2x/like--v1.png',
  },
  {
    // Comment
    iconName: 'Comment',
    imageURL: 'https://img.icons8.com/ios-glyphs/2x/filled-topic.png',
  },
  {
    // Share
    iconName: 'Share',
    imageURL: 'https://img.icons8.com/ios-glyphs/2x/filled-sent.png',
  },
  {
    // Save
    iconName: 'Save',
    imageURL: 'https://img.icons8.com/ios-glyphs/2x/bookmark-ribbon.png',
  },
];
// Likes data component goes here
// Use within the post footer component
const Likes = ({post}) => {
  return <Text style={styles.boldText}>{post.likes} likes</Text>;
};
// Create caption - similar to Likes component
// Add users name before the caption - needs to be bolded
const Caption = ({post}) => {
  return (
    <View style={styles.captionContain}>
      <Text>
        <Text style={styles.boldText}>{post.user}</Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};
// Initialize Post
// Takes in a post so we can use it within the return
function Post({post}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View styles={{marginBottom: 30}}>
      {/* Post header goes here */}
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={styles.postFooter}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
      </View>
    </View>
  );
}

// Create post header component
// Take in {post} to access info in my array
const PostHeader = ({post}) => {
  return (
    <View style={styles.postHeadContain}>
      <View style={styles.postHeadUser}>
        {/* User image */}
        <Image source={{uri: post.profile}} style={styles.postHeadProfile} />
        {/* User name */}
        <Text style={styles.boldText}>{post.user}</Text>
      </View>
      {/* Fake more settings/menu "button" */}
      <Text>...</Text>
    </View>
  );
};

// Create post image component
// Needs to grab the object from my arrays to display the post images from the data files
const PostImage = ({post}) => {
  // DONT FORGET THE RETURN THIS TIME!!!
  // Images are overlapping - need to add more styling here
  // Wrap in a view (div)
  return (
    <View style={styles.postImageContain}>
      <Image source={{uri: post.imageURL}} style={styles.postImage} />
    </View>
  );
};

// Create post footer here
// Needs to have comments and icons - do I make this to be the interactive element for users?
const PostFooter = () => {
  // DONE - TODO - Save icon needs to be displayed on the far right side of the screen int he footer component
  const Icon = ({imgStyle, imgURL}) => (
    <View>
      <Image style={imgStyle} source={{uri: imgURL}} />
    </View>
  );
  return (
    <View style={styles.footerIconContain}>
      {/* First 3 icons in a view (div) together because they are displaying on the left */}
      {/* These icons need their own styling so they can be displayed left */}
      <View style={styles.leftIcons}>
        <Icon
          imgStyle={styles.footerIcon}
          imgURL={postFooterIcons[0].imageURL}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgURL={postFooterIcons[1].imageURL}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imgURL={postFooterIcons[2].imageURL}
        />
      </View>
      {/* Save icon displays on the right side in the same row so it needs its own view */}
      {/* Needs separate styling to be displayed where I want it to */}
      <View style={styles.rightIcon}>
        <Icon
          imgStyle={styles.footerIcon}
          imgURL={postFooterIcons[3].imageURL}
        />
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
    marginBottom: 5,
  },
  postImageContain: {
    width: '100%',
    height: 350,
  },
  postImage: {
    height: '100%',
    resizeMode: 'cover',
  },
  postFooter: {
    marginHorizontal: 11,
    margin: 20,
  },
  footerIconContain: {
    flexDirection: 'row',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  leftIcons: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  captionContain: {
    margin: 5,
  },
  boldText: {
    fontWeight: '600',
    margin: 5,
  },
});

export default Post;
