import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SearchContent = () => {
  // Create an array with images to use as fake posts ont he search/explore page
  const searchImages = [
    {
      id: 0,
      images: [
        require('../../assets/post1.jpg'),
        require('../../assets/post2.jpg'),
        require('../../assets/post3.jpg'),
        require('../../assets/post4.jpg'),
        require('../../assets/post5.jpg'),
        require('../../assets/post6.png'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../assets/post7.jpg'),
        require('../../assets/post8.jpg'),
        require('../../assets/post9.jpg'),
        require('../../assets/post10.jpg'),
        require('../../assets/post11.jpg'),
        require('../../assets/post12.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../assets/post13.jpg'),
        require('../../assets/post14.jpg'),
        require('../../assets/post15.jpg'),
      ],
    },
  ];
  return (
    <View>
      {searchImages.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity>
                      <Image source={imageData} style={styles.imageData}/>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  imageData: {
    width: 129,
    height: 150,
  },
});

export default SearchContent;
