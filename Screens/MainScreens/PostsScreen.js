import { StyleSheet, View, Text, Platform } from "react-native";

const PostsScreen = () => {
  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsScreen;
