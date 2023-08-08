import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {LoginCheck} from '../../Assets/TabSvgs';
const LoginSuccessPatient = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
          marginVertical: '90%',
        }}>
        <SvgXml xml={LoginCheck}></SvgXml>
      </View>
    </View>
  );
};

export default LoginSuccessPatient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
