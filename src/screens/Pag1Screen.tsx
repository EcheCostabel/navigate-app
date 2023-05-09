import React from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from '../theme/appTheme';

export interface Props extends NativeStackScreenProps<any, any> {

}

export const Pag1Screen = ( {navigation}: Props)  => {

  


  return (
    <View style={styles.globalMargin}>
        <Text>Pagina 1 Screen</Text>

        <Button 
          title='Ir pagina 2'
          onPress={() => navigation.navigate('Pag2Screen')}
/>
    </View>
  )
};
