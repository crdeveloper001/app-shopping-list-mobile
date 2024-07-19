import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginPage from './components/LoginPage/LoginPage';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <LoginPage />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
    backgroundColor: 'white',
   
  },
});
