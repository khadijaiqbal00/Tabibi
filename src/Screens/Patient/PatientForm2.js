import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Chip, IconButton, TextInput} from 'react-native-paper';
import * as yup from 'yup';
import {Formik} from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../Global/globalstyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ErrorMessage from '../../Components/ErrorMessage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../Components/Loader';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PatientForm2({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [textInputValue, setTextInputValue] = useState('Male');

  const openModal = () => {
    setIsModalVisible(true);
  };
  const RadioButton = ({selected, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.radioButton, selected && styles.radioButtonSelected]}>
          {selected && <View style={styles.radioButtonInner} />}
        </View>
      </TouchableOpacity>
    );
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleOptionSelect = option => {
    setSelectedOption(option);
    setTextInputValue(option);
    closeModal();
  };

  const [isBloodTypeModalVisible, setIsBloodTypeModalVisible] = useState(false);
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [bloodTypeTextInputValue, setBloodTypeTextInputValue] =
    useState('Select Blood Type');

  const openBloodTypeModal = () => {
    setIsBloodTypeModalVisible(true);
  };
  const handleBloodTypeSelect = bloodType => {
    setSelectedBloodType(bloodType);
    setBloodTypeTextInputValue(bloodType);
    closeBloodTypeModal();
  };
  const closeBloodTypeModal = () => {
    setIsBloodTypeModalVisible(false);
  };

  const validationSchema = yup.object().shape({
    age: yup.string().required('Age is Required'),
    weight: yup.string().required('Age is Required'),
    height: yup.string().required('Age is Required'),
  });
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  //  const addData = values => {
  //   delete values.Password;
  //   delete values.cpassword;
  //   console.log(values);
  //   let promise = new Promise((resolve, reject) => {
  //     firestore()
  //       .collection('PatientUsers')
  //       .add(values)
  //       .then(() => {

  //         resolve(true);
  //       })
  //       .catch(error => {
  //         console.log(error);

  //       });
  //   });

  //   return promise;
  // };

  const onSubmitValue = async => {};

  //   resetForm();
  //   setLoader(true);
  //   try {
  //     const user = await auth().createUserWithEmailAndPassword(
  //       values.email,
  //       values.Password,
  //     );

  //     Alert.alert('Signup Successful');

  //     if (user) {
  //       addData(values)
  //         .then(bool => {
  //           auth()
  //             .currentUser.sendEmailVerification()
  //             .then(async () => {
  //               setLoader(false);
  //               Alert.alert(
  //                 'Please verify your email address. An email has been sent to your email address',
  //               );
  //               await auth().signOut();
  //               navigation.navigate("TabNavigationPatient")
  //             })
  //             .catch(error => Alert.alert('Error: ', error));
  //         })
  //         .catch(error => Alert.alert('Signup failed'));

  //     } else Alert.alert("Signup failed")

  //   } catch (error) {
  //     setLoader(false)
  //     console.log("Error", error.message)
  //     Alert.alert(error.message);
  //   }
  // };
  return (
    <Formik
      initialValues={{
        age: '',
        weight: '',
        height: '',
      }}
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

          <Text style={styles.Label}>Age</Text>
          <TextInput
            textColor="rgba(26, 69, 99, 1)"
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}
            underlineColor="transparent"
            style={styles.TextInput}
            underlineColorAndroid="transparent"
          />
          <ErrorMessage error={errors['age']} visible={touched['age']} />

          <Text style={styles.Label}>Gender</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 24,
            }}>
            <TextInput
              textColor="rgba(26, 69, 99, 1)"
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              value={textInputValue}
              style={[styles.TextInput, {flex: 1}]}
              editable={false}
              underlineColor="transparent"
              right={
                <TextInput.Icon
                  style={{marginTop: 10}}
                  icon="menu"
                  onPress={openModal}
                />
              }
            />
          </View>

          <Text style={styles.Label}>Blood Type</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 24,
            }}>
            <TextInput
              textColor="rgba(26, 69, 99, 1)"
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              value={bloodTypeTextInputValue}
              style={[styles.TextInput, {flex: 1}]}
              editable={false}
              underlineColor="transparent"
              right={
                <TextInput.Icon
                  style={{marginTop: 10}}
                  icon="menu"
                  onPress={openBloodTypeModal}
                />
              }
            />
          </View>

          <Text style={styles.Label}>Weight</Text>
          <TextInput
            textColor="rgba(26, 69, 99, 1)"
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            onChangeText={handleChange('weight')}
            onBlur={handleBlur('weight')}
            value={values.weight}
            underlineColor="transparent"
            style={styles.TextInput}
            underlineColorAndroid="transparent"
          />
          <ErrorMessage error={errors['weight']} visible={touched['weight']} />

          <Text style={styles.Label}>Height</Text>
          <TextInput
            textColor="rgba(26, 69, 99, 1)"
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            onChangeText={handleChange('height')}
            onBlur={handleBlur('height')}
            value={values.height}
            underlineColor="transparent"
            style={styles.TextInput}
            underlineColorAndroid="transparent"
          />
          <ErrorMessage error={errors['height']} visible={touched['height']} />

          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.radioContainer}>
                  <Text style={styles.popup}>Male</Text>
                  <RadioButton
                    selected={selectedOption === 'Male'}
                    onPress={() => handleOptionSelect('Male')}
                  />
                </View>
                <View style={styles.line} />
                <View style={styles.radioContainer}>
                  <Text style={styles.popup}>Female</Text>
                  <RadioButton
                    selected={selectedOption === 'Female'}
                    onPress={() => handleOptionSelect('Female')}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            visible={isBloodTypeModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeBloodTypeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  {bloodTypes.map(bloodType => (
                    <TouchableOpacity
                      key={bloodType}
                      onPress={() => handleBloodTypeSelect(bloodType)}>
                      <Text style={styles.popup}>{bloodType}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
          <Modal
            visible={isBloodTypeModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeBloodTypeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.radioContainer}>
                  <Text style={styles.popup}>Select Blood Type</Text>
                </View>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('A+')}>
                  <Text style={styles.popup}>A+</Text>
                  {selectedBloodType === 'A+' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('A-')}>
                  <Text style={styles.popup}>A-</Text>
                  {selectedBloodType === 'A-' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('B+')}>
                  <Text style={styles.popup}>B+</Text>
                  {selectedBloodType === 'B+' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('B-')}>
                  <Text style={styles.popup}>B-</Text>
                  {selectedBloodType === 'B-' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('AB+')}>
                  <Text style={styles.popup}>AB+</Text>
                  {selectedBloodType === 'AB+' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('AB-')}>
                  <Text style={styles.popup}>AB-</Text>
                  {selectedBloodType === 'AB-' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('O+')}>
                  <Text style={styles.popup}>O+</Text>
                  {selectedBloodType === 'O+' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                  style={styles.radioContainer}
                  onPress={() => handleBloodTypeSelect('O-')}>
                  <Text style={styles.popup}>O-</Text>
                  {selectedBloodType === 'O-' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PatientForm3');
            }}
            style={styles.btnShape}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>

          <View style={styles.bottomLine}>
            <Text style={styles.text4}>Already have an account!</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LogInPatient');
              }}>
              <Text style={styles.text5}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 8,
    backgroundColor: '#d3d4d9',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.pageBackground,
    opacity: 1,
    padding: 10,
    paddingVertical: 20,
    width: '95%',
    borderRadius: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    marginBottom: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: colors.btnclr,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.btnclr,
  },

  popup: {color: 'black', fontSize: 19, marginHorizontal: 5},

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
    height: 42,
    paddingLeft: 5,
    paddingTop: 5,
    marginTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  TextInput1: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderRadius: 4,
    height: 47,
    paddingLeft: 5,
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
    marginTop: 40,
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
