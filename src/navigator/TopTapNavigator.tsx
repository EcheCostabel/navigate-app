import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();


  return (
    <Tab.Navigator
    

        screenOptions={({route}) => ({
         
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colors.primary,
                
            },
            
            tabBarStyle: { 
                shadowColor: 'transparent',
                elevation: 0,
              },
              tabBarLabelStyle: {
                color: colors.primary, // Cambia el color del texto aquí
              },
            tabBarIcon: ({color,  focused}) => {
              let iconName: string = '';
              switch(route.name) {

                case 'Chat':
                  iconName = 'chatbox-ellipses-outline'
                  break;
    
                case 'Contacts':
                  iconName = 'people-outline'
                  break;
    
                case 'Albums':
                  iconName = 'albums-outline'
                  break;
              }
              return <Icon name={iconName} size={20} color={colors.primary} />

            }
          })}
        sceneContainerStyle={{
            backgroundColor: 'white',
            
        }}  
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};