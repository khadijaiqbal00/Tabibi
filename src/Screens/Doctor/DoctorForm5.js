import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { Done } from '../../Assets/icons';
import {Chip, IconButton, TextInput} from 'react-native-paper';
import {colors} from '../../Global/globalstyles';
import {Camera, Gallery, ProfileImage, CrossIcon} from '../../Assets/icons';
import ImageCropPicker from 'react-native-image-crop-picker';
const DoctorForm5 = ({navigation}) => {
    const [image, setImage] = useState(null);

    const chooseImage = () => {
      ImageCropPicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      })
        .then(image => {
          console.log(image);
          const source = {uri: image.path};
          setImage(source);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const openCamera = () => {
      ImageCropPicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
      })
        .then(image => {
          const source = {uri: image.path};
          setImage(source);
        })
        .catch(error => {
          console.log(error);
        });
    };
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
         <IconButton
        icon="chevron-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
        <View style={{alignItems:'center', marginTop:20, marginHorizontal:10 }}>
        <Done />
        <Text style={styles.subText}>
        We offer doctors the option to display their medical certifications on their profiles. This boosts trust and credibility.
      </Text>
      <View style={styles.line} />
      <Text style={styles.Label}>Please send a copy of your medical certificate and wait for approval.   </Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop:50,}}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Camera width={40} height={40} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={chooseImage}>
          <Gallery width={40} height={40} />
        </TouchableOpacity>
      </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity
          style={{
            padding: 20,
            marginHorizontal: 10,
            borderRadius: 17,
            alignItems: 'center',
            width: '27%',
          }}
          onPress={openCamera}>
          <Text>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 20,
            marginHorizontal: 10,
            borderRadius: 17,
            alignItems: 'center',
            width: '27%',
          }}
          onPress={chooseImage}>
          <Text>Gallery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomLine}>
        <Text style={styles.text4}>Already have an account!</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LogInPatient');
          }}>
          <Text style={styles.text5}>Login</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  )
}

export default DoctorForm5

const styles = StyleSheet.create({
    bottomLine: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '25%',
      },
      text4: {
        fontWeight: '500',
        color: 'rgba(117, 127, 142, 1)',
        fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
        fontSize: 13,
      },
      text5: {
        color: 'rgba(0, 96, 247, 1)',
        marginLeft: 5,
        fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
        fontSize: 14,
      },
    button: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 17,
        alignItems: 'center',
        width: '27%',
        elevation: 6,
      },
    Label: {
        fontSize: 20,
        marginTop: 34,
        width: '80%',
        color: '#1A4563',
        fontWeight: '700',
        marginLeft: '7%',
        alignSelf: 'center',
        textAlign: 'center',
      },
    subText: {
        fontSize: 12,
        marginTop: 7,
        marginBottom: 5,
        width: '82%',
        color: '#1A4563',
        fontFamily: 'NunitoSans_5pt_SemiCondensed-Black',
        alignSelf: 'center',
        textAlign: 'center',
      },
      line: {
        height: 1,
        width: '80%',
        alignSelf: 'center',
        marginVertical: 8,
        backgroundColor: '#1A4563',
      },
})