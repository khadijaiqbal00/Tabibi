import {StyleSheet, Text, View} from 'react-native';
import React,{useLayoutEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePatient from '../Screens/Patient/HomePatient';
import ProfilePatient from '../Screens/Patient/ProfilePatient';
import DoctorSearch from '../Screens/Patient/DoctorSearch';
import Appointment2 from '../Screens/Patient/Appointment2';
import Appointment1 from '../Screens/Patient/Appointment1';
import DoctorDetails from '../Screens/Doctor/DoctorDetails';
import TextMessagePatient from '../Screens/Patient/TextMessagePatient';
import PatientAccSett from '../Screens/Patient/PatientAccSett';
const Stack = createNativeStackNavigator();
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

export default function HomeStackPatient({route,
  navigation}) {
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
        name="PatientAccSett"
        component={PatientAccSett}
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
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Appointment2"
        component={Appointment2}
        options={{
          headerShown: false,
          tabBarVisible: false, // Hide the bottom tab bar on this screen
        }}
      />
      <Stack.Screen
        name="Appointment1"
        component={Appointment1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TextMessagePatient"
        component={TextMessagePatient}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
