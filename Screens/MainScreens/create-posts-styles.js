import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#fff",
  },

  cameraBox: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    marginHorizontal: 16,
    height: 240,
    borderRadius: 8,
  },

  takePhotoBtn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  toggleCameraBtn: {
    position: "absolute",
    top: 15,
    right: 20,
  },

  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderRadius: 8,
    width: "100%",
  },

  snapPhoto: {
    height: 240,
    borderRadius: 8,
    width: "100%",
  },

  uploadPhoto: {
    marginTop: 8,
  },

  uploadPhotoLink: {},

  uploadPhotoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 19,
    color: "#BDBDBD",
  },

  inputBox: {
    position: "relative",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    backgroundColor: "#ffffff",
  },

  formBox: {
    paddingHorizontal: 16,
  },

  input: {
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#fff",
    color: "#212121",
  },

  btn: {
    height: 51,
    marginTop: 32,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
