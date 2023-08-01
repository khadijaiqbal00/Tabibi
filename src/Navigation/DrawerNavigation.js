import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabNavigation from './TabNavigation';
import DrawerContents from '../Components/DrawerContents';
import Categories from '../Screens/Categories';
export default function DrawerNavigation() {
  return (
      <Drawer.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{
          drawerStyle: {
            width: 300,
          },
        }}
        drawerContent={props => <DrawerContents {...props} />}>
        <Drawer.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            title: 'Home',
            headerTintColor: 'red',
            headerShown: false,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="home"
                color={focused ? '#7cc' : "black"}
                size={25}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Categories',
            headerTintColor: 'red',
            headerShown: false,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="notes"
                color={focused ? '#7cc' : "black"}
                size={25}
              />
            ),
          }}
        />
      
      </Drawer.Navigator>
  );
}
