import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { AppRegistry, Platform } from "react-native";

import { SideBar2 } from './src/navigator/SideBar2';




export default function App() {

  AppRegistry.registerComponent('App', () => App);
  return (

  
    <NavigationContainer>
      <SideBar2 />
    </NavigationContainer>
  );
}

