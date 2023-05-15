import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { AppRegistry, Platform } from "react-native";

import { SideBar2 } from './src/navigator/SideBar2';
import { AuthProvider } from './src/context/AuthContext';




export default function App() {

  // AppRegistry.registerComponent('App', () => App);
  return (

  
    <NavigationContainer>
      <AppState>
        <SideBar2 />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

