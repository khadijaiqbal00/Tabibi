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
      Veuillez remplir les informations ci-dessous pour créer votre nouveau compte.
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
          marginTop: 16,
          marginLeft: '10%',
        }}>
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            fontSize:14,
            fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
            
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
        <Text style={styles.btnText}>Signup</Text>
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
    marginTop: '5%',
    fontSize: 20,
    width: '60%',
    color: colors.contentColor,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    alignSelf: 'center',
  },
  Label: {
    fontSize: 15,
    marginTop: 10,
    width: '80%',
    color: colors.contentColor,
    fontWeight: '900',
    marginLeft:"7%",
  },
  subText: {
    fontSize: 12,
    marginTop: 7,
    marginBottom: 5,
    width: '70%',
    color: colors.contentColor,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    alignSelf: 'center',
    textAlign: 'center',
  },
  TextInput: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderRadius: 4,
    elevation: 1,
    height: 47,
    paddingLeft: 20,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  text2: {
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    color: 'rgba(26, 69, 99, 1)',
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
    height: 47,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: colors.btnclr,
    marginTop: -10,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 13,
    color: colors.white,
    fontWeight: '900',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '10%',
  },
  text4: {
    fontWeight: '500',
    color: 'rgba(117, 127, 142, 1)',
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',

    fontSize: 13,
  },
  text5: {
    color: 'rgba(0, 96, 247, 1)',
    marginLeft: 5,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',

    fontSize: 14,
  },
});
