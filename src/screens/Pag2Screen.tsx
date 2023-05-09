import React, {useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';




export const Pag2Screen = () => {

  const navigator: any = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo', 
     
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style= {styles.title}>Pagina 2 Screen</Text>

        
        <Button
        title='Ir pagina 3'
        onPress={() => navigator.navigate('Pag3Screen')}
        />
    </View>
  )
};
