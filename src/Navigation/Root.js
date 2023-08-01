import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DrawerNavigation from './DrawerNavigation';
import TabNavigation from "./TabNavigation"
import DocLogin from '../Screens/DocLogin';
import DocSignUp from '../Screens/DocSignUp';
import ForgotPassword from '../Screens/ForgotPassword';

import CreatePassword from '../Screens/CreatePassword';
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Doclogin">
        <Stack.Screen
          name="Doclogin"
          component={DocLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Docsignup"
          component={DocSignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
