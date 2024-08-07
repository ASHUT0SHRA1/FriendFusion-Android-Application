import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import userIcon from '../Assets/user.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const UserCard = ({ items, userId , isRequest }) => {
    const navigation = useNavigation();  
    const users = items.userslist;

    const handleFriendRequest = async(userId , selectedUserid) =>{
        const userid = userId;
  
        try {
            console.log(userid , " + "  , selectedUserid);
            const resp =  await axios.post(`/auth/friend-request`, {userid, selectedUserid});
            navigation.replace('About');
        } catch (error) {
            Alert.alert("Unable to add friend request");
        }
    }
    return (
        <View style={{ margin: 5 }}>
            { 
                users?.map((item, i) =>
                    <View style={styles.container} key={i}>
                        <View style={styles.containerr}>
                            <View style={
                                styles.imgcontainer
                            }>
                                <Image source={userIcon} style={{ height: 30, width: 30, }} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, textAlign: "center" }}>{item?.name}</Text>
                            </View>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={() => handleFriendRequest(userId , item?._id)}>
                                <Text>
                                   { isRequest? "Accept Request" : "Add Friend"}
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                )
            }
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: { flexDirection: 'row', height: 60, borderRadius: 10, alignItems: 'center', padding: 5, marginTop: 5, marginBottom: 5, justifyContent: "space-between" },
    containerr: { flexDirection: 'row', justifyContent: "space-between", alignItems: "center" },
    imgcontainer: { borderWidth: 0.3, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25, width: 50, marginLeft: -5, marginRight: 10 },
    btn: { backgroundColor: "white", height: 40, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }

})