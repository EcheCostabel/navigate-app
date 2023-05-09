import React from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any>{

}

export const Pag3Screen = ({ navigation } :Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text>Pagina 3 Screen</Text>

        <Button 
          title='Regresar'
          onPress={() => navigation.pop()}
         />
        <Button 
          title='Ir al 1'
          onPress={() => navigation.popToTop()}
         />
    </View>
  )
};
