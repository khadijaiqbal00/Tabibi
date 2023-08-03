import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wishlist from '../Screens/Doctor/WishList';


const Stack = createNativeStackNavigator();

export default function WishListStack() {
  return (
      <Stack.Navigator
        initialRouteName="Wishlist">
        <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
