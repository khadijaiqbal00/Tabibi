import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../global/globalstyles';
import {Back2, Doctor2, Settings,Fb,Vector, Language, Compass} from '../../Assets/icons';
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

      <View style={{marginTop:'15%'}}>
        <ProfileComponent title="Account Settings" iconName="Settings" svg={Settings} />
        <ProfileComponent title="Payment Method" iconName="FireIcon" svg={Vector} />
        <ProfileComponent title="Language Selection" iconName="FireIcon" svg={Language} />

        <ProfileComponent title="Pivacy Policy" iconName="Vector" svg={Compass} />

        <ProfileComponent title="Terms of use" iconName="Vector" svg={Compass} />

      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({});
