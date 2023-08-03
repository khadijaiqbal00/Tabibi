import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../Screens/Doctor/Categories';
const Stack = createNativeStackNavigator();

export default function CategoryStack() {
  return (
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
