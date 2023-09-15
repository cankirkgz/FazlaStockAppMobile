import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react'; // useEffect ve useState ekleyin
import BottomTabs from './navigation/BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); // Yazı tiplerinin yüklendiğini izleyen bir durum değişkeni

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      });
      setFontsLoaded(true); // Yazı tipleri başarıyla yüklendiğinde durum değişkenini true olarak ayarla
    }

    loadFonts();
  }, []); // Boş bağımlılık dizisi, yalnızca bir kez çağrılmasını sağlar

  if (!fontsLoaded) {
    // Yazı tipleri yüklenene kadar yükleme göstergesi veya başka bir yüklenme ekranı görüntülenebilir
    return (
      <View style={styles.container}>
        <Text>Yazı tipleri yükleniyor...</Text>
      </View>
    );
  }

  // Yazı tipleri yüklendikten sonra uygulamanın geri kalanını oluştur
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
