import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const HeaderBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.goBackBtn }}
      onPress={() => navigation.navigate('Posts')}
    >
      <Feather name="arrow-left" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackBtn: {
    marginLeft: 16,
  },
});
