import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SvgXml} from 'react-native-svg';
import { dotsIcon } from '../Assets/TabSvgs';
const AppointmentCard = ({id,date, day ,time ,name , disease}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(28, 107, 164, 1)',
        borderRadius: 28,
        width: '75%',
        height: 120,
        marginLeft: '10%',
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.14)',
          height: 100,
          width: 80,
          borderRadius: 31,
          marginLeft: '5%',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            alignSelf: 'center',
            fontSize: 22,
            marginTop: 20,
          }}>
          {date}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Medium',
            alignSelf: 'center',
            fontSize: 16,
          }}>
          {day}
        </Text>
      </View>
      <View style = {{marginLeft:"6%", marginTop:"10%"}}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
          }}>
          {time}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 16,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
          }}>
          {disease}
        </Text>
      </View>
      <View>
        <SvgXml
          xml={dotsIcon}
          style={{marginTop: 10, marginLeft: '20%'}}></SvgXml>
      </View>
    </View>
  );
}

export default AppointmentCard

const styles = StyleSheet.create({})