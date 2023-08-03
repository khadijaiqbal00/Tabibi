import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import {activePaitentIcon} from '../Assets/TabSvgs';
const ScheduleCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(28, 107, 164, 1)',
        borderRadius: 28,
        width: '90%',
        height: 120,
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 60,
          width: '20%',
          borderRadius: 20,
          marginLeft: '5%',
          marginTop: 30,
        }}></View>
      <View style={{marginLeft: '6%', marginTop: '10%'}}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
          }}>
          09:30 AM
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 16,
          }}>
          Amani Maroof
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
          }}>
          Acnee Problem
        </Text>
      </View>
      <View>
        <SvgXml
          xml={dotsIcon}
          style={{marginTop: 10, marginLeft: '40%'}}></SvgXml>
      </View>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({});
