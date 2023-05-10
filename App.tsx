import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AppRegistry, Platform } from "react-native";
import { SideBar } from './src/navigator/SideBar';




export default function App() {

  AppRegistry.registerComponent('App', () => App);
  return (
    <NavigationContainer>

      {/* <StackNavigator /> */}
      <SideBar />

    
    </NavigationContainer>
  );
}

