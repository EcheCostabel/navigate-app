import React from 'react';
import {  DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image, TouchableOpacity} from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const InternMenu = ({navigation}: DrawerContentComponentProps) => {
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

      {/* Opciones del menu */}

      <View style={styles.menuContainer}>

          <TouchableOpacity 
              style={{
                ...styles.menuBottom,
                flexDirection: 'row'

              }} 
              onPress={() => navigation.navigate('Tabs')}
            >
            <Icon name='compass-outline' size={30} color='black' />
            <Text style={styles.menuText}>Navegacion Stack</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={{
                ...styles.menuBottom,
                flexDirection: 'row'
              }}
              onPress={() => navigation.navigate('SettingsScreen')}
              >
            <Icon name='cog-outline' size={30} color='black' />
            <Text style={styles.menuText}>Ajustes</Text>
          </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  )
}