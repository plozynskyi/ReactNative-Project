import React from 'react';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import {
  Alert,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

const initialState = {
  image: null,
  login: 'Pasha-Test',
  email: 'pasha@gmail.com',
  password: '123456',
};

import { styles } from './auth-styles';

const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState({
    login: false,
    email: false,
    password: false,
  });

  console.log(Platform.OS);

  Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardShown(false);
  });

  const addUserImage = async () => {
    const userImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!userImage.canceled) {
      setState(prevState => {
        return {
          ...prevState,
          image: userImage.assets[0].uri,
        };
      });
    }
  };

  const removeUserImage = () => {
    setState(prevState => ({ ...prevState, image: null }));
  };

  const onSubmit = () => {
    if (state.login === '' || state.password === '' || state.email === '') {
      return Alert.alert('Please fill in all fields!');
    }

    keyboardHide();
    const { image, login, email } = state;
    navigation.navigate('Home', { image, login, email });
  };

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const inputOnFocus = value => {
    setIsInputFocus(prevState => ({ ...prevState, [value]: true }));
  };

  const inputOnBlur = value => {
    setIsInputFocus(prevState => ({ ...prevState, [value]: false }));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ScrollView>
          <ImageBackground
            source={require('../../assets/images/bg.jpg')}
            style={styles.imgBackground}
          >
            <TouchableWithoutFeedback onPress={keyboardHide}>
              <View
                style={{
                  ...styles.inputBox,
                  marginBottom: isKeyboardShown ? 115 : 0,
                  paddingBottom: 78,
                }}
              >
                <View style={styles.usePhotoContainer}>
                  {state.image ? (
                    <Image
                      source={{ uri: state.image }}
                      style={styles.userPhoto}
                    />
                  ) : (
                    <Image
                      source={require('../../assets/images/user_photo_default.jpg')}
                      style={styles.userPhoto}
                    />
                  )}
                  {state.image ? (
                    <TouchableOpacity
                      style={{
                        ...styles.addUserPhotoBtn,
                        borderColor: '#E8E8E8',
                      }}
                      activeOpacity={0.7}
                      onPress={removeUserImage}
                    >
                      <Image
                        source={require('../../assets/images/removeUserPhoto.png')}
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
                        source={require('../../assets/images/addUserPhoto.png')}
                        style={styles.addUserPhotoBtnImg}
                      />
                    </TouchableOpacity>
                  )}
                </View>

                <View
                  style={{ ...styles.formTitleBox, marginTop: 92, height: 36 }}
                >
                  <Text style={styles.formTitle}>Реєстрація</Text>
                </View>

                <SafeAreaView style={{ ...styles.form, paddingTop: 92 }}>
                  <KeyboardAvoidingView
                  // behavior={Platform.OS === "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      style={{
                        ...styles.input,
                        backgroundColor: isInputFocus.login
                          ? '#ffffff'
                          : '#F6F6F6',
                        borderColor: isInputFocus.login ? '#FF6C00' : '#E8E8E8',
                      }}
                      value={state.login}
                      placeholder="Логін"
                      onFocus={() => {
                        setIsKeyboardShown(true);
                        inputOnFocus('login');
                      }}
                      onBlur={() => {
                        inputOnBlur('login');
                      }}
                      onChange={({ nativeEvent: { text } }) =>
                        setState(prevState => ({ ...prevState, login: text }))
                      }
                    />

                    <TextInput
                      style={{
                        ...styles.input,
                        marginTop: 16,
                        backgroundColor: isInputFocus.email
                          ? '#ffffff'
                          : '#F6F6F6',
                        borderColor: isInputFocus.email ? '#FF6C00' : '#E8E8E8',
                      }}
                      value={state.email}
                      placeholder="Адреса електронної пошти"
                      placeholderTextColor={'#BDBDBD'}
                      onChange={({ nativeEvent: { text } }) =>
                        setState(prevState => ({ ...prevState, email: text }))
                      }
                      onFocus={() => {
                        setIsKeyboardShown(true);
                        inputOnFocus('email');
                      }}
                      onBlur={() => {
                        inputOnBlur('email');
                      }}
                    />

                    <View style={styles.passwordBtnBox}>
                      <TextInput
                        style={{
                          ...styles.input,
                          marginTop: 16,
                          paddingRight: 90,
                          backgroundColor: isInputFocus.password
                            ? '#ffffff'
                            : '#F6F6F6',
                          borderColor: isInputFocus.password
                            ? '#FF6C00'
                            : '#E8E8E8',
                        }}
                        placeholder={'Введіть пароль'}
                        placeholderTextColor={'#BDBDBD'}
                        secureTextEntry={isPasswordShown ? false : true}
                        value={state.password}
                        onChange={({ nativeEvent: { text } }) =>
                          setState(prevState => ({
                            ...prevState,
                            password: text,
                          }))
                        }
                        onFocus={() => {
                          setIsKeyboardShown(true);
                          inputOnFocus('password');
                        }}
                        onBlur={() => {
                          inputOnBlur('password');
                        }}
                      />

                      <TouchableOpacity
                        style={styles.showPasswordBtn}
                        onPress={() =>
                          setIsPasswordShown(prevState => !prevState)
                        }
                      >
                        <Text style={styles.showPasswordBtnText}>
                          {isPasswordShown ? 'Приховати' : 'Показати'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </KeyboardAvoidingView>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={onSubmit}
                  >
                    <Text style={styles.btnText}>Зареєструватися</Text>
                  </TouchableOpacity>
                </SafeAreaView>

                <View style={styles.questionSignIn}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate('Login');
                    }}
                  >
                    <Text style={styles.singInText}>
                      Вже маєте акаунт? Увійти
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ImageBackground>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RegistrationScreen;
