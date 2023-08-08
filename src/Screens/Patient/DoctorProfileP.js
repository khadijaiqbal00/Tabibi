import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Back2, Star, DotsA, Doctor2, Tick, Clock} from '../../Assets/icons';
import {colors} from '../../Global/globalstyles';
const DoctorProfileP = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#DCEDF9'}}>
      <View style={{height: '20%', backgroundColor: '#1C6BA4'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '5%',
            justifyContent: 'space-between',
          }}>
          <Back2 width={35} height={35} style={{marginHorizontal: '5%'}} />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
              marginTop: '2%',
            }}>
            Details
          </Text>
          <DotsA width={35} height={35} style={{marginHorizontal: '5%'}} />
        </View>
      </View>
      <View
        style={{
          width: '86%',
          backgroundColor: 'white',
          height: '14%',
          elevation: 5,
          alignSelf: 'center',
          marginTop: -60,
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 10,
        }}>
        <Doctor2
          width={90}
          height={90}
          style={{
            marginTop: 10,
            marginHorizontal: '1%',
          }}
        />
        <View style={{width: '60%'}}>
          <Text
            style={{
              fontFamily: 'NunitoSans_10pt-Bold',
              fontSize: 19,
              marginTop: 10,
              color: 'rgba(14, 16, 18, 1)',
            }}>
            Dr. Chalukya Gunasekara.
          </Text>
          <Text
            style={{
              fontFamily: 'NunitoSans_6pt-Bold',
              fontSize: 14,
              color: 'rgba(74, 84, 94, 1)',
            }}>
            Dr. Chalukya Gunasekara.
          </Text>
        </View>

        <Tick
          width={30}
          height={30}
          style={{
            marginTop: '5%',
            // marginLeft: -10
          }}
        />
      </View>
      <View
        style={{
          width: '86%',
          height: '12%',

          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            backgroundColor: '#CEEBFE',
            width: '32%',
            marginHorizontal: 5,
            borderRadius: 20,
            padding: 20,
          }}>
          <Text
            style={{
              color: '#4A79FD',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Bold',
              alignSelf: 'center',
            }}>
            Patients
          </Text>
          <Text
            style={{
              color: '#253141',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
              alignSelf: 'center',
            }}>
            100+
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#CEEBFE',
            width: '32%',
            marginHorizontal: 5,
            borderRadius: 20,
            padding: 11,
            paddingVertical: 20,
          }}>
          <Text
            style={{
              color: '#4A79FD',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Bold',
              alignSelf: 'center',
            }}>
            Experience
          </Text>
          <Text
            style={{
              color: '#253141',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
              alignSelf: 'center',
            }}>
            29 ans
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#CEEBFE',
            width: '32%',
            marginHorizontal: 5,
            borderRadius: 20,
            padding: 20,
          }}>
          <Text
            style={{
              color: '#4A79FD',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Bold',
              alignSelf: 'center',
            }}>
            Rating
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#253141',
                fontSize: 18,
                fontFamily: 'NunitoSans_10pt-Bold',
                alignSelf: 'center',
              }}>
              4.93
            </Text>
            <Star
              width={17}
              height={17}
              style={{marginTop: '6%', marginLeft: 5}}
            />
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: '5%', marginTop: '10%'}}>
        <Text
          style={{
            color: '#0E1012',
            fontSize: 17,
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          About
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 5,
            color: '#4A545E',
            fontFamily: 'NunitoSans_7pt-Light',
          }}>
          MBBS, Ph.D., Fellow, International College of Surgeons. Ex-Professor &
          Head of Department.
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 9,
            color: '#4A545E',
            fontFamily: 'NunitoSans_7pt-Light',
          }}>
          Department of NeurosurgeryFaculty of Medicine.
        </Text>
      </View>

      <View style={{width: '87%', alignSelf: 'center', marginTop: '22%'}}>
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
          <View></View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('VerifyCode');
        }}
        style={styles.btnShape}>
        <Text style={styles.btnText}>Book a consultation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorProfileP;

const styles = StyleSheet.create({
  btnShape: {
    height: 47,
    width: '85%',
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
});
