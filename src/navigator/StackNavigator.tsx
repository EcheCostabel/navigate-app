import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pag1Screen } from "../screens/Pag1Screen";
import { Pag2Screen } from "../screens/Pag2Screen";
import { Pag3Screen } from "../screens/Pag3Screen";


const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pag1Screen" component={Pag1Screen}/>
        <Stack.Screen name="Pag2Screen" component={Pag2Screen}/>
        <Stack.Screen name="Pag3Screen" component={Pag3Screen}/>
    </Stack.Navigator>
  )
}
