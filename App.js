import 'react-native-gesture-handler';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/Navigation/Root';
import VideoCall1 from './src/Screens/Doctor/VideoCall1';
// import DocLogin from './src/Screens/DocLogin';
// import DocSignUp from './src/Screens/DocSignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor='black' /> 
       {/* <Root /> */}
      {/* <DocLogin/> */}
      <VideoCall1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
