import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../assets/themes/colors';


export default function CustomButton({ name, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonText, {fontFamily: 'Roboto-Medium'}]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // İçeriği yatayda ortala
    marginVertical: 10
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center', // İçeriği dikeyde ortala
    alignItems: 'center', // İçeriği yatayda ortala
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 1, // Android için gölge efekti
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 0.17,
    lineHeight: 24
  },
});
