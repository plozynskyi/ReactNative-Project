import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  contentWrap: {
    justifyContent: 'space-between',
    flex: 1,
  },

  cameraContainer: {
    height: 240,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
  },

  cameraWrap: {
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },

  photoWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    width: '100%',
  },

  cameraBox: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    height: 240,
    borderRadius: 8,
  },

  takePhotoBtn: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  toggleCameraBtn: {
    position: 'absolute',
    top: 15,
    right: 20,
  },

  snapPhoto: {
    height: 240,
    borderRadius: 8,
  },

  uploadPhoto: {
    marginTop: 8,
  },

  uploadPhotoText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    height: 19,
    color: '#BDBDBD',
  },

  input: {
    height: 50,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },

  submitBtn: {
    height: 51,
    marginTop: 32,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },

  inputWrap: {
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },

  locationPlaceholderWrap: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -4 }],
    flexDirection: 'row',
    alignItems: 'center',
  },

  clearAllBtnWrapper: {
    alignItems: 'center',
  },

  clearAllBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 70,
    marginTop: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },

  scroll: {
    flexGrow: 1,
  },
});
