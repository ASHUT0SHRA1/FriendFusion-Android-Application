import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTextCompo = ({title , secureText , keyboardType , value , setvalue }) => {
  return (
    <View style={styles.textinputCompo}>
      <Text>{title}</Text>
      <TextInput style={styles.inputBox} secureTextEntry={secureText} placeholder={keyboardType}
      value={value}
      onChangeText={(text)=>{setvalue(text)}}
      />
    </View>
  )
}

export default InputTextCompo

const styles = StyleSheet.create({
    inputBox: {
        height : 40 , 
        marginBottom : 20 , 
        backgroundColor : '#ffffff', 
        borderRadius  :10 ,
        marginTop : 10 , 
    }, 
    textinputCompo : {
        marginHorizontal : 10 
    }
})