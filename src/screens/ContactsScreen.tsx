import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {

  const { signIn, authState } = useContext(AuthContext);
  


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactScreen</Text>
        {
          !authState.isLoggedIn &&  //Si estoy loggeado hago desaparecer el boton de signIn
        <Button
        title='signIn'
        onPress={signIn}
        />
      }
      
    </View>
  )
}
