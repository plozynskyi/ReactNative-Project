import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export const HeaderBackButton = ({ style }) => {
  return (
    <TouchableOpacity style={{ ...styles.goBackBtn, ...style }}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackBtn: {
    marginRight: 16,
  },
});
