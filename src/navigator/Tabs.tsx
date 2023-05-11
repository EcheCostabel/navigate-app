import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import {colors} from  '../theme/appTheme'
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = (  ) => {
  return (
    <Tab.Navigator 
      sceneContainerStyle={{
        backgroundColor: 'white' //este es el fondo de lo que esta en cada TabScreen
      }}
      // screenOptions={{  //esto es lo que esta en los botones de abajo
      //   tabBarActiveTintColor: colors.primary,
      //   tabBarStyle: { 
      //     borderTopColor: colors.primary, 
      //     borderTopWidth: 0,
      //     elevation: 0
      //   },
      //   tabBarLabelStyle: {
      //     fontSize: 15
      //   }
      // }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { 
          borderTopColor: colors.primary, 
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },

        tabBarIcon: ({color, size, focused}) => {
          let iconName: string = '';

          switch(route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;

            case 'Tab2Screen':
              iconName = 'T2'
              break;

            case 'StackNavigator':
              iconName = 'St'
              break;

              
          }
          
          return <Text style={{color: color}}>{iconName}</Text>
        }
        

      })}

      
      
    
    >
      
    
      <Tab.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}