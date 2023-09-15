import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Chip, IconButton, TextInput} from 'react-native-paper';
import {Camera, Gallery, ProfileImage, CrossIcon} from '../../Assets/icons';
import {colors} from '../../Global/globalstyles';

export default function PatientForm3({navigation}) {
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
    <View style={styles.Container}>
      <IconButton
        icon="chevron-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>Create a new account</Text>
      <Text style={styles.subText}>
        Please fill in the information below to create your new account.
      </Text>
      {image ? (
        <View style={styles.profileImageContainer}>
          <Image source={image} style={styles.image} />
          <CrossIcon
            size={20}
            onPress={() => setImage(null)}
            style={styles.closeIcon}
          />
        </View>
      ) : (
        <View style={styles.profileImageContainer}>
          <ProfileImage width={200} height={200} />
          <CrossIcon
            size={20}
            onPress={() => setImage(null)}
            style={styles.closeIcon}
          />
        </View>
      )}
      <View style={{marginTop:10, marginBottom:10,}}>
      <Text style={styles.subText}>
        Add a Profile Picture
      </Text>
      </View>
     
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Camera width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={chooseImage}>
          <Gallery width={40} height={40} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity     onPress={()=>{
                    navigation.navigate("PatientForm4")
                }} style={styles.btnShape}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>

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
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    // backgroundColor: '#1A4F75',
    top: -10,
    right: -10,
  },

  button: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 17,
    alignItems: 'center',
    width: '27%',
    elevation:6, 
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },

  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  text: {
    marginTop: '1%',
    fontSize: 20,
    width: '60%',
    color: colors.contentColor,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    alignSelf: 'center',
  },
  Label: {
    fontSize: 15,
    marginTop: 4,
    width: '80%',
    color: colors.contentColor,
    fontWeight: '900',
    marginLeft: '7%',
  },
  subText: {
    fontSize: 14,
    marginTop: 7,
    marginBottom: 20,
    width: '70%',
    color: colors.contentColor,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    alignSelf: 'center',
    textAlign: 'center',
  },
  
  
  text2: {
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
  },
  text3: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '2%',
    color: '#6A707C',
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    fontWeight: '600',
  },
  btnShape: {
    height: 47,
    width: '87%',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: colors.btnclr,
    marginTop: 60,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 13,
    color: colors.white,
    fontWeight: '900',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%',
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
  border: {
    borderBottomColor: 'white',
  },
  image: {
    width: 180, // adjust as necessary
    height: 180, // adjust as necessary
    borderRadius: 180, // half of width and height to make it a circle
    marginTop: 20,
    alignContent: 'center',

    marginBottom: 30,
  },
  profileImageContainer: {
    width: 190, // same as the image width
    height: 190, // same as the image height
    borderRadius: 190, // to make it a circle
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    paddingTop: 10,
    marginBottom: 30,
  },
 
});
