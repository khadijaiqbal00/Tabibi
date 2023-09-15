import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Chip, IconButton, TextInput} from 'react-native-paper';
import * as yup from 'yup';
import {Formik} from 'formik';
import {colors} from '../../Global/globalstyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ErrorMessage from '../../Components/ErrorMessage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function DocSignUp({navigation}) {
  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  const [showPass, setShowPass] = useState(false);
  const [showcPass, setShowcPass] = useState(false);
  
  const [pass, setPass] = useState('');
  const [passC, setPassC] = useState('');

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    email: yup.string().email().required('Email is required'),
    PhoneNumber: yup.string().required().min(11),
    Password: yup.string().min(6).required(),
    cpassword: yup
      .string()
      .min(6)
      .required('Confirm password field is required')
      .oneOf([yup.ref('Password'), null], 'Passwords must match'),
  });


  const addData = values => {
    delete values.Password;
    delete values.cpassword;
    console.log(values);
    let promise = new Promise((resolve, reject) => {
      firestore()
        .collection('DocUsers')
        .add(values)
        .then(() => {
          
          resolve(true);
        })
        .catch(error => {
          console.log(error);
          
        });
    });

    return promise;
  };


  const onSubmitValue = async (values, {resetForm}) => {
   
    
    if (!checked) {
      setLoader(false);
      Alert.alert('Please accept the terms and conditions.');
      return;
    }
    resetForm();
    setLoader(true);
    try {
      const user = await auth().createUserWithEmailAndPassword(
        values.email,
        values.Password,
      );
    
      Alert.alert('Signup Successful');
      
      if (user) {
        addData(values)
          .then(bool => {
            auth()
              .currentUser.sendEmailVerification()
              .then(async () => {
                setLoader(false);
                Alert.alert(
                  'Please verify your email address. An email has been sent to your email address',
                );
                await auth().signOut();
                navigation.navigate("TabNavigation")
              })
              .catch(error => Alert.alert('Error: ', error));
          })
          .catch(error => Alert.alert('Signup failed'));

      } else Alert.alert("Signup failed")


    } catch (error) {
      setLoader(false)
      console.log("Error", error.message)
      Alert.alert(error.message);
    }
  };
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDob(currentDate.toISOString().split('T')[0]);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Formik
    initialValues={{ email: '', Password: '', name: '',  PhoneNumber: '', cpassword: '',  }}
    validateOnMount={true}
    onSubmit={onSubmitValue}
    validationSchema={validationSchema}
  >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      errors,
      isValid,
    }) => (
        <View style={styles.Container}>
          <IconButton
            icon="chevron-left"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Create a new account</Text>
          <Text style={styles.subText}>
            Veuillez remplir les informations ci-dessous pour créer votre
            nouveau compte.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              marginHorizontal: 10,
            }}>
            <View style={{width: '47%'}}>
              <Text style={styles.Label}>First Name</Text>
              <TextInput
                textColor="rgba(26, 69, 99, 1)"
                theme={{
                  colors: {
                    text: 'rgba(28, 107, 164, 1)',
                    primary: 'rgba(28, 107, 164, 1)',
                  },
                }}
                underlineColor="transparent"
                style={styles.TextInput}
                outlineStyle={styles.border}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <ErrorMessage error={errors['name']} visible={touched['name']} />
            </View>

            <View style={{width: '47%'}}>
              <Text style={styles.Label}>Last Name</Text>
              <TextInput
                textColor="rgba(26, 69, 99, 1)"
                theme={{
                  colors: {
                    text: 'rgba(28, 107, 164, 1)',
                    primary: 'rgba(28, 107, 164, 1)',
                  },
                }}
                underlineColor="transparent"
                style={styles.TextInput}
                outlineStyle={styles.border}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <ErrorMessage error={errors['name']} visible={touched['name']} />
            </View>
          </View>

          <Text style={styles.Label}>Date of birth</Text>
          <View style={styles.formContainer}>
            <TextInput
              textColor="rgba(26, 69, 99, 1)"
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              value={dob}
              onFocus={showDatepicker}
              onBlur={() => setShow(false)}
              underlineColor="transparent"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                display="default"
                onChange={onChange}
              />
            )}
          </View>


          <Text style={styles.Label}>E-mail</Text>
          <TextInput
            textColor="rgba(26, 69, 99, 1)"
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            underlineColor="transparent"
            style={styles.TextInput}
            underlineColorAndroid="transparent"
          />
           <ErrorMessage error={errors['email']} visible={touched['email']} />
          <Text style={styles.Label}>Phone</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '87%',
              alignSelf: 'center',
              backgroundColor: 'white',
              backgroundColor: colors.white,
              borderRadius: 4,
              height: 50,
              paddingLeft: 5,
              marginTop: 5,
            }}>
            <View style={styles.prefixBox}>
              <Text style={styles.prefixText}>+213</Text>
            </View>
            <TextInput
              textColor="rgba(26, 69, 99, 1)"
              keyboardType="numeric"
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              onChangeText={handleChange('PhoneNumber')}
              onBlur={handleBlur('PhoneNumber')}
              value={values.PhoneNumber}
              underlineColor="transparent"
              style={styles.TextInput1}
            />
          </View>
          <ErrorMessage error={errors['PhoneNumber']} visible={touched['PhoneNumber']} />
        
          <Text style={styles.Label}>Password</Text>
          <TextInput
            textColor="rgba(26, 69, 99, 1)"
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            style={styles.TextInput}
            secureTextEntry={!showPass}
            underlineColor="transparent"
            
            right={
              <TextInput.Icon
                style={{marginTop: 10}}
                icon={showPass ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setShowPass(!showPass)}
              />
            }
            onChangeText={handleChange('Password')}
              onBlur={handleBlur('Password')}
              value={values.Password}
            // value={pass}
            // onChangeText={setPass}
            
          />
            <ErrorMessage error={errors['Password']} visible={touched['Password']} />
          <Text style={styles.Label}>Confirm Password</Text>
          <TextInput
            textColor="rgba(26, 69, 99, 1)"
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            underlineColor="transparent"
            style={styles.TextInput}
            secureTextEntry={!showcPass}
            right={
              <TextInput.Icon
                style={{marginTop: 10}}
                icon={showcPass ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setShowcPass(!showcPass)}
              />
            }
            onChangeText={handleChange('cpassword')}
            onBlur={handleBlur('cpassword')}
            value={values.cpassword}
            // value={passC}
            // onChangeText={setPassC}
          />
          <ErrorMessage error={errors['cpassword']} visible={touched['cpassword']} />
      
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DoctorForm2');
            }}
            style={styles.btnShape}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>

          <View style={styles.bottomLine}>
            <Text style={styles.text4}>Already have an account!</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('DocLogin')}>
              <Text style={styles.text5}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    width: '105%',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderRadius: 4,
    height: 47,
    paddingLeft: 5,
    paddingTop: 5,
    marginTop: 5,
    // color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    borderBlockColor: 'white',
  },

  formContainer: {
    paddingHorizontal: 30,
  },
  prefixBox: {
    backgroundColor: '#0060F7',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 7,
  },
  prefixText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },

  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  text: {
    marginTop: '1%',
    fontSize: 20,
    width: '60%',
    color: colors.contentColor,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    alignSelf: 'center',
  },
  Label: {
    fontSize: 15,
    marginTop: 4,
    width: '80%',
    color: colors.contentColor,
    fontWeight: '900',
    marginLeft: '7%',
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
    height: 47,
    paddingLeft: 5,
    paddingTop: 5,
    marginTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  TextInput1: {
    alignSelf: 'center',
    // width: '87%',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderRadius: 4,
    height: 47,
    paddingLeft: 5,
    // paddingTop: 5,
    // marginTop: 5,
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
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    fontWeight: '600',
  },
  btnShape: {
    height: 47,
    width: '87%',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: colors.btnclr,
    marginTop: 10,
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
    marginTop: '5%',
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
  border: {
    borderBottomColor: 'white',
  },
});
