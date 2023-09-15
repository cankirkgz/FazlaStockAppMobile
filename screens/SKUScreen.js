import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/themes/colors'

export default function SKUScreen() {
  return (
    <View style={styles.container}>
      <Text>SKUScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})