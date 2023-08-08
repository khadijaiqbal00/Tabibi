import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Doctor/Home';
import DoctorProfile from '../Screens/Doctor/DoctorProfile';
import DocAccSetting from '../Screens/Doctor/DocAccSetting';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DocAccSetting"
          component={DocAccSetting}
          options={{
            headerShown: false,
          }}
        />
        
  
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
