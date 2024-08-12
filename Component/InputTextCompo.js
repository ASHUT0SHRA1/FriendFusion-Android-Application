import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTextCompo = ({ title, secureText, keyboardType, value, setvalue  }) => {
  return (
    <View style={styles.textinputCompo}>
      <Text style={{fontSize : 13 , fontWeight : '400' , color : 'black' }}>{title}</Text>
      <TextInput 
        style={styles.inputBox} 
        secureTextEntry={secureText} 
        placeholder={keyboardType}
        value={value}
        onChangeText={(text) => { setvalue(text) }}
      />
    </View>
  )
}

export default InputTextCompo

const styles = StyleSheet.create({
  inputBox: { 
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  textinputCompo: {
    marginHorizontal: 10
  }
})