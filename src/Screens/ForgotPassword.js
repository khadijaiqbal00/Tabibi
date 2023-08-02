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
// import {colors} from '../global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function ForgotPassword({navigation}) {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.text}>Forgot Password?</Text>

        <Text
          style={[
            styles.text2,
            {alignSelf: 'center', width: '80%', marginTop: '3%'},
          ]}>
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
        <View style={[styles.TextInput]}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Enter your email"
            style={styles.text2}></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreatePassword');
          }}>
          <Text style={styles.text3}> Create new Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DocLogin');
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>Send Code</Text>
        </TouchableOpacity>

        <View style={styles.bottomLine}>
          <Text style={[styles.text4, {fontSize: 15}]}>Remember Password?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DocLogin');
            }}>
            <Text style={styles.text5}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 26,
    marginTop: '15%',
    marginLeft: '10%',
    width: '70%',

    color: "black",
    fontWeight: '700',
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
    marginTop: '25%',
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
