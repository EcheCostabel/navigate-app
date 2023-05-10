import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteStackParams } from '../navigator/StackNavigator';


// interface RouteParams {
//   id: number;
//   name: string
// }

interface Props extends StackScreenProps<RouteStackParams, 'PersonScreen'> {} 

export const PersonScreen = ({route, navigation}: Props) => {

  // const params = route.params as RouteParams; //Con esto le digo que me trate a mis params como RouteParams
  const params = route.params;
  

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])
  

  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
          {
            JSON.stringify(params, null, 3)
          }
        </Text>
    </View>
  )
}
