import 'react-native-gesture-handler';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/Navigation/Root';
import DocLogin from './src/Screens/DocLogin';
import DocSignUp from './src/Screens/DocSignUp';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      {/* <StatusBar barStyle={'light-content'} backgroundColor='black' /> */}
      <Root />
      {/* <DocLogin/> */}
      {/* <DocSignUp/> */}
=======
      <StatusBar barStyle={'light-content'} backgroundColor='black' /> 
       <Root />
      {/* <DocLogin/> */}
>>>>>>> 74e5b92236e6a65e37b43fcc1417fdfd6f62bb88
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
