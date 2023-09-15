import React, { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import CustomInput from './CustomInput';
import { colors } from '../assets/themes/colors';
import CustomButton from './CustomButton';
import ErrorCard from './ErrorCard';
import Errors from './Errors';

const currentEmail = "mcankirkgoz@gmail.com";
const currentPassword = "lalala12";

export default function LoginComponent({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/; 

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const validation = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword || !emailRegex.test(trimmedEmail)) {
      if (!trimmedEmail) {
        setEmailErrorMessage(<Errors errorKey={'onEmptyEmail'} />);
      } else {
        if (!emailRegex.test(trimmedEmail)) {
          setEmailErrorMessage(<Errors errorKey={'onInvalidEmail'} />);
        } else {
          setEmailErrorMessage('');
        }
      }
      if (!trimmedPassword) {
        setPasswordErrorMessage(<Errors errorKey={'onEmptyPassword'} />);
      } else {
        setPasswordErrorMessage('');
      }
      setError(''); // Hata mesajını temizle
    } else {
      setEmailErrorMessage('');
      setPasswordErrorMessage('');
      handleLogin(trimmedEmail, trimmedPassword);
    }
  };

  const handleLogin = (trimmedEmail, trimmedPassword) => {
    if (trimmedEmail !== currentEmail || trimmedPassword !== currentPassword) {
      setError(<Errors errorKey={'onEmailorPasswordErrorMessage'} />);
    } else {
      navigation.navigate('BottomTabs');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.deneme}>
        <Image
          source={require('../assets/fazlalogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.title, { fontFamily: 'Roboto-Medium' }]}>Giriş Yap</Text>
      <CustomInput
        name={'E-posta'}
        keyboardType={'email-address'}
        onChangeText={handleEmailChange}
        inputValue={email}
        error={emailErrorMessage == '' ? '' : emailErrorMessage}
      />
      <CustomInput
        name={'Parola'}
        onChangeText={handlePasswordChange}
        inputValue={password}
        error={passwordErrorMessage == '' ? '' : passwordErrorMessage}
      />
      {error}
      <CustomButton name={'Giriş Yap'} style={styles.button} onPress={validation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'left',
  },
  deneme: {
    alignItems: 'center'
  },
   logo: {
    width: '85%',
  },
  title: {
    fontSize: 28,
    letterSpacing: 0.17,
    color: colors.primary,
  },
  forgotPassword: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.17,
    color: colors.primary,
    textDecorationLine: 'underline', // Altı çizili
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
