import {StyleSheet, Text, View, Switch} from 'react-native';
import {useState} from 'react';
import {Doctor2} from '../Assets/icons';
const width_proportion = '80%';
const height_proportion = '20%';

export default function PaymentComponent(props) {
  return (
    <View style={styles.row1}>
      
      <View style={styles.textPart}>
        <Text style={styles.text3}>{props.title}</Text>
     
      </View>
      <View style={styles.icon}>
        {props.svg ? <props.svg height={23} /> : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row1: {
    elevation:10, 
    marginTop: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '83%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
  },
  icon: {
    paddingTop: 5,
    width: 25,
    marginLeft:17, 
    marginHorizontal:'7%'  },
  textPart: {
    fontSize:14, 
    width: width_proportion,
    marginLeft: 15,
  },
  text3: {
    fontSize: 15,
    color: 'black',
    marginTop: 6,
    fontFamily: 'NunitoSans_10pt-Bold',
    
  },
   

});
