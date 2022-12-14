import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// Variables
import COLORS from '../Assets/Colors'

const CustomButton = ({ onPress, text, type = "PRIMARY", container, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`], style]}>
      <View style={styles.btnTextContainer}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginVertical: 20,
    marginHorizontal: 10,


    alignItems: 'center',
    borderRadius: 30,

    flexDirection: "row",
  },
  btnTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronContainer: {
    backgroundColor: COLORS.theme,
    borderRadius: 15,
  },

  container_PRIMARY: {
    backgroundColor: COLORS.light,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  text: {
    color: COLORS.theme,
    fontWeight: 'bold'
  },

  text_SECONDARY: {
    color: '#808080',
  }
})