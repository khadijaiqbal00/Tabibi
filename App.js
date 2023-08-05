import 'react-native-gesture-handler';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/Navigation/Root';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor='black' /> 
       <Root />
<<<<<<< HEAD
      {/* <DocLogin/>
      <VideoCall1/> */}
=======
      
>>>>>>> 906bf1363ec7423a14d648b4b769965af26087ae
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
