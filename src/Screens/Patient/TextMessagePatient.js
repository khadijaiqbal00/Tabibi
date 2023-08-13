

import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet, TouchableHighlight } from 'react-native';
import { RTCPeerConnection, mediaDevices } from 'react-native-webrtc';
import { SvgXml } from 'react-native-svg';
import { bacbggreay, callIcon, linkSvgIcon, sendSvgIcon, videBg, videoIcon } from '../../Assets/TabSvgs';
 
const TextMessagePatient = ({navigation}) => {
  const [isCalling, setIsCalling] = useState(false);
  const [isCallAccepted, setIsCallAccepted] = useState(false);
  const localStream = useRef(null);
  const remoteStream = useRef(null);
  const peerConnection = useRef(null);

  const handleCallButton = async () => {
    try {
      setIsCalling(true);

      localStream.current = await mediaDevices.getUserMedia({ audio: true, video: true });
      peerConnection.current.ontrack = (event) => {
        remoteStream.current = event.streams[0];
        setIsCallAccepted(true); // Automatically accept the call when the remote stream arrives
        // Update the UI to display the remote stream
      };
      peerConnection.current = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      });

      localStream.current.getTracks().forEach((track) => {
        peerConnection.current.addTrack(track, localStream.current);
      });

      peerConnection.current.ontrack = (event) => {
        remoteStream.current = event.streams[0];
        // Handle remote stream, e.g., display in a video element
        setIsCallAccepted(true); // Automatically accept the call when the remote stream arrives
      };

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      // Send offer to the other user
    } catch (error) {
      console.error('Error creating offer:', error);
    }
  };

  const handleHangUp = () => {
    setIsCalling(false);
    setIsCallAccepted(false);
    peerConnection.current.close();
    remoteStream.current = null;
    // Perform any additional cleanup, state updates, etc.
  };
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
            onPress={handleCallButton}
              // onPress={() => {
              //   navigation.navigate('VoiceCallPatient');
              // }}
              >
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
      {remoteStream.current && (
        <RTCView
          streamURL={remoteStream.current?.toURL()}
          style={{ width: 200, height: 150 }}
        />
      )}
    </View>
  );
};

export default TextMessagePatient;

const styles = StyleSheet.create({
    key : {
        flex : 3
    }
});
