import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  Modal,
  TouchableHighlight,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Global/globalstyles';
import {SvgXml} from 'react-native-svg';
import {PharmacyIcon} from '../../Assets/PharmacyComp';
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import {userIcon} from '../../Assets/PharmacyComp';
import {reportIcon} from '../../Assets/PharmacyComp';
import AppointmentCard from '../../Components/AppointmentCard';
import {dotsIcon} from '../../Assets/TabSvgs';
import {appointmentData} from '../../Global/Data';
import {useIsFocused} from '@react-navigation/native';
import {backbgWhiteIcon} from '../../Assets/TabSvgs';
import {locationIcon} from '../../Assets/TabSvgs';
import {pharmacyData} from '../../Global/Data';
import PharmacyCard from '../../Components/PharmacyCard';
import {fileIcon} from '../../Assets/TabSvgs';
import {sendZipIcon} from '../../Assets/TabSvgs';
// import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [List2, setList2] = useState([{}]);

  const [indexCheck2, setIndexCheck2] = useState('0');

  const isfocussed = useIsFocused();
  const [List, setList] = useState([{}]);
  useEffect(() => {
    console.log();
    setList(appointmentData);
    setList2(pharmacyData);
    console.log('>>>', List);
  });

  return (
    <View style={styles.Container}>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View
          style={{
            backgroundColor: 'rgba(220, 237, 249, 1)',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(220, 237, 249, 1)',
              height: 85,
              width: '100%',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              flexDirection: 'row',
              zIndex: 1,
            }}>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <SvgXml
                xml={backbgWhiteIcon}
                style={{marginTop: 20, marginLeft: '10%'}}></SvgXml>
            </TouchableHighlight>
            <SvgXml
              xml={locationIcon}
              style={{marginTop: 30, marginLeft: '10%'}}></SvgXml>

            <View>
              <Text
                style={{
                  color: 'black',
                  marginTop: 30,
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'NunitoSans_10pt-Light',
                }}>
                Name Patient
              </Text>
            </View>
          </View>

          {/* Below portion */}
          <View>
            <Text
              style={{
                marginTop: 20,
                alignSelf: 'center',
                fontFamily: 'NunitoSans_10pt-Bold',
                fontSize: 17,
                color: 'rgba(14, 16, 18, 1)',
              }}>
              Nearby pharmacies
            </Text>

            <FlatList
              horizontal
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              data={List2}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <PharmacyCard
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    distance={item.distance}
                    review={item.review}
                    total_reviews={item.total_reviews}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <Text
            style={{
              fontFamily: 'NunitoSans_10pt-Bold',
              alignSelf: 'center',
              fontSize: 24,
              color: 'rgba(14, 16, 18, 1)',
              marginTop: 7,
            }}>
            Send Prescription
          </Text>
          <Text
            style={{
              fontFamily: 'NunitoSans_10pt-Light',
              textAlign: 'center',
              marginTop: 10,
              width: '75%',
              alignSelf: 'center',

              fontSize: 14,
              color: 'rgba(74, 84, 94, 1)',
            }}>
            We will show the pharmacies that have all the medicines you are
            looking for
          </Text>
          <View
            style={{
              marginTop: 40,
              width: '75%',
              alignSelf: 'center',
              height: 170,
              fontSize: 14,
              borderRadius: 24,
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '75%',
                marginLeft: 35,
                marginTop: 5,
              }}>
              <View
                style={{
                  marginTop: 30,
                  width: 80,
                  height: 80,
                  fontSize: 14,
                  borderRadius: 24,
                  backgroundColor: 'rgba(107, 134, 179, 0.25)',
                }}>
                <SvgXml
                  xml={fileIcon}
                  style={{marginTop: 25, marginLeft: '35%'}}></SvgXml>
              </View>

              <View
                style={{
                  marginTop: 30,
                  width: 80,
                  height: 80,
                  fontSize: 14,
                  borderRadius: 24,
                  backgroundColor: 'rgba(107, 134, 179, 0.25)',
                }}>
                <SvgXml
                  xml={sendZipIcon}
                  style={{marginTop: 25, marginLeft: '35%'}}></SvgXml>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '65%',
                marginLeft: 40,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'NunitoSans_10pt-Light',
                  color: 'rgba(14, 16, 18, 1)',
                }}>
                Share Link
              </Text>
              <Text
                style={{
                  fontFamily: 'NunitoSans_10pt-Light',
                  color: 'rgba(14, 16, 18, 1)',
                }}>
                Send
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 80}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Image
            style={{height: 50, width: 50, borderRadius: 50, marginTop: '5%'}}
            source={{
              uri: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
            }}></Image>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 40,
              width: '40%',
              marginLeft: 20,
              borderRadius: 21,
              marginTop: '7%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12,
                alignSelf: 'center',
                marginLeft: '15%',
                fontFamily: 'NunitoSans_10pt-Bold',
              }}>
              Add your Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: '6%'}}>
        <TextInput
          placeholderTextColor={'rgba(138, 160, 188, 1)'}
          placeholder="Medical Research..."
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
          justifyContent: 'space-betweens',
          width: '100%',
          marginLeft: '10%',
          marginTop: '15%',
        }}>
        <TouchableOpacity style={[styles.View1, {marginRight: '5%'}]}>
          <SvgXml
            xml={userIcon}
            style={{marginLeft: -10, marginTop: 5}}></SvgXml>
          <Text
            style={{
              color: 'rgba(40, 96, 143, 1)',
              marginTop: '6%',
              alignSelf: 'center',
              marginLeft: '20%',
              width: 120,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Patients
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.View1, {marginRight: '10%'}]}>
          <SvgXml style={{marginLeft: -10}} xml={reportIcon}></SvgXml>
          <Text
            style={{
              color: 'rgba(255, 63, 109, 1)',
              marginTop: '10%',
              alignSelf: 'center',
              marginLeft: '20%',
              width: 120,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Reports
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgXml
          style={{alignSelf: 'center', marginTop: 10}}
          xml={PharmacyIcon}></SvgXml>
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: '9%',
          fontSize: 17,
          color: 'rgba(28, 107, 164, 1)',
          fontFamily: 'NunitoSans_10pt-SemiBold',
        }}>
        Upcoming appointment
      </Text>
      {/* <ScrollView>
      {List.map(item => (
        <AppointmentCard
          id={item.id}
          date={item.date}
          day={item.day}
          time={item.time}
          name={item.name}
          disease={item.disease}
        />
      ))}
    </ScrollView> */}

      <FlatList
        horizontal
        data={List}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              setIndexCheck2(item.id);
            }}>
            <View style={{marginLeft: 20}}>
              <View
                style={
                  indexCheck2 === item.id
                    ? {...styles.bigCardSelected}
                    : {...styles.bigCard}
                }>
                <View style={{marginLeft: 30, flexDirection: 'row'}}>
                  <View
                    style={
                      indexCheck2 === item.id
                        ? {...styles.bgDateDaySelected}
                        : {...styles.bgDateDay}
                    }>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dateValSelected}
                          : {...styles.dateVal}
                      }>
                      {item.date}
                    </Text>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dayValSelected}
                          : {...styles.dayVal}
                      }>
                      {item.day}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.bigCardTextSelected2}
                          : {...styles.bigCardText2}
                      }>
                      {item.time}
                    </Text>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.bigCardTextSelected}
                          : {...styles.bigCardText}
                      }>
                      {item.name}
                    </Text>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.bigCardTextSelected3}
                          : {...styles.bigCardText3}
                      }>
                      {item.disease}
                    </Text>
                  </View>
                  <View>
                    <SvgXml
                      xml={dotsIcon}
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dotIconSelected}
                          : {...styles.dotIcon}
                      }></SvgXml>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
          // <AppointmentCard
          //   id={item.id}
          //   date={item.date}
          //   day={item.day}
          //   time={item.time}
          //   name={item.name}
          //   disease={item.disease}
          // />
        )}
      />
    </View>
  );
};

