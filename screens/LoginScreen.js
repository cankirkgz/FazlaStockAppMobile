import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import LoginComponent from '../components/LoginComponent';
import { colors } from '../assets/themes/colors';

export default function LoginScreen({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.centeredContent}>
        <LoginComponent navigation={navigation}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
  },
});
