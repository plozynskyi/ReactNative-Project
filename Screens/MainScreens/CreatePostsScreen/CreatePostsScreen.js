import { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Keyboard,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './create-posts-styles';

const initialState = {
  img: '',
  title: '',
  location: '',
  locationProps: '',
  comments: [],
  likes: 0,
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  console.log(Platform.OS);

  Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardShown(false);
  });

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getPermission();
  }, []);

  useEffect(() => {
    (async () => {
      const locationProps = await Location.getCurrentPositionAsync();

      setState(prevState => ({
        ...prevState,
        locationProps: locationProps.coords,
      }));
    })();
  }, []);

  const onSubmit = () => {
    if (state.title === '' || state.location === '') {
      return Alert.alert('Please fill in all fields!');
    }
    const newPost = state;

    navigation.navigate('Posts', { newPost });
    setState(initialState);
  };

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    const { coords } = await Location.getCurrentPositionAsync();

    setState(prevState => ({
      ...prevState,
      img: uri,
      locationProps: coords,
    }));
  };

  function toggleCameraType() {
    setCameraType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const uploadPhotoFromGallery = async () => {
    let userImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 1,
    });

    if (!userImage.canceled) {
      setState(prevState => ({
        ...prevState,
        img: userImage.assets[0].uri,
      }));
    }
  };

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const clearAllFields = () => {
    setState(initialState);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.contentWrap}>
            <View>
              <View style={styles.cameraContainer}>
                <View style={styles.cameraWrap}>
                  {state.img && (
                    <View style={styles.photoWrap}>
                      <Image
                        source={{ uri: state.img }}
                        style={{ ...styles.snapPhoto, borderRadius: 8 }}
                      />
                    </View>
                  )}
                  <Camera
                    style={{ ...styles.cameraBox }}
                    type={cameraType}
                    ref={setCamera}
                  >
                    {!state.img && (
                      <TouchableOpacity
                        style={styles.takePhotoBtn}
                        activeOpacity={0.7}
                        onPress={takePhoto}
                      >
                        <FontAwesome name="camera" size={24} color="#ffffff" />
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      onPress={toggleCameraType}
                      style={styles.toggleCameraBtn}
                    >
                      <MaterialIcons
                        name="flip-camera-android"
                        size={24}
                        color="#ffffff"
                      />
                    </TouchableOpacity>
                  </Camera>
                </View>
              </View>
              {state.img && (
                <View style={styles.uploadPhoto}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                      setState(prevState => ({ ...prevState, img: null }))
                    }
                  >
                    <Text style={styles.uploadPhotoText}>Редагувати фото</Text>
                  </TouchableOpacity>
                </View>
              )}
              {!state.img && (
                <View style={styles.uploadPhoto}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={uploadPhotoFromGallery}
                  >
                    <Text style={styles.uploadPhotoText}>Загрузити фото</Text>
                  </TouchableOpacity>
                </View>
              )}

              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    marginTop: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: '#E8E8E8',
                  }}
                  value={state.title}
                  placeholder="Назва публікації"
                  placeholderTextColor={'#BDBDBD'}
                  onChange={({ nativeEvent: { text } }) =>
                    setState(prevState => ({ ...prevState, title: text }))
                  }
                />
                <View style={styles.inputWrap}>
                  <TextInput
                    style={{
                      ...styles.input,
                      marginTop: 16,
                      marginLeft: 28,
                    }}
                    value={state.location}
                    placeholderTextColor={'#BDBDBD'}
                    placeholder="Геолокація..."
                    onChange={({ nativeEvent: { text } }) =>
                      setState(prevState => ({
                        ...prevState,
                        location: text,
                      }))
                    }
                  />
                  <View
                    style={{
                      ...styles.locationPlaceholderWrap,
                      display: 'flex',
                    }}
                  >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    ...styles.submitBtn,
                    backgroundColor:
                      state.title.length === 0 ||
                      state.location.length === 0 ||
                      state.img == null
                        ? '#F6F6F6'
                        : '#FF6C00',
                  }}
                  onPress={onSubmit}
                >
                  <Text
                    style={{
                      ...styles.submitBtnText,
                      color:
                        state.title.length === 0 ||
                        state.location.length === 0 ||
                        state.img == null
                          ? '#BDBDBD'
                          : '#FFFFFF',
                    }}
                  >
                    Опублікувати
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.clearAllBtnWrapper}>
                <TouchableOpacity
                  style={styles.clearAllBtn}
                  onPress={clearAllFields}
                >
                  <AntDesign name="delete" size={20} color="#DADADA" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
