import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Posts from '../Component/Posts'
import axios from 'axios'
import { AuthContext } from '../context/authcontext'

const MyPost = () => {
  const [mypost, setmypost] = useState([]);
  const [loading, setloading] = useState(false);
  const [state] = useContext(AuthContext);
  const id = state.user._id;

  const getmyPost = async () => {
    try {
      setloading(true);
      const { data } = await axios.get(`/post/user-post/${id}`);
      setmypost(data?.userposts)
      setloading(false);

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getmyPost();
  }, []);
  return (
    <View style={{margin : 5}}>
    {
      !loading ? 
    <Posts item={mypost} mypostscreen={true} /> : 
      <View style={{justifyContent : 'center' , alignItems : 'center'}}>
        <Text>Loading</Text>
      </View>
    }

    </View>
  )
}

export default MyPost

const styles = StyleSheet.create({})
