import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DrawerNavigation from './DrawerNavigation';
import TabNavigation from "./TabNavigation"
import DocLogin from '../Screens/DocLogin';
import DocSignUp from '../Screens/DocSignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import SplashScreen from '../Screens/SplashScreen';
import CreatePassword from '../Screens/CreatePassword';
import LoginSuccess from '../Screens/LoginSuccess';
const Stack = createNativeStackNavigator();

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        {showSplash ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          name="DocLogin"
          component={DocLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DocSignUp"
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
          name="LoginSuccess"
          component={LoginSuccess}
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
