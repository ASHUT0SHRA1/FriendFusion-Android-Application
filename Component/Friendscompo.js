import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import friendsIcon from '../Assets/friend1.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const Friendscompo = () => {
    const navigation = useNavigation(); 
  return (
    <View>
      <TouchableOpacity onPress={()=>{
        navigation.push('Friend');
      }}>
        <Image source={friendsIcon} style={{height : 35 , width : 35 }}/>
      </TouchableOpacity>
    </View>
  )
}

export default Friendscompo

const styles = StyleSheet.create({})