import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';




export default function App() {
  return (
    <NavigationContainer>

      <StackNavigator />

    
    </NavigationContainer>
  );
}

