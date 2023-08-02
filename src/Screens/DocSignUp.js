import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { colors } from '../Global/globalstyles';

export default function DocSignUp({navigation}) {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.text}>Create a new account</Text>
        <Text style={styles.subText}>
          Please fill in the information below to create your new account.
        </Text>

        <View style={[styles.TextInput]}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Username"
            style={styles.text2}></TextInput>
        </View>
        <View style={[styles.TextInput, {marginTop: '5%'}]}>
          <TextInput
            placeholderTextColor="grey"
            style={styles.text2}
            placeholder="Email"></TextInput>
        </View>
        <View style={[styles.TextInput, {marginTop: '5%'}]}>
          <TextInput
            style={styles.text2}
            placeholderTextColor="grey"
            placeholder="Password"
            secureTextEntry={true}></TextInput>
          <Animatable.View animation={'fadeInDown'} duration={400}>
            <MaterialIcons
              name="visibility-off"
              style={{
                color: 'grey',
                alignSelf: 'flex-end',
                marginRight: '5%',
                marginTop: -37,
              }}
              size={20}
            />
          </Animatable.View>
        </View>
        <View style={[styles.TextInput, {marginTop: '5%'}]}>
          <TextInput
            style={styles.text2}
            placeholderTextColor="grey"
            placeholder="Confirm password"
            secureTextEntry={true}></TextInput>
          <Animatable.View animation={'fadeInDown'} duration={400}>
            <MaterialIcons
              name="visibility-off"
              style={{
                color: 'grey',
                alignSelf: 'flex-end',
                marginRight: '5%',
                marginTop: -37,
              }}
              size={20}
            />
          </Animatable.View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabNavigation');
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.bottomLine}>
          <Text style={styles.text4}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Doclogin');
            }}>
            <Text style={styles.text5}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  text: {
    fontSize: 20,
    marginTop: '15%',
    width: '80%',
    marginLeft :"20%",
    color: colors.contentColor,
    fontWeight: '700',
    alignSelf:"center",
    fontWeight:"bold",
  },
  subText: {
    fontSize: 12,
    marginTop:20,
    width: '70%',
    color: colors.contentColor,
    fontWeight: '700',
    alignSelf:"center",
    textAlign :"center",

  },
  TextInput: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    marginTop: '15%',
    height: 56,
    paddingLeft: 20,
    paddingTop: 5,

    fontFamily: 'Urbanist',
    color: '#8391A1',
    fontWeight: '100',
    fontSize: 15,
  },
  text2: {
    fontFamily: 'Urbanist',
    color: '#8391A1',
    fontWeight: '100',
    fontSize: 15,
  },
  text3: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '2%',
    color: '#6A707C',
    fontFamily: 'Urbanist',
    fontWeight: '600',
  },
  btnShape: {
    backgroundColor: "black",
    height: 50,
    width: '80%',
    alignSelf: 'center',
    marginTop: '15%',
    borderRadius: 8,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 13,
    color: "white",
    fontWeight: '400',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '40%',
  },
  text4: {
    fontWeight: '500',
    color: '#1E232C',
    fontFamily: 'Urbanist',
    fontSize: 13,
  },
  text5: {
    fontWeight: '700',
    color: "black",
    marginLeft: 5,
    fontFamily: 'Urbanist',
    fontSize: 14,
  },
});
