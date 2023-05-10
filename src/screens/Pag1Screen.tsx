import React from 'react';
import { Text, View, Button, } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props extends StackScreenProps<any, any> {

}

export const Pag1Screen = ( {navigation}: Props)  => {

  


  return (
    <View style={styles.globalMargin}>
        <Text style= {styles.title} >Pagina 1 Screen</Text>

        <Button 
          title='Ir pagina 2'
          onPress={() => navigation.navigate('Pag2Screen')}
        />

        <Text>Navegar con argumentos</Text>

        <View style={{flexDirection: 'row'}}>


            <TouchableOpacity 
                style={{
                  ...styles.bigButton,
                  backgroundColor: '#5856D6'
                }} 
                onPress={() => navigation.navigate('PersonScreen', { //Me voy a esta pagina y mando estos argumentos
                  id: 1, 
                  name: 'Pedro'
                  })}>

                  <Text style={styles.bigButtonColor}>Pedro</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                  style={{
                    ...styles.bigButton,
                    backgroundColor: '#FF9427'
                  }} 
                  onPress={() => navigation.navigate('PersonScreen', { //Me voy a esta pagina y mando estos argumentos
                    id: 2, 
                    name: 'Flor'
                    })}>

                    <Text style={styles.bigButtonColor}>Flor</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
};
