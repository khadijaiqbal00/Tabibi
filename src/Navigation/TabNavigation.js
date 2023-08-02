import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WishListStack from './WishlistStack';
import Categories from '../Screens/Doctor/Categories';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const [route, setRoute] = useState('home');
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
            width: '100%',
            height: '5%',
            marginBottom: 3,
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          listeners={{
            tabPress: e => {
              setRoute('Settings');
            },
          }}
          options={{
            tabBarLabel: 'Home',

            activeTintColor: "black",
            headerShown: true,

            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="home"
                color={focused ? '#7cc' : "black"}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="WishListStack"
          component={WishListStack}
          options={{
            title: 'Wishlist',
            activeTintColor: "black",
            headerShown: true,
            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="favorite"
                color={focused ? '#7cc' : "black"}
                size={25}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: 'Categories',
            activeTintColor: "black",
            headerShown: true,
            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="auto-awesome-motion"
                color={focused ? '#7cc' : "black"}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            activeTintColor: "black",
            headerShown: true,
            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="account-circle"
                color={focused ? '#7cc' : "black"}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
