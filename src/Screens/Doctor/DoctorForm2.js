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
import Slider from '@react-native-community/slider';
export default function DoctorForm2({navigation}) {
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
    useState('Select Medical Speciality');

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

  const bloodTypes = ['Cardiology', 'Dermatology', 'Neurology', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const [hours, setHours] = useState(0);
  const [endHours, setEndHours] = useState(0);
  const increaseHours = () => {
    setHours((prevHours) => (prevHours < 23 ? prevHours + 1 : prevHours));
  };
  
  const decreaseHours = () => {
    setHours((prevHours) => (prevHours > 0 ? prevHours - 1 : prevHours));
  };

  const increaseHours1 = () => {
    setEndHours((prevHours) => (prevHours < 23 ? prevHours + 1 : prevHours));
  };
  
  const decreaseHours1 = () => {
    setEndHours((prevHours) => (prevHours > 0 ? prevHours - 1 : prevHours));
  };

  const onSubmitValue = async => {};

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
      <View style={{marginTop:10}}>

      </View>
      <Text style={styles.Label}>Medical Speciality</Text>
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


      <Text style={styles.Label}>years of Experience</Text>
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
        underlineColorAndroid="transparent"
      />
      
      <Text style={styles.Label}>Office / Hospital Address</Text>
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
        underlineColorAndroid="transparent"
      />



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
      <Text style={styles.Label}>Availability Hours</Text>
      <View style={{flexDirection:'row', justifyContent:'center', marginTop:10,}}>
      <View style={styles.box}>
  <TouchableOpacity onPress={increaseHours} style={styles.arrow}>
    <Text style={styles.arrowText}>↑</Text>
  </TouchableOpacity>

  <Text style={styles.hoursText}>{hours.toString().padStart(2, '0')}:00</Text>

  <TouchableOpacity onPress={decreaseHours} style={styles.arrow}>
    <Text style={styles.arrowText}>↓</Text>
  </TouchableOpacity>
</View>
<View style={styles.box}>
  <TouchableOpacity onPress={increaseHours1} style={styles.arrow}>
    <Text style={styles.arrowText}>↑</Text>
  </TouchableOpacity>

  <Text style={styles.hoursText}>{endHours.toString().padStart(2, '0')}:00</Text>

  <TouchableOpacity onPress={decreaseHours1} style={styles.arrow}>
    <Text style={styles.arrowText}>↓</Text>
  </TouchableOpacity>
</View>
      </View>
      
     
    

     
      

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
            <View style={styles.radioContainer}>
              <Text style={styles.popup}>Select Medical Speciality</Text>
            </View>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => handleBloodTypeSelect('Neurology')}>
              <Text style={styles.popup}>Neurology</Text>
              {selectedBloodType === 'Neurology' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => handleBloodTypeSelect('Dermatology')}>
              <Text style={styles.popup}>Dermatology</Text>
              {selectedBloodType === 'Dermatology' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => handleBloodTypeSelect('Radiology')}>
              <Text style={styles.popup}>Radiology</Text>
              {selectedBloodType === 'Radiology' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => handleBloodTypeSelect('Gastroenterology')}>
              <Text style={styles.popup}>Gastroenterology</Text>
              {selectedBloodType === 'Gastroenterology' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => handleBloodTypeSelect('Urology')}>
              <Text style={styles.popup}>Urology</Text>
              {selectedBloodType === 'Urology' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => handleBloodTypeSelect('Ophthalmology')}>
              <Text style={styles.popup}>Ophthalmology</Text>
              {selectedBloodType === 'Ophthalmology' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => handleBloodTypeSelect('Orthopedics')}>
              <Text style={styles.popup}>Orthopedics</Text>
              {selectedBloodType === 'Orthopedics' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            
            
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DoctorForm3');
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
  );
}
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
       marginHorizontal:10,
       backgroundColor:'white',
      },
      arrow: {
        padding: 5,
      },
      arrowText: {
        fontSize: 18,
      },
      hoursText: {
        color:'#1A4563',
        fontSize: 17,
        padding: 10,
      },
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
   button: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 17,
    alignItems: 'center',
    width: '27%',
    elevation: 6,
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
