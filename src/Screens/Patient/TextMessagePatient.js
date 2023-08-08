import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {bacbggreay} from '../../Assets/TabSvgs';


import {callIcon, linkSvgIcon, sendSvgIcon} from '../../Assets/TabSvgs';
import {videBg} from '../../Assets/TabSvgs';
import {videoIcon} from '../../Assets/TabSvgs';
const TextMessagePatient = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'rgba(220, 237, 249, 1)',
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            height: 85,
            width: '100%',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            flexDirection: 'row',
            zIndex: 1,
          }}>
          <TouchableHighlight
            onPress={() => {
              navigation.goBack();
            }}>
            <SvgXml
              xml={bacbggreay}
              style={{marginTop: 20, marginLeft: '7%'}}></SvgXml>
          </TouchableHighlight>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                color: 'black',
                marginTop: 15,
                fontSize: 16,
                borderRadius: 100,
                height: 50,
                width: 50,
                fontFamily: 'NunitoSans_10pt-Light',
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              }}
            />

            <View style={{marginRight: 40, marginLeft: 20}}>
              <Text
                style={{
                  color: 'black',
                  marginTop: 20,
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'NunitoSans_10pt-Bold',
                }}>
                Name
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    marginLeft: 10,
                    fontSize: 13,
                    fontFamily: 'NunitoSans_10pt-Light',
                  }}>
                  En ligne
                </Text>
                <View
                  style={{
                    marginLeft: 5,
                    height: 6,
                    width: 6,
                    marginTop: 6,
                    backgroundColor: 'rgba(39, 174, 96, 1)',
                    borderRadius: 100,
                  }}></View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VoiceCallPatient');
              }}>
              <SvgXml xml={callIcon} style={{marginTop: 20}}></SvgXml>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VideoCallPatient');
              }}
              style={{marginLeft: 10}}>
              <SvgXml xml={videBg} style={{marginTop: 20}}></SvgXml>
              <SvgXml
                xml={videoIcon}
                style={{marginLeft: 13, marginTop: -28}}></SvgXml>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'transparent',
            height: '20%',
            width: '90%',
            alignSelf: 'center',
          }}>
          <KeyboardAvoidingView>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '182%',
                backgroundColor: 'white',
                borderRadius: 12,
                height: 60,
              }}>
              <SvgXml
                xml={linkSvgIcon}
                style={{marginTop: 20, marginLeft: '5%'}}></SvgXml>
             
                <TextInput
                  placeholder="Enter message.."
                  style={{
                    paddingLeft: 20,
                    marginRight: 30,
                    color: 'black',
                    fontSize: 17,
                    fontFamily: 'NunitoSans_10pt-Medium',
                  }}
                  placeholderTextColor={'rgba(25, 52, 105, 0.6)'}></TextInput>
              

              <SvgXml
                xml={sendSvgIcon}
                style={{marginTop: 8, marginLeft: '17%'}}></SvgXml>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

export default TextMessagePatient;

const styles = StyleSheet.create({
    key : {
        flex : 3
    }
});
