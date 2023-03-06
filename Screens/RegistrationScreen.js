import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState();
  const [mail, onChangeMail] = useState();
  const [password, onChangePassword] = useState();
  console.log(Platform.OS);

  return (
    <View style={styles.inputBox}>
      <View style={styles.addPhotoBox}></View>
      <View style={styles.formTitleBox}>
        <Text style={styles.formTitle}>Реєстрація</Text>
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          //   onChangeLogin={onChangeLogin}
          value={login}
          placeholder="Логін"
        />
        <TextInput
          style={styles.input}
          //   onChangeMail={onChangeMail}
          value={mail}
          placeholder="Адреса електронної пошти"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          //   onChangePassword={onChangePassword}
          value={password}
          placeholder="Пароль"
        />
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text style={styles.btnText}>Зареєструватися</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.questionSignIn}>
        <Text style={styles.questionSignInText}>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formTitleBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 92,
    marginBottom: 32,
  },
  addPhotoBox: {
    height: 120,
    width: 120,
    backgroundColor: "#000",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  formTitle: {
    fontSize: 30,
    // fontFamily: "Roboto",
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },

  input: {
    height: 50,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  btn: {
    backgroundColor: Platform.OS === "ios" ? "#FF6C00" : "#FF6C00",
    height: 51,
    marginTop: 43,
    borderRadius: 100,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
    // fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
  },
  questionSignIn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 78,
  },
  questionSignInText: {
    color: "#1B4371",
    // fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
  },
});

export default RegistrationScreen;
