import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import CustomInput from '../components/CustomInput'


const HomeScreen = () => {
  return (
    <View>
      <Image
        source={require('../Assets/images/mapSample.png')}
        style={styles.img}
      />

      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} 
      /> */}
      <View style={styles.block}>
        <Text style={styles.formality}>
          Travel Safe Only If Necessary!
        </Text>
      </View>
      <CustomInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 30 }} />


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 400
  },
  block: {
    backgroundColor: "#1c4966",
    width: 500
  },
  formality: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 8
  }

})