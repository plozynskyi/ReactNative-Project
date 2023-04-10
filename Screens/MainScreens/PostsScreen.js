import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={(item) => (
          <View>
            <Image
              source={{ uri: item.img }}
              style={{
                marginHorizontal: 16,
                height: 200,
                width: 200,
              }}
            ></Image>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});

export default PostsScreen;