export default Home;

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

  bigCard: {
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 28,
    width: 290,
    height: 120,
    marginTop: 20,
  },
  bigCardSelected: {
    backgroundColor: 'rgba(28, 107, 164, 1)',
    borderRadius: 28,
    width: 280,
    height: 120,
    marginTop: 20,
  },
  bigCardTextSelected: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
  bigCardTextSelected2: {
    marginTop: 20,

    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardTextSelected3: {
    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardText: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 16,
    color: 'rgba(14, 16, 18, 1)',
  },
  bigCardText2: {
    marginTop: 20,
    color: 'rgba(12, 17, 21, 1)',

    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardText3: {
    color: 'rgba(97, 100, 103, 1)',

    fontFamily: 'NunitoSans_10pt-Medium',
    fontSize: 16,
  },
  dotIconSelected: {
    marginTop: 10,
    marginLeft: 25,
  },
  dotIcon: {
    marginTop: 10,
    marginLeft: '18%',
    color: 'black',
  },
  dateValSelected: {
    fontFamily: 'NunitoSans_10pt-Bold',
    alignSelf: 'center',
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 20,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dateVal: {
    fontFamily: 'NunitoSans_10pt-Bold',
    alignSelf: 'center',
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 20,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dayValSelected: {
    fontFamily: 'NunitoSans_10pt-Medium',
    alignSelf: 'center',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 7,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dayVal: {
    fontFamily: 'NunitoSans_10pt-Medium',
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
    marginTop: 7,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  bgDateDaySelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    height: 100,
    width: 80,
    borderRadius: 31,
    marginTop: 10,
    marginRight: 20,
    marginLeft: -10,
  },
  bgDateDay: {
    backgroundColor: 'rgba(224, 159, 31, 1)',
    height: 100,
    width: 80,
    borderRadius: 31,
    marginTop: 10,
    marginRight: 20,
    marginLeft: -10,
  },
});
