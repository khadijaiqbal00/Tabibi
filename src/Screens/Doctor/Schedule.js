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
import { Calendar } from '../../Assets/icons';


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
      <View style={{flexDirection:'row',marginTop: 30, justifyContent:'space-between', marginHorizontal:'5%'}}>
      <Text
        style={{
          
          fontSize: 27,
          color: 'rgba(14, 16, 18, 1)',
          fontFamily: 'NunitoSans_10pt-Bold',
        }}>
        Calender
      </Text>
        <Calendar style={{marginTop:5,}}/>
      </View>
     
      
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
