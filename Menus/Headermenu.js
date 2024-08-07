import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authcontext';
import { TouchableOpacity } from 'react-native-gesture-handler';

import logoutIcon from '../Assets/exit.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Headermenu = ({navigation}) => {
    
    const [state , setstate] = useContext(AuthContext);
    const handleLogout = async()=>{
        setstate({user : null , token : ''});
        await AsyncStorage.removeItem("@auth")
      }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image source={logoutIcon} style={{height : 25 , width : 25 , marginTop : 1}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Headermenu

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        margin  : 10 , 
        justifyContent : 'space-between'
    }
})