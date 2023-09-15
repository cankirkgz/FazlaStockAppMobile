import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../assets/themes/colors';

const errors = {
    onErrorMessage: {
      errorName: 'Hata',
      errorMessage: 'Bir hata oluştu.',
      color: colors.error,
    },
    onSuccessMessage: {
      errorName: 'Başarılı',
      errorMessage: 'İşlem başarıyla tamamlandı.',
      color: colors.success,
    },
    onEmailorPasswordErrorMessage: {
      errorName: 'E-posta veya Parola Hatası',
      errorMessage: 'E-posta adresiniz veya şifreniz hatalı. Tekrar deneyebilir veya yöneticinize danışabilirsiniz*',
      color: colors.error,
    },
    onUserCouldntFindMessage: {
      errorName: 'Kullanıcı Bulunamadı',
      errorMessage: 'Kullanıcı bulunamadı.',
      color: colors.error,
    },
    onEmptyEmail: {
      errorName: 'Boş Email Alanı',
      errorMessage: 'Lütfen bir email adresi girin.',
      color: colors.error,
    },
    onEmptyPassword: {
      errorName: 'Boş Parola Alanı',
      errorMessage: 'Lütfen bir parola girin.',
      color: colors.error,
    },
    onInvalidEmail: {
      errorName: 'Geçersiz Email',
      errorMessage: 'Geçerli bir email adresi girin.',
      color: colors.error,
    },
  };
export default function Errors({errorKey, onClose}) {
    const error = errors[errorKey];
    if (error) {
      return (
        <View>
          <Text style={{color: error.color, fontSize: 14, fontFamily: 'Roboto-Regular', lineHeight: 21, textAlign: 'left'}}>{error.errorMessage}</Text>
        </View>
      );
    }
    return null;
}

const styles = StyleSheet.create({})