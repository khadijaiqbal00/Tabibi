import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
<<<<<<< HEAD
import {colors} from '../../Global/globalstyles';
import {
  Back2,
  Doctor2,
  Settings,
  Fb,
  Vector,
  Language,
  Compass,
  Log,
} from '../../Assets/icons';
=======
import {colors} from '../../global/globalstyles';
import {Back2, Doctor2, Settings,Fb,Vector, Language, Compass} from '../../Assets/icons';
>>>>>>> 7dacfc24e2ee510fa68ec34305e113e84d7eec2e
import ProfileComponent from '../../Components/ProfileComponent';


const DoctorProfile = () => {
  return (
    
    <View style={{flex: 1, backgroundColor: colors.pageBackground2}}>
      <Back2
        width={40}
        height={40}
        style={{marginTop: '10%', marginHorizontal: '5%'}}
      />

      <View style={{alignItems: 'center'}}>
        <Doctor2
          width={80}
          height={80}
          style={{
            marginTop: -30,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            marginTop: '2%',
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          Doctor Name
        </Text>
      </View>

      <View style={{marginTop: '15%'}}>
        <ProfileComponent title="Account Settings" svg={Settings} />
        <ProfileComponent title="Payment Method" svg={Vector} />
        <ProfileComponent title="Language Selection" svg={Language} />
        <ProfileComponent title="Pivacy Policy" svg={Compass} />
        <ProfileComponent title="Terms of use" svg={Compass} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '25%',
        }}>
        <Log width={25} height={25} />
        <Text
          style={{
            color: 'white',
            marginLeft: 10,
            fontSize: 17,
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          LogOut
        </Text>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({});
