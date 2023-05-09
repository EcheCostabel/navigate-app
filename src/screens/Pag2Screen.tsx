import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';




export const Pag2Screen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.globalMargin}>
        <Text>Pagina 2 Screen</Text>

        
        <Button
        title='Ir pagina 3'
        onPress={() => navigation.navigate('Pag3Screen')}
        />
    </View>
  )
};
