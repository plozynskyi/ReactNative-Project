import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const LogOutButton = ({ style, navigation }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.goBackBtn, ...style }}
      onPress={() => navigation.navigate('Login')}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackBtn: {
    marginRight: 16,
  },
});
