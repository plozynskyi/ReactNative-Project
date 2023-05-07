import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  FlatList,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';

import { PostsList } from '../../../components/PostsList';
import { styles } from './profile-screen-styles';

const ProfileScreen = ({ route, navigation }) => {
  const { login, image, posts } = route.params;

  const [userLogin, setUserLogin] = useState(login);
  const [userImage, setUserImage] = useState(image);

  const addUserImage = async () => {
    const userAvatar = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!userAvatar.canceled) {
      setUserImage(userAvatar.assets[0].uri);
    }
  };

  const removeUserImage = () => {
    setUserImage(null);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/bg.jpg')}
        style={styles.imgBackground}
      />
      <View
        style={{
          ...styles.userInfoBox,
        }}
      >
        <View style={styles.usePhotoContainer}>
          {userImage ? (
            <Image source={{ uri: userImage }} style={styles.userPhoto} />
          ) : (
            <Image
              source={require('../../../assets/images/user_photo_default.jpg')}
              style={styles.userPhoto}
            />
          )}
          {userImage ? (
            <TouchableOpacity
              style={{
                ...styles.addUserPhotoBtn,
                borderColor: '#E8E8E8',
              }}
              activeOpacity={0.7}
              onPress={removeUserImage}
            >
              <Image
                source={require('../../../assets/images/removeUserPhoto.png')}
                style={styles.addUserPhotoBtnImg}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.addUserPhotoBtn}
              activeOpacity={0.7}
              onPress={addUserImage}
            >
              <Image
                source={require('../../../assets/images/addUserPhoto.png')}
                style={styles.addUserPhotoBtnImg}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.containerPosts}>
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
                      postId: item.id,
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
      </View>
    </View>
  );
};

export default ProfileScreen;
