import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePatient from '../Screens/Patient/HomePatient';
import ProfilePatient from '../Screens/Patient/ProfilePatient';
import DoctorSearch from '../Screens/Patient/DoctorSearch';
import Appointment2 from '../Screens/Patient/Appointment2';
import Appointment1 from '../Screens/Patient/Appointment1';
const Stack = createNativeStackNavigator();

export default function HomeStackPatient() {
  return (
    <Stack.Navigator initialRouteName="HomePatient">
      <Stack.Screen
        name="HomePatient"
        component={HomePatient}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfilePatient"
        component={ProfilePatient}
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
        name="Appointment2"
        component={Appointment2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Appointment1"
        component={Appointment1}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
