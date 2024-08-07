import { StyleSheet, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/authcontext';
import FriendsListcompo from '../Component/FriendsListcompo';

const Friends = ({ navigation }) => {
    const [state] = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [userlist, setuserList] = useState([]);
    const userid = state.user._id;
    useEffect(() => {
        getUserFriends()
    }, []);
    const getUserFriends = async () => {
        setIsLoading(true)
        try {
            const data = await axios.get(`auth/user/user-friends/${userid}`);
            setuserList(data.data.userfriends)
            console.log(userlist)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={{ margin: 5 }}>
            <FriendsListcompo userlist={userlist} buttonName={'Message'} userid={userid} />
        </View>
    );
};

const styles = StyleSheet.create({

    // Add more styles for other friend details
});

export default Friends;