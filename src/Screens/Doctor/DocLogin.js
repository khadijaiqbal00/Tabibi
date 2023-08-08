import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Chip, IconButton, TextInput} from 'react-native-paper';

import React, {useState} from 'react';
import {colors} from '../../Global/globalstyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {Google} from '../../Assets/icons';
import {Fb} from '../../Assets/icons';
import {Language} from '../../Assets/icons';
import {Apple} from '../../Assets/icons';
// import ErrorMessage from '../../Components/ErrorMessage';
import * as yup from 'yup';
import {Formik} from 'formik';
import ErrorMessage from '../../Components/ErrorMessage';
export default function LogIn({navigation}) {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(6).required('Password is required'),
  });
  const onSubmitValue = () => {};
  return (
    <Formik
    initialValues={{email: '', password: ''}}
    validateOnMount={true}
    onSubmit={onSubmitValue}
    validationSchema={validationSchema}>
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      errors,
      isValid,
    }) => (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../../Assets/Images/Background.png')}
        style={{
          height: '97%',
        }}>
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
                    theme={{
                      colors: {
                        text: 'rgba(28, 107, 164, 1)',
                        primary: 'rgba(28, 107, 164, 1)',
                      },
                    }}
                    underlineColor="transparent"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={styles.TextInput}></TextInput>
                       <ErrorMessage
                        error={errors['email']}
                        visible={touched['email']}
                      />
                </View>
                <View style={styles.box2}>
                  <Text style={styles.text6}>Password </Text>
                  <TextInput
                    theme={{
                      colors: {
                        text: 'rgba(28, 107, 164, 1)',
                        primary: 'rgba(28, 107, 164, 1)',
                      },
                    }}
                    underlineColor="transparent"
                    style={styles.TextInput}
                    
                  
                    secureTextEntry={!showPass}
                    right={
                      <TextInput.Icon
                        style={{marginTop: 10}}
                        icon={showPass ? 'eye-off-outline' : 'eye-outline'}
                        onPress={() => setShowPass(!showPass)}
                      />
                    }
                    value={pass}
                    onChangeText={setPass}
                  />
                   <ErrorMessage
                        error={errors['password']}
                        visible={touched['password']}
                      />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ForgotPassword');
                  }}>
                  <Text style={styles.text3}> Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleSubmit}
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
                <View>
                  <Text style={styles.text7}>Or Continue With</Text>
                </View>

                <View style={styles.container}>
                  <View style={styles.row}>
                    <View style={styles.box}>
                      <Google width={30} height={30} style={{marginTop: 15}} />
                    </View>
                    <View style={styles.box}>
                      <Fb width={34} height={34} style={{marginTop: 12}} />
                    </View>
                    <View style={styles.box}>
                      <Apple width={30} height={30} style={{marginTop: 12}} />
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Text style={styles.text9}>Select Language</Text>
                  <Language
                    width={30}
                    height={30}
                    style={{marginLeft: 12, marginBottom: 10}}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
    )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: colors.pageBackground,
  },
  text9: {
    fontSize: 15,
    color: '#757F8E',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'NunitoSans_7pt-Black',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  row: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: '30%',
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#B3BAC6',
  },
  container2: {
    borderWidth: 1,
    borderColor: colors.black1,
    marginHorizontal: '9%',
    marginVertical: '5%',
    borderRadius: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: '5%',
    color: colors.black,
    fontFamily: 'NunitoSans_7pt-Black',
  },
  line: {
    height: 1,
    width: '87%',
    alignSelf: 'center',
    backgroundColor: 'rgba(179, 186, 198, 1)',
  },
  line2: {
    height: 3,
    marginTop: -1,
    borderRadius: 10,
    width: '37%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 96, 247, 1)',
  },
  text1: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.black,
    marginHorizontal: '10%',
    marginTop: 10,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  text7: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.black,
    marginHorizontal: '10%',
    marginTop: 10,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  box1: {
    width: '100%',
    marginTop: '10%',
  },
  box2: {
    width: '100%',
    marginTop: '3%',
  },
  TextInput: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 47,
    paddingLeft: 5,
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
    alignSelf: 'flex-start',
    width: '87%',
    alignSelf: 'center',
    marginTop: '2%',
    color: colors.blue,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  btnShape: {
    backgroundColor: colors.black1,
    height: 47,
    width: '87%',
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 4,
    backgroundColor: colors.darkblue,
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
    marginTop: '3%',
    marginBottom: '10%',
  },
  text4: {
    fontWeight: '900',
    color: '#757F8E',
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    fontSize: 13,
  },
  text5: {
    fontWeight: '900',
    color: '#0060F7',
    marginLeft: 5,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    fontSize: 14,
  },
  text6: {
    fontSize: 14,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    color: colors.black,
    width: '87%',
    alignSelf: 'center',
    marginBottom: 5,
  },
});
