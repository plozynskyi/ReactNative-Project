import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

import { PostsList } from '../../components/PostsList';

export const DefaultPostsScreen = ({ route, navigation }) => {
  const { login, email, image, newPost } = route.params;

  const [posts, setPosts] = useState([]);

  // console.log(newPost);

  useEffect(() => {
    if (newPost) {
      setPosts(prevState => [...prevState, newPost]);
    }
  }, [newPost, route.params]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.userContainer}
        onPress={() => {
          navigation.navigate('ProfileScreen', { login, email, image, posts });
        }}
      >
        <View style={styles.userPhotoWrap}>
          {!image ? (
            <Image
              source={require('../../assets/images/user_photo_default.jpg')}
              style={styles.userPhoto}
            />
          ) : (
            <Image source={{ uri: image }} style={styles.userPhoto} />
          )}
        </View>
        <View style={styles.userInfoTextWrap}>
          <Text style={styles.userLoginText}>{login}</Text>
          {email && <Text style={styles.userEmailText}>{email}</Text>}
        </View>
      </TouchableOpacity>
      {newPost && (
        <View style={{ flex: 1 }}>
          <SafeAreaView>
            <FlatList
              data={posts}
              keyExtractor={(item, indx) => indx.toString()}
              renderItem={({ item }) => (
                <PostsList
                  item={item}
                  onCommentsPress={() => {
                    navigation.navigate('Comments', {
                      img: item.img,
                    });
                  }}
                  onMapPress={() => {
                    navigation.navigate('Map', {
                      location: item.locationProps,
                    });
                  }}
                />
              )}
            />
          </SafeAreaView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  userContainer: {
    paddingTop: 32,
    paddingBottom: 32,
    flexDirection: 'row',
  },
  userPhotoWrap: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  userPhoto: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  userInfoTextWrap: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  userLoginText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: '#212121',
  },
});
