<<<<<<< HEAD
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
=======
import { StyleSheet, Text, View,FlatList,Pressable, TouchableOpacity } from 'react-native'
import React , {useState,useEffect}from 'react'
import { colors } from '../../Global/globalstyles';
import {Back, Star} from '../../Assets/icons';
import { backCalender } from '../../Assets/TabSvgs';
import { forwardCalender } from '../../Assets/TabSvgs';
import {SvgXml} from 'react-native-svg';
import { TimeData } from '../../Global/Data';


import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: [],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';
const Appointment2 = () => {
    const [selected, setSelected] = useState('');

    const [indexCheck, setIndexCheck] = useState('0');

    const [List, setList] = useState([{}]);

    useEffect(() => {
      console.log();
      setList(TimeData);
    });
  return (
    <View style={styles.Container}>
      <View style={{flexDirection: 'row'}}>
        <Back
          width={45}
          height={46}
          style={{marginTop: '5%', marginHorizontal: '5%'}}
        />
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'NunitoSans_10pt-Bold',
            marginTop: '8%',
            marginLeft: '13%',
          }}>
          Appointment
        </Text>
      </View>
      {/* <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <SvgXml xml={backCalender} style={{marginTop: 40}}></SvgXml>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 34,
            fontFamily: 'NunitoSans_10pt-Bold',
            marginTop: '8%',
            marginLeft: '15%',
            marginRight: '15%',
          }}>
          Mars
        </Text>
        <SvgXml xml={forwardCalender} style={{marginTop: 40}}></SvgXml>
      </View> */}

      <Calendar
        enableSwipeMonths
        style={{
          height: 340,
          width: 320,
          alignSelf: 'center',
          backgroundColor: 'transparent',
        }}
        theme={{
          monthTextColor: 'black',
          textMonthFontSize: 30,
          arrowColor: 'rgba(74, 84, 94, 1)',
          calendarBackground: 'transparent',
          dayTextColor: 'rgba(14, 16, 18, 1)',
          textInactiveColor: 'green',
          textDayFontSize: 17,
          textDayFontWeight: 'bold',
          textDisabledColor: 'rgba(14, 16, 18, 1)',
          dotColor: 'red',
          textSectionTitleColor: 'transparent',
          todayTextColor: 'white',
          todayBackgroundColor: 'rgba(28, 107, 164, 1)',
          todayDotColor:"white",
          selectedDayBackgroundColor: 'red',
        }}
        markedDates={{
          [selected]: {
            selected: true,
            selectedTextColor: 'red',
          },
        }}
      />

      <View
        style={{
          backgroundColor: 'rgba(28, 107, 164, 1)',
          height: '100%',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            marginLeft: 10,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 24,
              marginTop: 10,
              marginLeft: 10,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            Time
          </Text>

          <View style={{height: 200}}>
            <FlatList
              numColumns={3}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={true}
              alwaysBounceVertical
              data={List}
              extraData={indexCheck}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id);
                  }}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: 'space-between',
                      marginLeft: 12,
                    }}>
                    <View
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardSelected}
                          : {...styles.smallCard}
                      }>
                      <View>
                        <Text
                          style={
                            indexCheck === item.id
                              ? {...styles.smallCardTextSelected}
                              : {...styles.smallCardText}
                          }>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 50,
              width: '87%',
              borderRadius: 14,
              marginRight: 11,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(28, 107, 164, 1)',
                fontSize: 17,
                marginTop: 12,
                marginLeft: 10,
                fontFamily: 'NunitoSans_10pt-Medium',
              }}>
              Confirm Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Appointment2

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  smallCard: {
    borderColor: 'rgba(190, 202, 218, 1)',
    borderWidth: 1,
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  smallCardText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 6,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
  smallCardSelected: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  smallCardTextSelected: {
    color: 'rgba(28, 107, 164, 1)',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 6,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
});
>>>>>>> bc8b31ca69ec2476841b248e709166c813cc092f
