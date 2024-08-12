import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import userIcon from '../Assets/user.png'
import { useNavigation } from '@react-navigation/native';

const FriendsListcompo = ({userlist, buttonName, userid}) => {
    const navigation = useNavigation();

    return (
    <View>
      {
                userlist?.map((item, i) =>
                    <View style={styles.container} key={i}>
                        <View style={styles.containerr}>
                            <View style={
                                styles.imgcontainer
                            }>
                                <Image source={item?.image ? {uri : item?.image} : userIcon} style={{ height: 30, width: 30, }} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, textAlign: "center" }}>{item?.name}</Text>
                            </View>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={()=>{
                                navigation.navigate('Message',{
                                    userid : userid , 
                                    selecteduserid : item?._id
                                });
                            }} >
                                <Text>
                                    {buttonName}
                                </Text> 
                            </TouchableOpacity>
                 

                        </View>

                    </View>
                )
            }
    </View>
  )
}

export default FriendsListcompo

const styles = StyleSheet.create({
    
    container: { flexDirection: 'row', height: 60, borderRadius: 10, alignItems: 'center', padding: 5, marginTop: 5, marginBottom: 5, justifyContent: "space-between" },
    containerr: { flexDirection: 'row', justifyContent: "space-between", alignItems: "center" },
    imgcontainer: { borderWidth: 0.3, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25, width: 50, marginLeft: -5, marginRight: 10 },
    btn: { backgroundColor: "white", height: 40, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }

})