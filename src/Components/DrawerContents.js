import {
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Alert,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon, Image} from '@rneui/base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerContents = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <Image
            source={{
              uri: 'https://images.hdqwalls.com/wallpapers/captain-america-dark-4k-fl.jpg',
            }}
            style={{height: 50, width: 210, marginTop: 20, marginLeft: 20}}
          />
        </View>
        <View style={{marginTop: 30}}>
          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              source={{
                uri: 'https://images.hdqwalls.com/wallpapers/captain-america-dark-4k-fl.jpg',
              }}
              size={75}
            />

            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                }}>
                Random
              </Text>
              <Text style={{color: '#535763', fontSize: 14}}>
                Random@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 5,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'grey',
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: 'grey', fontSize: 14}}>My Favourites</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'grey',
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: 'grey', fontSize: 14}}>My Cart</Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <View style={{borderTopWidth: 1, borderTopColor: 'white'}}>
          <Text style={styles.preferences}>Prefrences</Text>
        </View>
        <View
          style={{
            backgroundColor: 'black',
            height: 40,
            width: 215,
            borderRadius: 25,
            marginTop: '40%',
            marginLeft: 40,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 30,
              marginTop: 5,
              marginLeft: 5,
              width: 110,
              borderRadius: 25,
              flexDirection: 'row',
            }}>
            <MaterialIcons
              name="filter-vintage"
              style={{color: 'grey', marginLeft: 10, marginTop: 4}}
              size={25}
            />
            <Text style={{color: '#535763', marginLeft: 10, marginTop: 5}}>
              Light
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  height: 110,
                  width: 80,
                  marginLeft: 40,
                }}>
                <MaterialIcons
                  name="nights-stay"
                  style={{
                    color: 'white',
                    marginLeft: 5,
                    marginTop: 3,
                  }}
                  size={20}
                />
                <Text
                  style={{
                    color: 'white',
                    marginLeft: 10,
                    marginTop: 3,
                  }}>
                  Dark
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  avatar: {
    borderWidth: 3,

    borderColor: "white",
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  preferences: {
    fontSize: 16,
    color: "white",
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    color: "white",
    paddingTop: 10,
    paddingLeft: 0,
    marginTop: 290,
    fontWeight: 'bold',
  },
});
