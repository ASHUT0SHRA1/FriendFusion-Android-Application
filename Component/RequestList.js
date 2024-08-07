import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import userIcon from '../Assets/user.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

const RequestList = ({ userid }) => {
    const [requestList, setrequestList] = useState([]);
    const [sentFriendRequestlist, setsentFriendRequestlist] = useState([]);

    const getRequest = async () => {
        try {
            const resp = await axios.get(`auth/getfriend-request/${userid}`);
            // setrequestList(data)
            setrequestList(resp.data.getfriendrequest)
            setsentFriendRequestlist(resp.data.sentfriendrequest);
        } catch (error) {
            console.log(error)

        }
    }
    const handleAcceptRequest = async (selectedUserid) => {
        try {
            const senderId = selectedUserid;
            const recepientId = userid;
            const data = await axios.post(`auth/accept-friend-request`, { senderId, recepientId });
            Alert.alert('accepted');
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getRequest();
    }, []);
    return (
        <View style={{ margin: 5 }}>
            {requestList.length ?
                <Text>
                    Friend Request list
                </Text>
                : null}
            {requestList?.map((item, i) =>
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
                        <TouchableOpacity style={styles.btn} onPress={() => { handleAcceptRequest(item?._id) }}>
                            <Text>
                                Accept Req..
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            )}
            {
                sentFriendRequestlist.length ? <Text>Sent Friend Request </Text> : null
            }
            {sentFriendRequestlist?.map((item, i) =>
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
                        <TouchableOpacity style={styles.btn} >
                            <Text>
                                Request Sent
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            )}
        </View>
    )
}

export default RequestList

const styles = StyleSheet.create({
    container: { flexDirection: 'row', height: 60, borderRadius: 10, alignItems: 'center', padding: 5, marginTop: 5, marginBottom: 5, justifyContent: "space-between" },
    containerr: { flexDirection: 'row', justifyContent: "space-between", alignItems: "center" },
    imgcontainer: { borderWidth: 0.3, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25, width: 50, marginLeft: -5, marginRight: 10 },
    btn: { backgroundColor: "white", height: 40, width: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }

})