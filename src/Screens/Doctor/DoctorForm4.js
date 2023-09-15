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
  import Icon from 'react-native-vector-icons/FontAwesome';
  
  import React, {useState} from 'react';
  import {Chip, IconButton, TextInput} from 'react-native-paper';
  import * as yup from 'yup';
  import {Formik} from 'formik';
  import {colors} from '../../Global/globalstyles';
  
  export default function DoctorForm4({navigation}) {
    const [text, setText] = useState('');
    const [checked, setChecked] = useState(false);
    const handleToggle = () => {
      setChecked(!checked);
    };
    const validationSchema = yup.object().shape({
     
    });
  
   
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
  
            <Text style={styles.Label}>About</Text>
            <View>
            <TextInput
              textColor="rgba(26, 69, 99, 1)"
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              multiline={true}
              numberOfLines={8} 
              placeholder="Enter text here"
              onChangeText={setText}
              value={text}
              underlineColor="transparent"
              style={styles.TextInput}
              underlineColorAndroid="transparent"
            />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 140,  
                          
              }}>
              <Text
                style={{
                  color: 'black',
                  marginTop: 10,
                  fontSize: 14,
                  fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
                }}>
                Accept terms and conditions
              </Text>
              <TouchableOpacity onPress={handleToggle}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: 'white',
                    backgroundColor: checked ? 'white' : 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                    marginTop: 8,
                  }}>
                  {checked && (
                    <Icon name="check" size={18} color="rgba(193, 193, 193, 1)" />
                  )}
                  {/* You can change the color and size of the check icon */}
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DoctorForm5');
              }}
              style={styles.btnShape}>
              <Text style={styles.btnText}>Register</Text>
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
    line: {
      height: 1,
      width: '100%',
      alignSelf: 'center',
      marginVertical: 8,
      backgroundColor: '#d3d4d9',
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
      marginTop: 64,
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
    textInput: {
      // borderColor: 'white',
      // borderWidth: 1,
      // fontSize: 16,
      // padding: 10,
       alignSelf: 'center',
      width: '87%',
      backgroundColor: colors.white,
      borderRadius: 5,
      borderRadius: 4,
      // height: 42,
      paddingLeft: 5,
      paddingTop: 5,
      marginTop: 5,
      color: 'rgba(26, 69, 99, 1)',
      fontSize: 15,
      fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    },
    TextInput: {
      alignSelf: 'center',
      width: '87%',
      backgroundColor: colors.white,
      borderRadius: 5,
      borderRadius: 4,
      // height: 42,
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
      marginTop: 15,
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
  