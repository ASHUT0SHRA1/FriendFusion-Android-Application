import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Menus/Footer'
import { AuthContext } from '../context/authcontext';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import UserCard from '../Component/UserCard';
import RequestList from '../Component/RequestList';

const About = () => {
  const [state] = useContext(AuthContext);
  const [userlist, setuserList] = useState([]);
  const id = state.user._id;

  const getUsers = async () => {
    const { data } = await axios.get(`auth/userlist/${id}`);
    setuserList(data)
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>


      <ScrollView>
        <RequestList userid={id}/>
        <Text>Add Friends</Text>
        <UserCard items={userlist} userId = {id} isRequest={false} />
      </ScrollView>
      <Footer />
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10,
    margin: 1
  }
})