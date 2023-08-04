import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,Pressable,
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
   const [indexCheck, setIndexCheck] = useState('0');

   useEffect(() => {
     console.log();
     setList(scheduleData);
     setList2(CalenderData);

     console.log('>>>', List);
   });
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
          marginHorizontal: '5%',
        }}>
        <Text
          style={{
            fontSize: 27,
            color: 'rgba(14, 16, 18, 1)',
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          Calender
        </Text>
        <Calendar style={{marginTop: 5}} />
      </View>

      <View style={{marginLeft: 10}}>
        <FlatList
          horizontal
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          data={List2}
          extraData={indexCheck}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            // <CalenderCard id={item.id} day={item.day} date={item.date} />
            <Pressable
              onPress={() => {
                setIndexCheck(item.id);
              }}>
              
              <View
                style={
                  indexCheck === item.id
                    ? {...styles.smallCardSelected}
                    : {...styles.smallCard}
                }>
               
                <View>
                  <Text
                    style={
                      indexCheck === item.id
                        ? {...styles.smallCardTextSelectedDate}
                        : {...styles.smallCardTextDate}
                    }>
                    {item.date}
                  </Text>
                </View>
                <View>
                  <Text
                    style={
                      indexCheck === item.id
                        ? {...styles.smallCardTextSelected}
                        : {...styles.smallCardText}
                    }>
                    {item.day}
                  </Text>
                </View>
              </View>
            </Pressable>
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
  smallCard: {
    borderRadius: 31,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    width: 85,
    marginLeft:10,    
    height: 100,
    marginTop:10,
  },
  smallCardSelected: {
    borderRadius: 31,
    justifyContent: 'center',
    backgroundColor: 'rgba(28, 107, 164, 1)',
    alignItems: 'center',
    width: 85,
    marginTop:10,
    height: 100,
    marginLeft:10,
  },
  smallCardTextSelected: {
    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 7,
  },
  smallCardTextSelectedDate: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 21,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 7,
  },
  smallCardText: {
    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 18,
    color: 'rgba(28, 107, 164, 1)',
    marginBottom: 7,
  },
  smallCardTextDate: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 21,
    color: 'rgba(28, 107, 164, 1)',
    marginBottom: 7,
  },
});
