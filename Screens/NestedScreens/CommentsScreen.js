import { StyleSheet, View, Image } from 'react-native';

export const CommentsScreen = ({ route }) => {
  const { img } = route.params;
  console.log(img);
  return (
    <View style={styles.postItemContainer}>
      <View style={styles.postItemImgContainer}>
        <Image source={{ uri: img }} style={styles.postItemImg} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postItemContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    paddingTop: 32,
  },

  postItemImgContainer: {
    width: '100%',
    height: 240,
  },

  postItemImg: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 16,
  },
});
