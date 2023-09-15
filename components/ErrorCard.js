import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../assets/themes/colors';

export default function ErrorCard({ errorName, errorMessage, backgroundColor, onClose }) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor || '#FF5733' }]}>
      <Text style={styles.errorName}>{errorName || 'Hata'}</Text>
      <Text style={styles.errorMessage}>{errorMessage || 'Bir hata oluştu.'}</Text>
      <TouchableOpacity style={styles.button} onPress={onClose}>
        <Text style={styles.buttonText}>Tamam</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  errorMessage: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
