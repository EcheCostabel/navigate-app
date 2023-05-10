import React from 'react';
import {  DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image} from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideBar2 = (  ) => {

  const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator
      drawerContent={(props) => <InternMenu {...props} />}
      screenOptions={{
        drawerType: (width > 768) ? 'permanent' : 'front',
        
       
      }}
      
    >
      <Drawer.Screen name="StackNavigator"  component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const InternMenu = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
          }}
          style={ styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  )
}