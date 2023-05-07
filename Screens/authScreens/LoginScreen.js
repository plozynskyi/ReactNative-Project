import { useState } from 'react';

import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native';

import { styles } from './auth-styles';

const initialState = {
  image: null,
  login: 'Pasha-Test',
  email: 'pasha@gmail.com',
  password: '123456',
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState({
    email: false,
    password: false,
  });

  console.log(Platform.OS);

  Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardShown(false);
  });

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    if (state.password === '' || state.email === '') {
      return Alert.alert('Please fill in all fields!');
    }

    keyboardHide();
    setState(initialState);

    navigation.navigate('Home', state);
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
        <ImageBackground
          source={require('../../assets/images/bg.jpg')}
          style={styles.imgBackground}
        >
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <View
              style={{
                ...styles.inputBox,
                marginBottom: isKeyboardShown ? 50 : 0,
                paddingBottom: 144,
              }}
            >
              <View
                style={{ ...styles.formTitleBox, marginTop: 32, height: 36 }}
              >
                <Text style={styles.formTitle}>Увійти</Text>
              </View>

              <SafeAreaView style={styles.form}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                  <TextInput
                    style={{
                      ...styles.input,

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
                        paddingRight: 90,
                        marginTop: 16,
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
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
              </SafeAreaView>

              <View style={styles.questionSignIn}>
                <TouchableOpacity
                  style={styles.singInLink}
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate('Registration');
                  }}
                >
                  <Text style={styles.singInText}>
                    Ще не маєш акаунту? Зареєструйся
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;
