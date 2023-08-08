
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Global/globalstyles';
import {Back, DoctorImg, Star, Clock} from '../../Assets/icons';
import {scheduleData} from '../../Global/Data';
import DocAppointment from '../../Components/DocAppointment';
const Appointment2 = () => {
  const [List, setList] = useState([{}]);
  useEffect(() => {
    console.log();
    setList(scheduleData);
    console.log('>>>', List);
  });
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
      <Back
        width={50}
        height={50}
        style={{marginTop: '5%', marginHorizontal: '5%'}}
      />
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
        <View style={{width: '85%', marginTop:10, }}>
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
      <View style={{width: '87%', alignSelf: 'center', marginTop:'12%'}}>
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
            navigation.navigate('VerifyCode');
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>CONNECT NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appointment2;

const styles = StyleSheet.create({
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
});

