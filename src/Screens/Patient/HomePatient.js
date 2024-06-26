import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {
  Camera,
  Gallery,
  ProfileImage,
  CrossIcon,
  Cameraicon,
  Go,
  BackButton,
} from '../../Assets/icons';

import ImageCropPicker from 'react-native-image-crop-picker';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Global/globalstyles';
import {SvgXml} from 'react-native-svg';
import {PharmacyIcon} from '../../Assets/PharmacyComp';
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import {userIcon} from '../../Assets/PharmacyComp';
import {reportIcon} from '../../Assets/PharmacyComp';
import AppointmentCard from '../../Components/AppointmentCard';
import {dotsIcon} from '../../Assets/TabSvgs';
import {appointmentData, scheduleData} from '../../Global/Data';
import {useIsFocused} from '@react-navigation/native';
import {backbgWhiteIcon} from '../../Assets/TabSvgs';
import {locationIcon} from '../../Assets/TabSvgs';
import {pharmacyData} from '../../Global/Data';
import {Chip, IconButton, TextInput} from 'react-native-paper';
import PharmacyCard from '../../Components/PharmacyCard';
import {fileIcon} from '../../Assets/TabSvgs';
import {sendZipIcon} from '../../Assets/TabSvgs';
import {Back, DoctorImg, Star, Clock} from '../../Assets/icons';

