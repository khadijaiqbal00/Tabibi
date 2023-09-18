import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Global/globalstyles';
import {Back, Star} from '../../Assets/icons';
import {SvgXml} from 'react-native-svg';
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import {Emergency} from '../../Assets/icons';
import DoctorCard from '../../Components/DoctorCard';
import OnlineDoctorCard from '../../Components/OnlineDoctorCard';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
let id = '';
const DoctorSearch = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [List4, setList4] = useState([{}]);
  const getDoctors = async () => {
    id = await AsyncStorage.getItem('USERID');
    let tempData = [];
    const email = await AsyncStorage.getItem('EMAIL');
    firestore()
      .collection('doctors')
      // .where("email","!=",email)
      .onSnapshot(snapshot => {
        if (snapshot.docs != []) {
          snapshot.docs.map(doc => {
            tempData.push(doc.data());
          });
        }
        setList4(tempData);

        // console.log(doctorsData);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
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

        <Emergency
          width={200}
          height={100}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <View style={{marginTop: -10}}>
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
          color: '#1C6BA4',
          fontFamily: 'NunitoSans_10pt-SemiBold',
        }}>
        Popular Doctors
      </Text>

      <FlatList
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        data={List4}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DoctorDetails', {Doc: item, id: id});
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Back
                  width={45}
                  height={46}
                  style={{marginHorizontal: 18, marginTop: 18}}
                />
              </TouchableOpacity>

              <Emergency width={200} height={100} />
            </View>

            <Text style={{color: '#FF3F6D', fontSize: 15}}>
              Searching for a generalist doctor...
            </Text>
            <View style={{marginTop: 35}}>
              <ActivityIndicator size={70} color="#FF3F6D" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DoctorSearch;

const styles = StyleSheet.create({
  modalView: {
    // margin: 20,
    backgroundColor: '#f5f7fa',
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
    height: '35%',
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
});
