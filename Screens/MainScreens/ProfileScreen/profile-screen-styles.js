import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  userInfoBox: {
    position: 'relative',
    width: '100%',
    paddingBottom: 65,
    top: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#ffffff',
  },

  usePhotoContainer: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  userPhoto: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 16,
  },

  addUserPhotoBtn: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addUserPhotoBtnImg: {
    width: 13,
    height: 13,
  },

  containerPosts: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
});
