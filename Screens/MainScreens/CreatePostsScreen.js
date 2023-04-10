import { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  TextInput,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./create-posts-styles";

const initialState = {
  img: null,
  title: "",
  location: "",
  locationProps: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [isInputFocus, setIsInputFocus] = useState({
    email: false,
    password: false,
  });

  console.log(Platform.OS);

  // useEffect(() => {
  //   const getPermission = async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   };
  //   getPermission();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const locationProps = await Location.getCurrentPositionAsync({});

  //     setState((prevState) => ({
  //       ...prevState,
  //       locationProps: locationProps.coords,
  //     }));
  //   })();
  // }, []);

  const onCameraReady = async () => {
    await setIsCameraReady(true);
  };

  const onSubmit = () => {
    if (
      state.title === "" ||
      state.location === "" ||
      state.location === null
    ) {
      return alert("Fill in all fields please!");
    }
    console.log(state);

    keyboardHide();
    setState(initialState);

    navigation.navigate("Posts", state);
  };

  const takePhoto = async () => {
    try {
      const photo = await camera.takePictureAsync();
      console.log(photo);
      setState((prevState) => ({
        ...prevState,
        img: photo.uri,
      }));
      console.log(state);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendPhoto = () => {};

  function toggleCameraType() {
    setCamera((current) =>
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
      setState((prevState) => ({
        ...prevState,
        img: userImage.assets[0].uri,
      }));
    }
  };

  Keyboard.addListener("keyboardDidHide", () => {
    setIsKeyboardShown(false);
  });

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const inputOnFocus = (value) => {
    setIsInputFocus((prevState) => ({ ...prevState, [value]: true }));
  };

  const inputOnBlur = (value) => {
    setIsInputFocus((prevState) => ({ ...prevState, [value]: false }));
  };

  const clearAllFields = () => {
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={{ borderRadius: 8 }}>
          <Camera
            style={styles.cameraBox}
            type={cameraType}
            ref={setCamera}
            onCameraReady={onCameraReady}
          >
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: state.img }}
                style={{ ...styles.snapPhoto, borderRadius: 8 }}
              />
            </View>
            <TouchableOpacity
              style={styles.takePhotoBtn}
              activeOpacity={0.7}
              onPress={takePhoto}
            >
              <FontAwesome name="camera" size={24} color="#ffffff" />
            </TouchableOpacity>
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
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.formBox}>
          {state.img && (
            <View style={styles.uploadPhoto}>
              <TouchableOpacity
                style={styles.uploadPhotoLink}
                activeOpacity={0.7}
                onPress={() =>
                  setState((prevState) => ({ ...prevState, img: null }))
                }
              >
                <Text style={styles.uploadPhotoText}>Редагувати фото</Text>
              </TouchableOpacity>
            </View>
          )}
          {!state.img && (
            <View style={styles.uploadPhoto}>
              <TouchableOpacity
                style={styles.uploadPhotoLink}
                activeOpacity={0.7}
                onPress={uploadPhotoFromGallery}
              >
                <Text style={styles.uploadPhotoText}>Загрузити фото</Text>
              </TouchableOpacity>
            </View>
          )}
          <TextInput
            style={{
              ...styles.input,
              marginTop: 16,
            }}
            value={state.title}
            placeholder="Назва публікації"
            placeholderTextColor={"#BDBDBD"}
            onChange={({ nativeEvent: { text } }) =>
              setState((prevState) => ({ ...prevState, title: text }))
            }
            onFocus={() => {
              setIsKeyboardShown(true);
              inputOnFocus("title");
            }}
            onBlur={() => {
              inputOnBlur("title");
            }}
          />
          <TextInput
            style={{
              ...styles.input,
              marginTop: 16,
            }}
            value={state.location}
            placeholder="Геолокація"
            placeholderTextColor={"#BDBDBD"}
            onChange={({ nativeEvent: { text } }) =>
              setState((prevState) => ({ ...prevState, location: text }))
            }
            onFocus={() => {
              setIsKeyboardShown(true);
              inputOnFocus("location");
            }}
            onBlur={() => {
              inputOnBlur("location");
            }}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.btn,
              backgroundColor:
                state.title.length === 0 ||
                state.location.length === 0 ||
                state.img == null
                  ? "#F6F6F6"
                  : "#FF6C00",
            }}
            onPress={onSubmit}
          >
            <Text
              style={{
                ...styles.btnText,
                color:
                  state.title.length === 0 ||
                  state.location.length === 0 ||
                  state.img == null
                    ? "#BDBDBD"
                    : "#FFFFFF",
              }}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              marginTop: 120,
            }}
          >
            <TouchableOpacity
              style={{ ...styles.clearAllBtn }}
              onPress={clearAllFields}
            >
              <AntDesign name="delete" size={24} color="#DADADA" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreatePostsScreen;
