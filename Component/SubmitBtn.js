import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SubmitBtn = ({title, loading, handleSubmit}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>{loading ? 'please wait ...' :title}</Text>
    </TouchableOpacity>
  )
}

export default SubmitBtn

const styles = StyleSheet.create({
    btn : {
        backgroundColor : '#1e2225' , 
        height : 50 , 
        marginHorizontal : 35 , 
        borderRadius : 80, 
        justifyContent : 'center',
        marginBottom : 20 , 
    }, 
    btnText : {
        color : '#ffffff', 
        textAlign : "center", 
        fontSize : 22 , 
        fontWeight : "300"
    }
})