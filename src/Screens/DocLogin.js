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
import {colors} from '../Global/globalstyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {IconButton} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import {red100} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
export default function LogIn({navigation}) {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={{flex: 1}}>
          <IconButton
            icon="chevron-left"
            size={30}
            onPress={() => navigation.goBack()}
          />

          <Text style={styles.text}>Log in as a Doctor </Text>
          <Text style={styles.text1}>
            Please fill in the information below to login to your account.
          </Text>
        </View>

        <View style={styles.container2}>
          <View style={styles.inside}>
            <View style={styles.box1}>
              <Text style={styles.text6}>E-mail </Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.TextInput}></TextInput>
            </View>
            <View style={styles.box2}>
              <Text style={styles.text6}>Password </Text>
              <View style={[styles.TextInput]}>
                <TextInput
                  style={styles.text2}
                  placeholder="Enter your password"
                  secureTextEntry={true}></TextInput>
                <Animatable.View animation={'fadeInDown'} duration={400}>
                  <MaterialIcons
                    name="visibility-off"
                    style={{
                      color: 'grey',
                      alignSelf: 'flex-end',
                      marginRight: '5%',
                      marginTop: -30,
                    }}
                    size={20}
                  />
                </Animatable.View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Text style={styles.text3}> Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('DrawerNavigation');
              }}
              style={styles.btnShape}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.bottomLine}>
              <Text style={styles.text4}>Don’t have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DocSignUp');
                }}>
                <Text style={styles.text5}>Register Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line}>
              <View style={styles.line2}></View>
            </View>

            <View style={{marginBottom: '20%'}}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  container2: {
    borderWidth: 1,
    borderColor: colors.black1,
    marginHorizontal: '9%',
    marginVertical: '10%',
    borderRadius: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: '20%',
    color: colors.black,
    fontWeight: '900',
  },
  line: {
    height: 1,
    width: '87%',
    alignSelf: 'center',
    backgroundColor: 'rgba(179, 186, 198, 1)',
  },
  line2: {
    height: 3,
    marginTop:-1,
    borderRadius:10,
    width: '37%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 96, 247, 1)',
  },
  text1: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.black,
    fontWeight: '900',
    marginHorizontal: '10%',
    marginTop: 10,
  },
  box1: {
    width: '100%',
    marginTop: '15%',
  },
  box2: {
    width: '100%',
    marginTop: '3%',
  },
  TextInput: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: colors.white,
    borderRadius: 8,
    height: 47,
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
    alignSelf: 'flex-start',
    width: '87%',
    alignSelf: 'center',
    marginTop: '2%',
    color: colors.blue,
    fontFamily: 'Urbanist',
    fontWeight: '900',
  },
  btnShape: {
    backgroundColor: colors.black1,
    height: 47,
    width: '87%',
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 8,
    backgroundColor: colors.darkblue,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 17,
    marginTop: 10,
    color: colors.white,
    fontWeight: '900',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
   marginTop:'3%',
   marginBottom:'10%'
  },
  text4: {
    fontWeight: '900',
    color: '#757F8E',
    fontFamily: 'Urbanist',
    fontSize: 13,
  },
  text5: {
    fontWeight: '900',
    color: '#0060F7',
    marginLeft: 5,
    fontFamily: 'Urbanist',
    fontSize: 14,
  },
  text6: {
    fontSize: 14,
    fontWeight: '900',
    color: colors.black,
    width: '87%',
    alignSelf: 'center',
    marginBottom: 5,
  },
});
