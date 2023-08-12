import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../../Global/globalstyles';
import { backTransparentIcon, dotTransparentIcon, verifiedDocIcon, ratingStarIcon ,availabilityIcon} from '../../Assets/TabSvgs';
import { SvgXml} from 'react-native-svg';


export default function DoctorDetails() {
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 170,
          width: '100%',
          backgroundColor: 'rgba(28, 107, 164, 1)',
        }}>
        <SvgXml
          xml={backTransparentIcon}
          style={{marginLeft: 20, marginTop: 20}}></SvgXml>
        <Text
          style={{
            marginTop: 30,
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            fontFamily: 'NunitoSans_10pt-Medium',
          }}>
          Details
        </Text>
        <SvgXml
          xml={dotTransparentIcon}
          style={{marginRight: 20, marginTop: 20}}></SvgXml>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 130,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 30,
          marginTop: -65,
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            marginVertical: 25,
            marginLeft: 20,
          }}></Image>

        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 17,
              width: 120,
              marginTop: 30,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            Dr Chalukya Gunasekara
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'rgba(74, 84, 94, 1)',
              fontSize: 10,
              marginTop: 10,
              marginLeft: 10,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            Dermatologue in Asiri Hospital
          </Text>
        </View>
        <SvgXml
          xml={verifiedDocIcon}
          style={{marginLeft: -10, marginTop: 20}}></SvgXml>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(206, 235, 254, 1)',
            height: 100,
            width: 100,
            borderRadius: 24,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Patients
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'rgba(37, 49, 65, 1)',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            100+
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(206, 235, 254, 1)',
            height: 100,
            width: 100,
            borderRadius: 24,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Experience
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'rgba(37, 49, 65, 1)',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            29 ans
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(206, 235, 254, 1)',
            height: 100,
            width: 100,
            borderRadius: 24,
          }}>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'rgba(74, 121, 253, 1)',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Rating
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 20,
                textAlign: 'center',
                color: 'rgba(37, 49, 65, 1)',
                fontSize: 18,
                fontFamily: 'NunitoSans_10pt-Bold',
              }}>
              100+
            </Text>
            <SvgXml
              xml={ratingStarIcon}
              style={{marginLeft: 5, marginTop: 15}}></SvgXml>
          </View>
        </View>
      </View>

      <Text
        style={{
          marginTop: 20,
          marginLeft: 20,
          color: 'black',
          fontSize: 16,
          fontFamily: 'NunitoSans_10pt-Bold',
        }}>
        About
      </Text>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 20,
          color: 'rgba(74, 84, 94, 1)',
          fontSize: 14,
          fontFamily: 'NunitoSans_10pt-Light',
        }}>
        MBBS, Ph.D., Fellow, International College of Surgeons. Ex-Professor &
        Head of Department Department of NeurosurgeryFaculty of Medicine.
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          height: 100,
          width: '85%',
          alignSelf: 'center',
          borderRadius: 24,
          marginTop: 40,
          flexDirection: 'row',
        }}>
        <SvgXml
          xml={availabilityIcon}
          style={{marginLeft: 20, marginTop: 20}}></SvgXml>

        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: 'black',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt-Light',
            }}>
            Availability
          </Text>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 20,
              color: 'black',
              fontSize: 17,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            6h - 17h
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(28, 107, 164, 1)',
          height: 70,
          width: '85%',
          alignSelf: 'center',
          borderRadius: 14,
          marginTop: 30,
        }}>
        <Text
          style={{
            marginTop: 23,
            marginLeft: 20,
            color: 'white',
            textAlign:"center",
            fontSize: 16,
            fontFamily: 'NunitoSans_10pt-Medium',
          }}>
          Book a consultation
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 
});