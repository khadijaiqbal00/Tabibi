import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Doctor/Home';
import DoctorProfile from '../Screens/Doctor/DoctorProfile';
import DocAccSetting from '../Screens/Doctor/DocAccSetting';
import DoctorDetails from '../Screens/Doctor/DoctorDetails';
import DoctorSearch from '../Screens/Patient/DoctorSearch';
import PatientDetails from '../Screens/Doctor/PatientDetails';
import PatientSearch from '../Screens/Doctor/PatientSearch';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
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
      <Stack.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PatientDetails"
        component={PatientDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorSearch"
        component={DoctorSearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PatientSearch"
        component={PatientSearch}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
