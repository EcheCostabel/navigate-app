import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import {colors} from  '../theme/appTheme'
import { Platform, Text } from 'react-native';


export const Tabs = () => {

  return Platform.OS === 'ios'
      ? <TabsIos />
      : <TabsAndroid />
}




const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
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

        tabBarIcon: ({color,  focused}) => {
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
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={Tab2Screen} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}






const BottomTabIos = createBottomTabNavigator();

export const TabsIos = (  ) => {
  return (
    <BottomTabIos.Navigator 
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
      
    
      <BottomTabIos.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={Tab2Screen} />
      <BottomTabIos.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIos.Navigator>
  );
}