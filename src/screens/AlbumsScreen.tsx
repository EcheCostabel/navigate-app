import React, { useContext, useReducer } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'


export const AlbumsScreen = () => {

  const { authState, logout } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>AlbumScreen</Text>


      {
        authState.isLoggedIn &&
        <Button
        title='logout'
        onPress={logout}
        />
      }

    </View>
  )
}
