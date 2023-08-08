import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Global/globalstyles';
import {Back, Star} from '../../Assets/icons';
import {SvgXml} from 'react-native-svg'
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import PatientCard from '../../Components/PatientCard';
import {DoctorData} from '../../Global/Data';
import DoctorCard from '../../Components/DoctorCard';

const DoctorSearch = () => {
    const [List, setList] = useState([{}]);
   useEffect(() => {
     console.log();
     setList(DoctorData);
     console.log('>>>', List);
   });
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
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
            fontSize: 27,
            fontFamily: 'NunitoSans_10pt-Bold',
            marginTop: '6%',
          }}>
          Doctors
        </Text>
      </View>
      <View style={{marginTop: '6%'}}>
        <TextInput
          placeholderTextColor={'rgba(138, 160, 188, 1)'}
          placeholder="Looking for a Doctor..."
          style={styles.TextInput}></TextInput>
        <SvgXml
          xml={searchIcon}
          style={{marginTop: -40, marginLeft: '10%'}}></SvgXml>
        <TouchableOpacity>
          <SvgXml
            xml={filterIcon}
            style={{marginTop: -22, marginLeft: '80%'}}></SvgXml>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text
          style={{
            marginLeft: '9%',
            fontSize: 17,
            marginTop: 30,
            color: 'rgba(14, 16, 18, 1)',
            fontFamily: 'NunitoSans_10pt-SemiBold',
          }}>
          Doctors
        </Text>
       
      </View>




      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text
          style={{
            marginLeft: '9%',
            fontSize: 17,
            marginTop: 30,
            color: 'rgba(14, 16, 18, 1)',
            fontFamily: 'NunitoSans_10pt-SemiBold',
          }}>
          List of Patients
        </Text>
        <Text
          style={{
            marginLeft: '9%',
            fontSize: 14,
            marginTop: 30,
            color: 'rgba(28, 107, 164, 1)',
            fontFamily: 'NunitoSans_10pt-Light',
          }}>
          See all
        </Text>
      </View>
      <FlatList
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        data={List}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DoctorCard
            id={item.id}
            image = {item.image}
            name = {item.name}
            designation={item.designation}
            review={item.review} 
            review2={item.review2}
          />
        )}
      />
    </View>
  );
};

export default DoctorSearch;

const styles = StyleSheet.create({
    TextInput: {
        alignSelf: 'center',
        width: '87%',
        backgroundColor: 'rgba(238, 246, 252, 1)',
        borderRadius: 18,
        elevation: 1,
        height: 56,
        paddingLeft: 50,
        paddingTop: 5,
        color: 'black',
        fontSize: 14,
        fontFamily: 'NunitoSans_10pt-Medium',
      },
});