import {
  Back2,
  Doctor2,
  Settings,
  Fb,
  Feed,
  Vector,
  Language,
  Compass,
  Log,
} from '../../Assets/icons';
import ProfileComponent from '../../Components/ProfileComponent';
import PatientCard from '../../Components/PatientCard';
import {DoctorData} from '../../Global/Data';
import DoctorCard from '../../Components/DoctorCard';
import OnlineDoctorCard from '../../Components/OnlineDoctorCard';
// import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PaymentComponent from '../../Components/PaymentComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePatient = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const [modalVisible7, setModalVisible7] = useState(false);
  const [modalVisible8, setModalVisible8] = useState(false);
  const [modalVisible9, setModalVisible9] = useState(false);
  const [modalVisible10, setModalVisible10] = useState(false);

  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };

  const [checked1, setChecked1] = useState(false);
  const handleToggle1 = () => {
    setChecked1(!checked1);
  };

  const [checked2, setChecked2] = useState(false);
  const handleToggle2 = () => {
    setChecked2(!checked2);
  };

  const [checked3, setChecked3] = useState(false);
  const handleToggle3 = () => {
    setChecked3(!checked3);
  };
  const [checked4, setChecked4] = useState(false);
  const handleToggle4 = () => {
    setChecked4(!checked4);
  };
  const [checked5, setChecked5] = useState(false);
  const handleToggle5 = () => {
    setChecked5(!checked5);
  };

  const [checked6, setChecked6] = useState(false);
  const handleToggle6 = () => {
    setChecked6(!checked6);
  };



  const [List2, setList2] = useState([{}]);
  const [List3, setList3] = useState([{}]);
  const [init, setInit] = useState();

  const [indexCheck2, setIndexCheck2] = useState(init);
  const [List, setList] = useState([{}]);
  const [List4, setList4] = useState([{}]);

  const [isBloodTypeModalVisible, setIsBloodTypeModalVisible] = useState(false);
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [bloodTypeTextInputValue, setBloodTypeTextInputValue] = useState('');

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

  const [image, setImage] = useState(null);

  const chooseImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        const source = {uri: image.path};
        setImage(source);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const openCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        const source = {uri: image.path};
        setImage(source);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const logout = async () => {
    try {
      // Clear user authentication data from AsyncStorage
      await AsyncStorage.removeItem('USERID');
      navigation.navigate('LogInPatient');
      // You can also clear other user-related data if needed

      // Redirect the user to the login screen or any other appropriate screen
      // For example, if you're using React Navigation:
      // navigation.navigate('Login');
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };

  useEffect(() => {
    const AppointmentDataFireStore = firestore()
      .collection('appointments')
      .onSnapshot(
        snapshot => {
          const appointmentsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setList(appointmentsData);

          if (appointmentsData.length > 0) {
            console.log('', appointmentsData[0].id);
            setInit(appointmentsData[0].id);
          }
        },
        error => {
          console.error('Error fetching appointments data:', error);
          // Handle the error here, such as showing an error message to the user
        },
      );

    // Return a cleanup function to unsubscribe the listener
    return () => AppointmentDataFireStore();
  }, []);
  useEffect(() => {
    const DoctorsDataFireStore = firestore()
      .collection('doctors')
      .onSnapshot(
        snapshot => {
          const doctorsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setList4(doctorsData);
          console.log(doctorsData);
        },
        error => {
          console.error('Error fetching doctors data:', error);
          // Handle the error here, such as showing an error message to the user
        },
      );

    // Return a cleanup function to unsubscribe the listener
    return () => DoctorsDataFireStore(); // This should be changed
  }, []);
  useEffect(() => {
    const PharmacyDataFireStore = firestore()
      .collection('pharmacies')
      .onSnapshot(
        snapshot => {
          const pharmacyData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setList2(pharmacyData);
        },
        error => {
          console.error('Error fetching pharmacy data:', error);
          // Handle the error here, such as showing an error message to the user
        },
      );
    // Return a cleanup function to unsubscribe the listener
    return () => PharmacyDataFireStore(); // Call the function to unsubscribe
  });

  return (
    <View style={styles.Container}>
      <Modal animationType="fade" transparent={false} visible={modalVisible2}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.pageBackground2,
            height: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible2(false);
            }}>
            <Back2
              width={40}
              height={40}
              style={{marginTop: '10%', marginHorizontal: '5%'}}
            />
          </TouchableOpacity>

          <View style={{alignItems: 'center'}}>
            <Doctor2
              width={80}
              height={80}
              style={{
                marginTop: -30,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: colors.white,
                marginTop: '2%',
                fontFamily: 'NunitoSans_10pt-Bold',
              }}>
              Mohammed Bed
            </Text>
          </View>

          <View style={{marginTop: '10%'}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible5(true);
              }}>
              <ProfileComponent title="Account Settings" svg={Settings} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible6(true);
              }}>
              <ProfileComponent title="Payment Method" svg={Vector} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible8(true);
              }}>
              <ProfileComponent title="Language Selection" svg={Language} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible9(true);
              }}>
              <ProfileComponent title="Pivacy Policy" svg={Compass} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible10(true);
              }}>
              <ProfileComponent title="Terms of use" svg={Compass} />
            </TouchableOpacity>
            <ProfileComponent title="Feedback" svg={Feed} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '10%',
            }}>
            <Log width={25} height={25} />
            <TouchableOpacity onPress={logout}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 10,
                  fontSize: 17,
                  fontFamily: 'NunitoSans_10pt-Bold',
                }}>
                LogOut
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={false} visible={modalVisible3}>
        <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible3(false);
            }}>
            <Back
              width={50}
              height={50}
              style={{marginTop: '5%', marginHorizontal: 10}}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <DoctorImg width={110} height={110} style={{marginTop: '15%'}} />
            <Text
              style={{
                fontSize: 22,
                color: 'rgba(14, 16, 18, 1)',
                marginTop: '4%',
                fontFamily: 'NunitoSans_10pt-Bold',
              }}>
              Dr. Chalukya Gunasekara
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'rgba(123, 141, 158, 1)',
                marginTop: '1%',
                fontFamily: 'NunitoSans_10pt-Medium',
              }}>
              Demonologist in Asiri hospital
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Star width={17} height={17} style={{marginLeft: 5}} />
              <Text
                style={{
                  fontFamily: 'NunitoSans_10pt-Bold',
                  fontSize: 16,

                  marginHorizontal: 7,
                  color: 'rgba(74, 84, 94, 1)',
                }}>
                4.7
              </Text>
              <Text
                style={{
                  fontFamily: 'NunitoSans_7pt-Light',
                  fontSize: 14,
                  marginTop: 2,
                  marginHorizontal: 2,
                  color: '#4A545E',
                }}>
                17 reviews
              </Text>
            </View>
            <View style={{width: '85%', marginTop: 10}}>
              <TextInput
                multiline={true}
                numberOfLines={7}
                theme={{
                  colors: {
                    text: 'rgba(28, 107, 164, 1)',
                    primary: 'rgba(28, 107, 164, 1)',
                  },
                }}
                underlineColor="transparent"
                style={styles.TextInput1}></TextInput>
            </View>
          </View>
          <View style={{width: '87%', alignSelf: 'center', marginTop: '12%'}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.white,
                borderRadius: 28,
                width: '100%',
                height: 90,
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <View></View>
              <View
                style={{
                  backgroundColor: 'rgba(220, 237, 249, 1)',
                  height: 65,
                  width: '25%',
                  borderRadius: 20,
                  marginLeft: '3%',
                  marginTop: 13,
                }}>
                <Clock
                  width={35}
                  height={35}
                  style={{marginVertical: '20%', marginHorizontal: '25%'}}
                />
              </View>
              <View style={{marginLeft: '6%', marginTop: '6%'}}>
                <Text
                  style={{
                    fontFamily: 'NunitoSans_7pt-Light',
                    fontSize: 14,
                    color: 'rgba(14, 16, 18, 1)',
                  }}>
                  {/* {name} */}
                  Availability
                </Text>
                <Text
                  style={{
                    fontFamily: 'NunitoSans_10pt-Bold',
                    fontSize: 17,
                    marginTop: 10,
                    color: 'rgba(14, 16, 18, 1)',
                  }}>
                  6h - 17h
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Appointment1');
              }}
              style={styles.btnShape}>
              <Text style={styles.btnText}>CONNECT NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible4}>
        <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible4(false);
              }}>
              <Back
                width={45}
                height={46}
                style={{marginHorizontal: 18, marginTop: 18}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 27,
                fontFamily: 'NunitoSans_10pt-Bold',
                marginTop: '6%',
              }}>
              Doctors
            </Text>
          </View>
          <View style={{marginTop: '6%'}}>
            <TextInput
              placeholderTextColor={'rgba(138, 160, 188, 1)'}
              placeholder="Looking for a Doctor..."
              style={styles.TextInputDoc}></TextInput>
            <SvgXml
              xml={searchIcon}
              style={{marginTop: -40, marginLeft: '10%'}}></SvgXml>
            <TouchableOpacity>
              <SvgXml
                xml={filterIcon}
                style={{marginTop: -22, marginLeft: '80%'}}></SvgXml>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginLeft: '9%',
              fontSize: 17,
              marginTop: 30,
              color: 'rgba(14, 16, 18, 1)',
              fontFamily: 'NunitoSans_10pt-SemiBold',
            }}>
            Live Doctors
          </Text>

          <View style={{width: 300, marginLeft: 10}}>
            <FlatList
              horizontal
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              data={List4}
              keyExtractor={item => item.id}
              renderItem={({item}) => <OnlineDoctorCard image={item.image} />}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text
              style={{
                marginLeft: '9%',
                fontSize: 17,
                marginTop: 30,
                color: 'rgba(14, 16, 18, 1)',
                fontFamily: 'NunitoSans_10pt-SemiBold',
              }}>
              List of Doctors
            </Text>

            <Text
              onPress={() => {
                setModalVisible3(true);
              }}
              style={{
                marginLeft: '9%',
                fontSize: 14,
                marginTop: 30,
                color: 'rgba(28, 107, 164, 1)',
                fontFamily: 'NunitoSans_10pt-Light',
              }}>
              See all
            </Text>
          </View>

          <FlatList
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            data={List4}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DoctorDetails', {Doc: item});
                }}>
                <DoctorCard
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  review={item.review}
                  review2={item.review2}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible5}>
        <View style={{flex: 1, backgroundColor: colors.pageBackground2}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible5(false);
            }}>
            <Back2
              width={40}
              height={40}
              style={{marginTop: '10%', marginHorizontal: '5%'}}
            />
          </TouchableOpacity>

          {image ? (
            <View style={styles.profileImageContainer}>
              <Image source={image} style={styles.image} />
              <Cameraicon
                size={20}
                onPress={openCamera}
                style={{
                  position: 'absolute',
                  // backgroundColor: '#1A4F75',
                  bottom: -35,
                  right: -20,
                }}
              />
              <CrossIcon
                size={20}
                onPress={() => setImage(null)}
                style={{
                  position: 'absolute',
                  // backgroundColor: '#1A4F75',
                  bottom: -35,
                  right: 70,
                }}
              />
            </View>
          ) : (
            <View style={styles.profileImageContainer}>
              <ProfileImage width={130} height={130} />
              <Cameraicon
                size={20}
                onPress={openCamera}
                style={{
                  position: 'absolute',
                  // backgroundColor: '#1A4F75',
                  bottom: -35,
                  right: -20,
                }}
              />
              <CrossIcon
                size={20}
                onPress={() => setImage(null)}
                style={{
                  position: 'absolute',
                  // backgroundColor: '#1A4F75',
                  bottom: -35,
                  right: 70,
                }}
              />
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 20,
              marginTop: 40,
              marginBottom: 3,
            }}>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_7pt-Black',
                }}>
                First name
              </Text>
            </View>

            <View style={{width: '50%', marginLeft: 10}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_7pt-Black',
                  fontWeight: '400',
                }}>
                Last name
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 10,
            }}>
            <TextInput
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              underlineColor="transparent"
              style={styles.TextInputSetting}></TextInput>

            <TextInput
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              underlineColor="transparent"
              style={styles.TextInputSetting}></TextInput>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 20,
              marginTop: 5,
              marginBottom: 3,
            }}>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_7pt-Black',
                }}>
                Blood Type
              </Text>
            </View>

            <View style={{width: '50%', marginLeft: 10}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_7pt-Black',
                  fontWeight: '400',
                }}>
                Age
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 10,
            }}>
            <TextInput
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              value={bloodTypeTextInputValue}
              underlineColor="transparent"
              style={styles.TextInputSetting}
              right={
                <TextInput.Icon
                  style={{marginTop: 10}}
                  icon="menu"
                  onPress={openBloodTypeModal}
                />
              }></TextInput>

            <TextInput
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              underlineColor="transparent"
              style={styles.TextInputSetting}></TextInput>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 20,
              marginTop: 5,
              marginBottom: 3,
            }}>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_7pt-Black',
                }}>
                Weight
              </Text>
            </View>

            <View style={{width: '50%', marginLeft: 10}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_7pt-Black',
                  fontWeight: '400',
                }}>
                Height
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 10,
            }}>
            <TextInput
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              underlineColor="transparent"
              style={styles.TextInputSetting}></TextInput>

            <TextInput
              theme={{
                colors: {
                  text: 'rgba(28, 107, 164, 1)',
                  primary: 'rgba(28, 107, 164, 1)',
                },
              }}
              underlineColor="transparent"
              style={styles.TextInputSetting}></TextInput>
          </View>

          <View style={{marginTop: 12, marginHorizontal: 15}}>
            <Text
              style={{
                color: 'white',
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
          <View style={styles.bottomLine}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: '35%',
                height: '45%',
                borderRadius: 20,
                ...Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.6,
                    shadowRadius: 2,
                  },
                  android: {
                    elevation: 4,
                  },
                }),
              }}>
              <Text
                style={{
                  color: '#00CA20',
                  textAlign: 'center',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
                  marginTop: 7,
                }}>
                Save{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF0000',
                width: '50%',
                height: '45%',
                borderRadius: 20,
                ...Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.6,
                    shadowRadius: 2,
                  },
                  android: {
                    elevation: 4,
                  },
                }),
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 14,
                  fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
                  marginTop: 7,
                }}>
                Delete Account{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible6}>
        <View style={{flex: 0.17, backgroundColor: colors.pageBackground2}}>
          <View
            style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible6(false);
              }}>
              <Back2
                width={40}
                height={40}
                style={{marginTop: '10%', marginHorizontal: '5%'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 19,
                marginTop: 14,
                fontFamily: 'NunitoSans_7pt-Black',
              }}>
              Get more consultations
            </Text>
          </View>
          <View
            style={{
              width: '80%',
              backgroundColor: 'white',
              borderRadius: 20,
              elevation: 10,
              marginTop: 30,
              height: '50%',
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Text
                style={{
                  color: '#28608F',
                  fontSize: 23,
                  fontFamily: 'NunitoSans_10pt-Bold',
                }}>
                2
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontFamily: 'NunitoSans_10pt-Bold',
                  marginTop: 5,
                  marginLeft: 20,
                }}>
                Remaining consultations
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 20}}>
            <View
              style={{
                height: 150,
                backgroundColor: '#17c3b2',
                borderRadius: 20,
                width: '47%',
                marginHorizontal: 5,
                elevation: 10,
              }}>
              <TouchableOpacity onPress={handleToggle}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: checked ? 'black' : 'white',
                    backgroundColor: checked ? 'transparent' : 'transparent',
                    marginLeft: 120,
                    marginTop: 8,
                  }}>
                  {checked && (
                    <Icon
                      name="check"
                      size={18}
                      color="black"
                    />
                  )}
                </View>
                <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Black',
                  fontSize: 75,
                  marginTop: -20,
                  textAlign: 'center',
                }}>
                +1
              </Text>
              </TouchableOpacity>
             
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  fontSize: 15,
                  textAlign: 'center',
                  marginTop: -10,
                }}>
                Consultation credit
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  elevation: 10,
                  height: 50,
                  // marginTop: -10,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontFamily: 'NunitoSans_10pt-Bold',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  5€
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 150,
                backgroundColor: '#30a5d0',
                borderRadius: 20,
                width: '47%',
                marginHorizontal: 5,
                elevation: 10,
              }}>
              <TouchableOpacity onPress={() => handleToggle1()}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: checked1 ? 'black' : 'white',
                    backgroundColor: checked1 ? 'transparent' : 'transparent',
                    marginLeft: 120,
                    marginTop: 8,
                  }}>
                  {checked1 && (
                    <Icon
                      name="check"
                      size={18}
                      color="black"
                    />
                  )}
                </View>
                <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Black',
                  fontSize: 75,
                  marginTop: -20,
                  textAlign: 'center',
                }}>
                +2
              </Text>
              </TouchableOpacity>

             
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  fontSize: 15,
                  textAlign: 'center',
                  marginTop: -10,
                }}>
                Consultation credit
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  elevation: 10,
                  height: 50,
                  // marginTop: 10,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontFamily: 'NunitoSans_10pt-Bold',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  10€
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 20}}>
            <View
              style={{
                height: 150,
                backgroundColor: '#ff3f6d',
                borderRadius: 20,
                width: '47%',
                marginHorizontal: 5,
                elevation: 10,
              }}>

