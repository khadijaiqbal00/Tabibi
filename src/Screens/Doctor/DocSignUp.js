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
import {IconButton} from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../Global/globalstyles';

export default function DocSignUp({navigation}) {
  return (
    <View style={styles.Container}>
      <IconButton
        icon="chevron-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>Create a new account</Text>
      <Text style={styles.subText}>
        Please fill in the information below to create your new account.
      </Text>
      <Text style={styles.Label}>Name</Text>
      <View style={[styles.TextInput]}>
        <TextInput
          cursorColor={'rgba(26, 69, 99, 1)'}
          style={styles.text2}></TextInput>
      </View>
      <Text style={styles.Label}>E-mail</Text>
      <View style={[styles.TextInput, {marginTop: '2%'}]}>
        <TextInput
          cursorColor={'rgba(26, 69, 99, 1)'}
          style={styles.text2}></TextInput>
      </View>
      <Text style={styles.Label}>Phone</Text>
      <View style={[styles.TextInput, {marginTop: '2%'}]}>
        <TextInput
          cursorColor={'rgba(26, 69, 99, 1)'}
          style={styles.text2}></TextInput>
      </View>
      <Text style={styles.Label}>Password</Text>
      <View style={[styles.TextInput, {marginTop: '2%'}]}>
        <TextInput
          cursorColor={'rgba(26, 69, 99, 1)'}
          style={styles.text2}
          secureTextEntry={true}></TextInput>
        <Animatable.View animation={'fadeInDown'} duration={400}>
          <MaterialIcons
            name="visibility-off"
            style={{
              color: 'grey',
              alignSelf: 'flex-end',
              marginRight: '5%',
              marginTop: -33,
            }}
            size={20}
          />
        </Animatable.View>
      </View>
      <Text style={styles.Label}>Confirm Password</Text>

      <View style={[styles.TextInput, {marginTop: '2%'}]}>
        <TextInput
          cursorColor={'rgba(26, 69, 99, 1)'}
          style={styles.text2}
          secureTextEntry={true}></TextInput>
        <Animatable.View animation={'fadeInDown'} duration={400}>
          <MaterialIcons
            name="visibility-off"
            style={{
              color: 'grey',
              alignSelf: 'flex-end',
              marginRight: '5%',
              marginTop: -33,
            }}
            size={20}
          />
        </Animatable.View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 10,
          marginLeft: '10%',
        }}>
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontWeight: '900',
          }}>
          Accept terms and conditions
        </Text>
        <IconButton
          icon="chevron-left"
          size={30}
          color={'green'}
          style={{marginTop: -2}}
          onPress={() => navigation.goBack()}
        />
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
            navigation.navigate('DocLogin');
          }}>
          <Text style={styles.text5}>Login</Text>
        </TouchableOpacity>
      </View>
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
    width: '60%',
    color: colors.contentColor,
    fontWeight: '700',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  Label: {
    fontSize: 15,
    marginTop: 10,
    width: '80%',
    color: colors.contentColor,
    alignSelf: 'center',
    fontWeight: '900',
  },
  subText: {
    fontSize: 12,
    marginTop: 20,
    width: '70%',
    color: colors.contentColor,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
  },
  TextInput: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#F7F8F9',
    borderRadius: 4,
    marginTop: '1%',
    height: 46,
    paddingLeft: 20,
    paddingTop: 5,
    fontFamily: 'Urbanist',
    color: 'rgba(26, 69, 99, 1)',
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
    backgroundColor: 'rgba(26, 69, 99, 1)',
    height: 50,
    width: '80%',
    alignSelf: 'center',
    marginTop: '2%',
    borderRadius: 8,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 13,
    color: 'white',
    fontWeight: '400',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '10%',
  },
  text4: {
    fontWeight: '500',
    color: 'rgba(117, 127, 142, 1)',
    fontWeight: '900',
    fontFamily: 'Urbanist',
    fontSize: 13,
  },
  text5: {
    fontWeight: 'bold',
    color: 'rgba(0, 96, 247, 1)',
    marginLeft: 5,
    fontFamily: 'Urbanist',
    fontSize: 14,
  },
});
