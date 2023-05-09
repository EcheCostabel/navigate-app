import { createStackNavigator } from "@react-navigation/stack";
import { Pag1Screen } from "../screens/Pag1Screen";
import { Pag2Screen } from "../screens/Pag2Screen";
import { Pag3Screen } from "../screens/Pag3Screen";
import { PersonScreen } from "../screens/PersonScreen";


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName=""
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
        <Stack.Screen name="Pag1Screen" options={{ title: 'Pagina 1'}} component={Pag1Screen}/>
        <Stack.Screen name="Pag2Screen" options={{ title: 'Pagina 2'}} component={Pag2Screen}/>
        <Stack.Screen name="Pag3Screen" options={{ title: 'Pagina 3'}} component={Pag3Screen}/>
        <Stack.Screen name="PersonScreen" options={{ title: 'Person'}} component={PersonScreen}/>
    </Stack.Navigator>
  )
}
