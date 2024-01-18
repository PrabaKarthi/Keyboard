import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './Components/Keyboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Keyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
