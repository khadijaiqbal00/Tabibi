import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function DocLogin({navigation}) {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.text}>Welcome to </Text>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80',
            }}
            style={{
              height: 50,
              width: 220,
              marginTop: '5%',
              alignSelf: 'center',
            }}
          />
        </View>

        <View>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Enter your email"
            style={[styles.TextInput, {text: 'black'}]}></TextInput>
        </View>
        <View style={[styles.TextInput, {marginTop: '5%'}]}>
          <TextInput
            style={styles.text2}
            placeholderTextColor="grey"
            placeholder="Enter your password"
            secureTextEntry={true}></TextInput>
          <Animatable.View animation={'fadeInDown'} duration={400}>
            <MaterialIcons
              name="visibility-off"
              style={{
                color: 'grey',
                alignSelf: 'flex-end',
                marginRight: '5%',
                marginTop: -37,
              }}
              size={20}
            />
          </Animatable.View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.text3}> Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabNavigation');
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.bottomLine}>
          <Text style={styles.text4}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Docsignup');
            }}>
            <Text style={styles.text5}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    alignSelf: 'center',
    fontSize: 26,
    marginTop: '20%',
    color: "grey",
    fontWeight: '700',
  },
  TextInput: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    marginTop: '15%',
    height: 56,
    paddingLeft: 20,
    paddingTop: 5,
    fontFamily: 'Urbanist',
    color: 'black',
    fontWeight: '100',
    fontSize: 15,
  },
  text2: {
    fontFamily: 'Urbanist',
    color: '#8391A1',
    fontWeight: '100',
    fontSize: 15,
  },
  text3: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '2%',
    color: '#6A707C',
    fontFamily: 'Urbanist',
    fontWeight: '600',
  },
  btnShape: {
    backgroundColor: "black",
    height: 50,
    width: '80%',
    alignSelf: 'center',
    marginTop: '15%',
    borderRadius: 8,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    color: "white",
    fontWeight: '400',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '40%',
  },
  text4: {
    fontWeight: '500',
    color: '#1E232C',
    fontFamily: 'Urbanist',
    fontSize: 13,
  },
  text5: {
    fontWeight: '700',
    color: "black",
    marginLeft: 5,
    fontFamily: 'Urbanist',
    fontSize: 14,
  },
});
