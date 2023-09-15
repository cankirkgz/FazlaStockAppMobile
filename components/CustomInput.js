import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../assets/themes/colors';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function CustomInput({ name, keyboardType, onChangeText, inputValue, error,autoCapitalize = 'none' }) {
  const inputKeyboardType = keyboardType ? keyboardType : 'default';
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onFocus = () => {}

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontFamily: 'Roboto-Regular' }]}>{name}</Text>
      <View style={[styles.inputContainer, 
      {borderWidth: error?1:0, 
        borderColor: error ? colors.error:!isFocused ?? colors.warning}]}>
        <TextInput
          style={[styles.input, { width: screenWidth - 80, fontFamily: 'Roboto-Regular' }]}
          keyboardType={inputKeyboardType}
          secureTextEntry={!showPassword && name === 'Parola'}
          onChangeText={onChangeText}
          value={inputValue}
          onFocus={()=>{
            onFocus();
            setIsFocused(true);
          }}
          onBlur={()=>{
            setIsFocused(false);
          }}
          autoCapitalize={autoCapitalize}
        />
        {name === 'Parola' && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text>
          {error == '' ? '' : error}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.primary,
    letterSpacing: 0.17,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 5, // For Android
    borderRadius: 5,
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 0 }, // For iOS
    shadowOpacity: 0.3, // For iOS
    shadowRadius: 3, // For iOS
    backgroundColor: colors.white, // Arkaplan rengini ayarlayın
  },
  
  input: {
    // flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 15,
  },
});
