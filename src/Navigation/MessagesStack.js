import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Messages from '../Screens/Doctor/Messages';


const Stack = createNativeStackNavigator();

export default function MessagesStack() {
  return (
      <Stack.Navigator
        initialRouteName="Messages">
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
