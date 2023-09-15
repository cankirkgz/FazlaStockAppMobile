import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SKUScreen from '../screens/SKUScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { View, Text, StyleSheet } from 'react-native'; // Gerekli bileşenleri içe aktarın
import { colors } from '../assets/themes/colors';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false, // Sekme başlıklarını gizler
      }}
    >
      <Tab.Screen
        name="SKU"
        component={SKUScreen}
        options={{
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <View>
                <Text style={{color: 'black'}}>
                    Selam
                </Text>
            </View>
          ),
          headerTitle: '',
          tabBarIcon: ({ focused, color, size }) => null, // Tab bar ikonunu kaldırır
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <View>
                <Text style={{color: 'black'}}>
                    Selam
                </Text>
            </View>
          ),
          tabBarIcon: ({ focused, color, size }) => null, // Tab bar ikonunu kaldırır
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18
    }
});

export default BottomTabs;
