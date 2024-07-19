import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TabNavigation from './components/TabNavigation/TabNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <View style={styles.container}>
            <StatusBar style="dark" />
            <TabNavigation />
          </View>
        </SafeAreaProvider>

      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: 'white',

  },
});
