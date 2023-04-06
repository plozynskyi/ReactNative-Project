import { StyleSheet, View, Text, Platform } from "react-native";

const CreatePostsScreen = () => {
  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
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

export default CreatePostsScreen;