<TouchableOpacity onPress={handleToggle2}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: checked2 ? 'black' : 'white',
                    backgroundColor: checked2? 'transparent' : 'transparent',
                    marginLeft: 120,
                    marginTop: 8,
                  }}>
                  {checked2 && (
                    <Icon
                      name="check"
                      size={18}
                      color="black"
                    />
                  )}
                </View>
                <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Black',
                  fontSize: 75,
                  marginTop:-20, 
                  textAlign: 'center',
                }}>
                +3
              </Text>
              </TouchableOpacity>


             
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  fontSize: 15,
                  textAlign: 'center',
                  marginTop: -10,
                }}>
                Consultation credit
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  elevation: 10,
                  height: 50,
                  // marginTop: 10,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontFamily: 'NunitoSans_10pt-Bold',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  15€
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 150,
                backgroundColor: '#ffcb77',
                borderRadius: 20,
                width: '47%',
                marginHorizontal: 5,
                elevation: 10,
              }}>
                  <TouchableOpacity onPress={handleToggle3}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: checked3 ? 'black' : 'white',
                    backgroundColor: checked3 ? 'transparent' : 'transparent',
                    marginLeft: 120,
                    marginTop: 8,
                  }}>
                  {checked3 && (
                    <Icon
                      name="check"
                      size={18}
                      color="black"
                    />
                  )}
                </View>
                <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Black',
                  fontSize: 75,
                  textAlign: 'center',
                  marginTop:-20,
                }}>
                +5
              </Text>
              </TouchableOpacity>
            
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  fontSize: 15,
                  textAlign: 'center',
                  marginTop: -10,
                }}>
                Consultation credit
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  elevation: 10,
                  height: 50,
                  // marginTop: 10,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontFamily: 'NunitoSans_10pt-Bold',
                    textAlign: 'center',
                    marginTop: 10,
                  }}>
                  10€
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 70}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible7(true);
              }}
              style={styles.btnShape1}>
              <Text style={styles.btnText1}>Payment Method</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible7}>
        <View style={{flex: 0.13, backgroundColor: colors.pageBackground2}}>
          <View
            style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible7(false);
              }}>
              <Back2
                width={40}
                height={40}
                style={{marginTop: '10%', marginHorizontal: '5%'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 19,
                marginTop: 14,
                fontFamily: 'NunitoSans_7pt-Black',
              }}>
              Payment Method
            </Text>
          </View>
          <View style={{marginTop: 100}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible6(true);
              }}>
              <PaymentComponent title="GOOGLE PLAY" svg={Go} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible6(true);
              }}>
              <PaymentComponent title="VISA / MASTERCARD" svg={Go} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible6(true);
              }}>
              <PaymentComponent title="CIB" svg={Go} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible6(true);
              }}>
              <PaymentComponent title="EDAHABIA" svg={Go} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible8}>
        <View style={{flex: 1, backgroundColor: colors.pageBackground2}}>
          <View
            style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible8(false);
              }}>
              <Back2
                width={40}
                height={40}
                style={{marginTop: '10%', marginHorizontal: '5%'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 19,
                marginTop: 14,
                fontFamily: 'NunitoSans_7pt-Black',
                marginBottom:20, 
              }}>
              Language Selection
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 60,
              borderRadius: 30,
              alignSelf: 'center',
              marginTop: 30,
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'NunitoSans_10pt-Black',
                marginLeft: 30,
                marginTop: 20,
              }}>
              English
            </Text>
            <TouchableOpacity onPress={handleToggle4}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: checked4 ? 'green' : 'black',
                    backgroundColor: checked4 ? 'green' : 'transparent',
                    marginRight: 20,
                    marginTop: 20,
                  }}>
                  {checked4 && (
                    <Icon
                      name="check"
                      size={18}
                      color="white"
                    />
                  )}
                </View>
              </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 60,
              borderRadius: 30,
              alignSelf: 'center',
              marginTop: 10,
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'NunitoSans_10pt-Black',
                marginLeft: 30,
                marginTop: 20,
              }}>
              French
            </Text>
            <TouchableOpacity onPress={handleToggle5}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: checked5 ? 'green' : 'black',
                    backgroundColor: checked5 ? 'green' : 'transparent',
                    marginRight: 20,
                    marginTop: 20,
                  }}>
                  {checked5 && (
                    <Icon
                      name="check"
                      size={18}
                      color="white"
                    />
                  )}
                </View>
              </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 60,
              borderRadius: 30,
              alignSelf: 'center',
              marginTop: 10,
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontFamily: 'NunitoSans_10pt-Black',
                marginLeft: 30,
                marginTop: 20,
              }}>
              Arabic
            </Text>
            <TouchableOpacity onPress={handleToggle6}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: checked6 ? 'green' : 'black',
                    backgroundColor: checked6? 'green' : 'transparent',
                    marginRight: 20,
                    marginTop: 20,
                  }}>
                  {checked6 && (
                    <Icon
                      name="check"
                      size={18}
                      color="white"
                    />
                  )}
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible9}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible9(false);
              }}>
              <BackButton
                width={40}
                height={40}
                style={{marginTop: '10%', marginHorizontal: '5%'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: '10%',
                color: 'black',
                fontSize: 17,
                marginTop: 14,
                fontFamily: 'NunitoSans_7pt-Black',
              }}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible10}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible10(false);
              }}>
              <BackButton
                width={40}
                height={40}
                style={{marginTop: '10%', marginHorizontal: '5%'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: '10%',
                color: 'black',
                fontSize: 17,
                marginTop: 14,
                fontFamily: 'NunitoSans_7pt-Black',
              }}>
              Terms of Use
            </Text>
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
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View
          style={{
            backgroundColor: 'rgba(220, 237, 249, 1)',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(220, 237, 249, 1)',
              height: 85,
              width: '100%',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              flexDirection: 'row',
              zIndex: 1,
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <SvgXml
                xml={backbgWhiteIcon}
                style={{marginTop: 20, marginLeft: '10%'}}></SvgXml>
            </TouchableOpacity>
            <SvgXml
              xml={locationIcon}
              style={{marginTop: 30, marginLeft: '10%'}}></SvgXml>

            <View>
              <Text
                style={{
                  color: 'black',
                  marginTop: 30,
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'NunitoSans_10pt-Light',
                }}>
                Rouiba, Alger
              </Text>
            </View>
          </View>

          {/* Below portion */}
          <View>
            <Text
              style={{
                marginTop: 20,
                alignSelf: 'center',
                fontFamily: 'NunitoSans_10pt-Bold',
                fontSize: 17,
                color: 'rgba(14, 16, 18, 1)',
              }}>
              Nearby pharmacies
            </Text>

            <FlatList
              // horizontal
              alwaysBounceVertical
              alwaysBounceHorizontal
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              data={List2}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
               
                  <PharmacyCard
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    distance={item.distance}
                    review={item.review}
                    total_reviews={item.total_reviews}
                  />
          


              )}
            />
          </View>

        
         
        </View>
      </Modal>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 80}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible2(true);
            }}>
            <Image
              style={{height: 50, width: 50, borderRadius: 50, marginTop: 16}}
              source={{
                uri: 'https://static01.nyt.com/images/2023/03/14/science/14SCI-Span-illo/14SCI-Span-illo-superJumbo.jpg',
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 40,
              width: '40%',
              marginLeft: 20,
              borderRadius: 21,
              marginTop: '7%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12,
                alignSelf: 'center',
                marginLeft: '15%',
                fontFamily: 'NunitoSans_10pt-Bold',
              }}>
              Add your Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: '6%'}}>
        <TextInput
          placeholderTextColor={'rgba(138, 160, 188, 1)'}
          placeholder="Medical Research..."
          style={styles.TextInput}></TextInput>
        <SvgXml
          xml={searchIcon}
          style={{marginTop: -40, marginLeft: '10%'}}></SvgXml>
        <TouchableOpacity>
          <SvgXml
            xml={filterIcon}
            style={{marginTop: -22, marginLeft: '80%'}}></SvgXml>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-betweens',
          width: '100%',
          marginLeft: '10%',
          marginTop: '15%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DoctorSearch');
          }}
          style={[styles.View1, {marginRight: '5%'}]}>
          <SvgXml
            xml={userIcon}
            style={{marginLeft: -10, marginTop: 5}}></SvgXml>
          <Text
            style={{
              color: 'rgba(40, 96, 143, 1)',
              marginTop: '6%',
              alignSelf: 'center',
              marginLeft: '20%',
              width: 120,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Doctors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ReportStack');
          }}
          style={[styles.View1, {marginRight: '10%'}]}>
          <SvgXml style={{marginLeft: -10}} xml={reportIcon}></SvgXml>
          <Text
            style={{
              color: 'rgba(255, 63, 109, 1)',
              marginTop: '10%',
              alignSelf: 'center',
              marginLeft: '20%',
              width: 120,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Reports
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgXml
          style={{alignSelf: 'center', marginTop: 10}}
          xml={PharmacyIcon}></SvgXml>
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: '9%',
          fontSize: 17,
          color: 'rgba(28, 107, 164, 1)',
          fontFamily: 'NunitoSans_10pt-SemiBold',
        }}>
        Upcoming appointment
      </Text>
      {/* <ScrollView>
      {List.map(item => (
        <AppointmentCard
          id={item.id}
          date={item.date}
          day={item.day}
          time={item.time}
          name={item.name}
          disease={item.disease}
        />
      ))}
    </ScrollView> */}

      <FlatList
        horizontal
        alwaysBounceVertical
        alwaysBounceHorizontal
        data={List}
        // keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              setIndexCheck2(item.id);
            }}>
            <View style={{marginLeft: 20}}>
              <View
                style={
                  indexCheck2 === item.id
                    ? {...styles.bigCardSelected}
                    : {...styles.bigCard}
                }>
                <View style={{marginLeft: 30, flexDirection: 'row'}}>
                  <View
                    style={
                      indexCheck2 === item.id
                        ? {...styles.bgDateDaySelected}
                        : {...styles.bgDateDay}
                    }>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dateValSelected}
                          : {...styles.dateVal}
                      }>
                      {item.date}
                    </Text>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dayValSelected}
                          : {...styles.dayVal}
                      }>
                      {item.day}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.bigCardTextSelected2}
                          : {...styles.bigCardText2}
                      }>
                      {item.time}
                    </Text>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.bigCardTextSelected}
                          : {...styles.bigCardText}
                      }>
                      {item.name}
                    </Text>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.bigCardTextSelected3}
                          : {...styles.bigCardText3}
                      }>
                      {item.disease}
                    </Text>
                  </View>
                  <View>
                    <SvgXml
                      xml={dotsIcon}
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dotIconSelected}
                          : {...styles.dotIcon}
                      }></SvgXml>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
          // <AppointmentCard
          //   id={item.id}
          //   date={item.date}
          //   day={item.day}
          //   time={item.time}
          //   name={item.name}
          //   disease={item.disease}
          // />
        )}
      />
    </View>
  );
};

