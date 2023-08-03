import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import React,{useEffect,useState} from 'react';
import {colors} from '../../Global/globalstyles';
import {SvgXml} from 'react-native-svg';
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import ScheduleCard from '../../Components/ScheduleCard';
import CalenderCard from '../../Components/CalenderCard';
import { scheduleData } from '../../Global/Data';
import { CalenderData } from '../../Global/Data';

const Schedule = () => {
   const [List, setList] = useState([{}]);
   const [List2, setList2] = useState([{}]);
   useEffect(() => {
     console.log();
     setList(scheduleData);
     setList2(CalenderData);

     console.log('>>>', List);
   });
  return (
    <View style={styles.Container}>
      <Text
        style={{
          marginLeft: '10%',
          fontSize: 17,
          marginTop: 30,
          color: 'rgba(14, 16, 18, 1)',
          fontFamily: 'NunitoSans_10pt-Bold',
        }}>
        Calender
      </Text>
      <View>
        <FlatList
          // horizontal = {true}
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          data={List2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CalenderCard id={item.id} day={item.day} date={item.date} />
          )}
        />
      </View>
      <View style={{flexDirection: 'row', marginLeft: '5%'}}></View>

      <View style={{marginTop: '6%'}}>
        <TextInput
          placeholderTextColor={'rgba(138, 160, 188, 1)'}
          placeholder="Looking for a doctor..."
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
          <ScheduleCard
            id={item.id}
            image={item.image}
            name={item.name}
            time={item.time}
            symptom={item.symptom}
          />
        )}
      />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
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
  View1: {
    alignSelf: 'center',
    width: '39%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    elevation: 1,
    height: 104,
    paddingLeft: 45,
    color: 'black',
    fontSize: 14,
  },
});
