import React, { useEffect } from 'react'
import { Text, View } from 'react-native'


export const Tab2Screen = () => {

  useEffect(() => {
    console.log('Tab1Screem')
  }, [])

  return (
    <View>
        <Text>Tab2Screen</Text>
    </View>
  )
}