export default HomePatient;

const styles = StyleSheet.create({
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
  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  TextInput: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: 'rgba(238, 246, 252, 1)',
    borderRadius: 18,
    elevation: 1,
    height: 56,
    paddingLeft: 50,
    paddingTop: 5,
    color: 'black',
    fontSize: 14,
    fontFamily: 'NunitoSans_10pt-Medium',
    borderTopLeftRadius:18, 
    borderTopRightRadius:18, 
  },
  View1: {
    alignSelf: 'center',
    width: '39%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    elevation: 1,
    height: 104,
    paddingLeft: 45,
    color: 'black',
    fontSize: 14,
  },

  bigCard: {
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 28,
    width: 290,
    height: 120,
    marginTop: 20,
  },
  bigCardSelected: {
    backgroundColor: 'rgba(28, 107, 164, 1)',
    borderRadius: 28,
    width: 280,
    height: 120,
    marginTop: 20,
  },
  bigCardTextSelected: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
  bigCardTextSelected2: {
    marginTop: 20,

    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardTextSelected3: {
    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardText: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 16,
    color: 'rgba(14, 16, 18, 1)',
  },
  bigCardText2: {
    marginTop: 20,
    color: 'rgba(12, 17, 21, 1)',

    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardText3: {
    color: 'rgba(97, 100, 103, 1)',

    fontFamily: 'NunitoSans_10pt-Medium',
    fontSize: 16,
  },
  dotIconSelected: {
    marginTop: 10,
    marginLeft: '40%',
  },
  dotIcon: {
    marginTop: 10,
    marginLeft: '18%',
    color: 'black',
  },
  dateValSelected: {
    fontFamily: 'NunitoSans_10pt-Bold',
    alignSelf: 'center',
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 20,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dateVal: {
    fontFamily: 'NunitoSans_10pt-Bold',
    alignSelf: 'center',
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 20,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dayValSelected: {
    fontFamily: 'NunitoSans_10pt-Medium',
    alignSelf: 'center',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 7,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dayVal: {
    fontFamily: 'NunitoSans_10pt-Medium',
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
    marginTop: 7,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  bgDateDaySelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    height: 100,
    width: 80,
    borderRadius: 31,
    marginTop: 10,
    marginRight: 20,
    marginLeft: -10,
  },
  bgDateDay: {
    backgroundColor: 'rgba(224, 159, 31, 1)',
    height: 100,
    width: 80,
    borderRadius: 31,
    marginTop: 10,
    marginRight: 20,
    marginLeft: -10,
  },
  btnShape: {
    height: 47,
    width: '95%',
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 12,
    backgroundColor: '#1C6BA4',
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 13,
    color: colors.white,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
  btnShape1: {
    height: 52,

    width: '90%',
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 10,
  },
  btnText1: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 13,
    color: 'black',
    fontFamily: 'NunitoSans_10pt-Medium',
  },
  TextInput1: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 28,
    height: 157,
    paddingLeft: 5,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  TextInputDoc: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: 'rgba(238, 246, 252, 1)',
    borderRadius: 18,
    elevation: 1,
    height: 56,
    paddingLeft: 50,
    paddingTop: 5,
    color: 'black',
    fontSize: 14,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '13%',
    marginHorizontal: 20,
    marginBottom: '10%',
    height: '10%',
    // borderRadius:20,
  },
  TextInputSetting: {
    alignSelf: 'center',
    width: '47%',
    // marginHorizontal:10,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 37,
    paddingLeft: 5,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  TextInputSetting2: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 97,
    paddingLeft: 5,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  image: {
    width: 130, // adjust as necessary
    height: 130, // adjust as necessary
    borderRadius: 130, // half of width and height to make it a circle
    marginTop: 20,
    alignContent: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 130, // same as the image width
    height: 130, // same as the image height
    borderRadius: 130, // to make it a circle
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 20,
    paddingTop: 10,
    marginBottom: 30,
  },
});
