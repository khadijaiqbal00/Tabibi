import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../Global/globalstyles';
import {
  backTransparentIcon,
  dotTransparentIcon,
  verifiedDocIcon,
  ratingStarIcon,
  availabilityIcon,
} from '../../Assets/TabSvgs';
import {SvgXml} from 'react-native-svg';

import {Back, Emergency} from '../../Assets/icons';
export default function PatientDetails({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const [text, setText] = useState('');
  const {Doc} = route.params;
  const {id} = route.params;
  console.log('>>>>>>>>>>>>>>>>>>>>>>>', Doc);
  //  console.log("Doc>>>>>>>",Doc)
  const image = Doc.image;

  const name = Doc.name;
  //  console.log("nameeee", name)
  const review = Doc.review;
  const review2 = Doc.review2;
  const designation = Doc.designation;
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 170,
          width: '100%',
          backgroundColor: 'rgba(28, 107, 164, 1)',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <SvgXml
            xml={backTransparentIcon}
            style={{marginLeft: 20, marginTop: 20}}></SvgXml>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text
            style={{
              marginTop: 30,
              textAlign: 'center',
              color: 'white',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Medium',
              marginRight: 20,
            }}>
            Report
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 130,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 30,
          marginTop: -65,
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            marginVertical: 25,
            marginLeft: 20,
          }}></Image>

        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 17,
              width: 120,
              marginTop: 30,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            Patient Name
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'rgba(74, 84, 94, 1)',
              fontSize: 10,
              marginTop: 10,
              marginLeft: 10,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            {designation}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 100,
            borderRadius: 24,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Age
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'rgba(37, 49, 65, 1)',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            20
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 100,
            borderRadius: 24,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Gender
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'rgba(37, 49, 65, 1)',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            female
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 100,
            borderRadius: 24,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Blood Type
          </Text>

          <Text
            style={{
              marginTop: 10,
              marginLeft: 20,
              textAlign: 'center',
              color: 'rgba(37, 49, 65, 1)',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            A+
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '90%',

          alignSelf: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 100,
            borderRadius: 24,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Height
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'rgba(37, 49, 65, 1)',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            170 cm
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            marginHorizontal: 10,
            width: 100,
            borderRadius: 24,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Weight
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'rgba(37, 49, 65, 1)',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            70 Kg
          </Text>
        </View>
      </View>

      <View style={{marginTop: 12, marginHorizontal: 15}}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            marginBottom: 6,
            fontFamily: 'NunitoSans_7pt-Black',
            fontWeight: '400',
          }}>
          Medical History
        </Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          theme={{
            colors: {
              text: 'rgba(28, 107, 164, 1)',
              primary: 'rgba(28, 107, 164, 1)',
            },
          }}
          underlineColor="transparent"
          style={styles.TextInputSetting2}></TextInput>
      </View>

      <TouchableOpacity
        onPress={() => {
            setModalVisible1(true)
          // navigation.navigate('Appointment1', {Doctor: Doc, id: id});
        }}
        style={{
          backgroundColor: 'rgba(28, 107, 164, 1)',
          height: 50,
          width: '85%',
          alignSelf: 'center',
          borderRadius: 14,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginTop: 14,
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'NunitoSans_10pt-Medium',
          }}>
          Generate a Medical Report
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{width: '100%', marginVertical: 10}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{width: '20%', marginleft: 40}}>
                  <Back
                    width={45}
                    height={46}
                    style={{marginTop: 18, marginLeft: 20}}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    color: '#5B555C',
                    fontSize: 15,
                    marginTop: 30,
                    width: '80%',
                    marginLeft: 20,
                  }}>
                  Report Behaviour
                </Text>
              </View>
              <View style={{height: 150}}>
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
                  placeholder="State the problem with the details"
                  onChangeText={setText}
                  value={text}
                  underlineColor="transparent"
                  style={styles.TextInput}
                  underlineColorAndroid="transparent"
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Appointment1', {Doctor: Doc, id: id});
                }}
                style={{
                  backgroundColor: '#1C6BA4',
                  height: 50,
                  width: '85%',
                  alignSelf: 'center',
                  borderRadius: 14,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    marginTop: 13,
                    // marginLeft: 20,
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'NunitoSans_10pt-Medium',
                  }}>
                  Send
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView1}>
            <ScrollView style={{width: '100%', marginVertical: 10}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => setModalVisible1(false)}
                  style={{width: '20%', marginleft: 40}}>
                  <Back
                    width={45}
                    height={46}
                    style={{marginTop: 18, marginLeft: 20}}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    color: '#5B555C',
                    fontSize: 15,
                    marginTop: 30,
                    width: '90%',
                    marginLeft: 20,
                  }}>
                  Generating a Medical Report
                </Text>
              </View>
              <View style={{height: 150}}>
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
                  placeholder="Write Your Diagnosis"
                  onChangeText={setText}
                  value={text}
                  underlineColor="transparent"
                  style={styles.TextInput}
                  underlineColorAndroid="transparent"
                />
              </View>

              <View style={{height: 150}}>
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
                  placeholder="Write Prescription"
                  onChangeText={setText}
                  value={text}
                  underlineColor="transparent"
                  style={styles.TextInput}
                  underlineColorAndroid="transparent"
                />
              </View>

              <TouchableOpacity
                // onPress={() => {
                //   navigation.navigate('Appointment1', {Doctor: Doc, id: id});
                // }}
                style={{
                  backgroundColor: '#1C6BA4',
                  height: 50,
                  width: '85%',
                  alignSelf: 'center',
                  borderRadius: 14,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    marginTop: 13,
                    // marginLeft: 20,
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'NunitoSans_10pt-Medium',
                  }}>
                    Generate Report
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => {
                //   navigation.navigate('Appointment1', {Doctor: Doc, id: id});
                // }}
                style={{
                  backgroundColor: 'white',
                  height: 50,
                  width: '85%',
                  alignSelf: 'center',
                  borderRadius: 14,
                  marginTop: 20,
                  elevation:10, 
                  marginBottom:20, 
                }}>
                <Text
                  style={{
                    marginTop: 13,
                    // marginLeft: 20,
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'NunitoSans_10pt-Medium',
                  }}>
                    Finish Later
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInputSetting2: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 97,
    paddingLeft: 5,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  modalView1: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '70%',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: '40%',
  },
  button: {
    padding: 10,
    elevation: 2,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  TextInput: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: '#f5f7fa',
    borderRadius: 5,
    borderRadius: 4,

    paddingLeft: 5,
    paddingTop: 5,
    marginTop: 15,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 13,
    fontFamily: 'NunitoSans_4pt_SemiCondensed-Black',
    fontStyle: 'italic',
  },
});
