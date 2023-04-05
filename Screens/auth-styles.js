import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  formTitleBox: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    marginHorizontal: 16,
  },

  usePhotoContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  userPhoto: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },

  addUserPhotoBtn: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },

  addUserPhotoBtnImg: {
    width: 13,
    height: 13,
  },

  form: {
    position: "relative",
  },

  formTitle: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    position: "relative",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    backgroundColor: "#ffffff",
  },

  input: {
    height: 50,
    marginHorizontal: 16,
    paddingLeft: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },

  passwordBtnBox: { position: "relative" },

  showPasswordBtn: {
    position: "absolute",
    justifyContent: "center",
    right: 32,
    top: "50%",
  },

  showPasswordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },

  btn: {
    height: 51,
    marginTop: 43,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  questionSignIn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },

  singInText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 19,
    color: "#1b4371",
  },
});
