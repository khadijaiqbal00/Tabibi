import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import { activePaitentIcon } from '../Assets/TabSvgs';
const PatientCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 28,
        width: '90%',
        height: 120,
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 100,
          width: '30%',
          borderRadius: 31,
          marginLeft: '5%',
          marginTop: 10,
        }}>
        <SvgXml
          xml={activePaitentIcon}
          style={{marginTop: -1, marginLeft: '80%'}}></SvgXml>
      </View>
      <View
        style={{
          marginLeft: '6%',
          marginTop: '10%',
          alignContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 16,
            color: 'rgba(14, 16, 18, 1)',
          }}>
          Name
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Medium',
            fontSize: 14,
            marginTop: 20,
            color: 'background: rgba(74, 121, 253, 1);',
          }}>
          Any random description
        </Text>
      </View>
    </View>
  );
};

export default PatientCard;

const styles = StyleSheet.create({});
